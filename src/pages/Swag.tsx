import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Download, Upload, User, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import swagBg from "@/assets/bg.png"; // Ensure this matches your filename

export default function Swag() {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- ALIGNMENT CONFIGURATION ---
  const POS = {
    CIRCLE_CY: 0.46,    // Vertical center of the circle (46% from top)
    CIRCLE_RAD: 0.225,  // Radius of the circle (22.5% of width)
    PLATE_CY: 0.865,    // Vertical center of the gold plate
    PLATE_WIDTH: 0.55,  // Max width for text
  };

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await document.fonts.load("900 120px 'Cinzel'");
      } catch (e) {
        console.error("Font loading failed", e);
      }
    };
    loadFonts();
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    
    // Reset input so you can re-upload the same file if needed
    e.target.value = ""; 
  };

  const useDefaultImage = () => setProfileImage(null);

  /* ---------------- DRAWING LOGIC (DOWNLOAD) ---------------- */
  const downloadSwag = async () => {
    setIsGenerating(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Setup Canvas
    const SIZE = 4096;
    canvas.width = SIZE;
    canvas.height = SIZE;

    const cx = SIZE * 0.5;
    const circleY = SIZE * POS.CIRCLE_CY;
    const circleRadius = SIZE * POS.CIRCLE_RAD;
    const plateY = SIZE * POS.PLATE_CY;
    
    // 2. Draw Background
    const bg = new Image();
    bg.crossOrigin = "anonymous";
    bg.src = swagBg;

    await new Promise<void>((resolve) => {
      bg.onload = () => {
        ctx.drawImage(bg, 0, 0, SIZE, SIZE);
        resolve();
      };
      bg.onerror = () => resolve(); // Attempt to draw anyway
    });

    // 3. Draw Profile Picture (ON TOP of BG)
    // We clip a circle region first, then draw the image into it.
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, circleY, circleRadius, 0, Math.PI * 2);
    ctx.clip(); // Mask everything to this circle

    if (profileImage) {
      const img = new Image();
      img.src = profileImage;
      await new Promise<void>((resolve) => {
        img.onload = () => {
          // Calculate Aspect Ratio to "Cover" the circle
          const scale = Math.max((circleRadius * 2) / img.width, (circleRadius * 2) / img.height);
          const w = img.width * scale;
          const h = img.height * scale;
          // Center the image
          ctx.drawImage(img, cx - w / 2, circleY - h / 2, w, h);
          resolve();
        };
        img.onerror = () => resolve();
      });
    } else {
      // Default placeholder if no image
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, SIZE, SIZE);
      ctx.font = `${circleRadius}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("🚀", cx, circleY);
    }
    
    // Optional: Add a blue hologram tint over the photo
    ctx.globalCompositeOperation = "overlay";
    ctx.fillStyle = "rgba(0, 190, 255, 0.15)";
    ctx.fillRect(0, 0, SIZE, SIZE);
    
    ctx.restore(); // Remove clipping

    // 4. Draw Name
    const displayName = name.trim() || "HACKER NAME";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    let fontSize = 210;
    ctx.font = `900 ${fontSize}px 'Cinzel', serif`;
    let textWidth = ctx.measureText(displayName.toUpperCase()).width;
    const maxTextWidth = SIZE * POS.PLATE_WIDTH;

    while (textWidth > maxTextWidth && fontSize > 60) {
      fontSize -= 10;
      ctx.font = `900 ${fontSize}px 'Cinzel', serif`;
      textWidth = ctx.measureText(displayName.toUpperCase()).width;
    }

    // Gradient Text (Engraved Look)
    const textGradient = ctx.createLinearGradient(0, plateY - 100, 0, plateY + 100);
    textGradient.addColorStop(0, "#452814");   // Dark Brown
    textGradient.addColorStop(0.5, "#1a0f08"); // Nearly Black
    textGradient.addColorStop(1, "#452814");   // Dark Brown
    ctx.fillStyle = textGradient;

    ctx.shadowColor = "rgba(255, 255, 255, 0.2)";
    ctx.shadowOffsetY = 3;
    ctx.fillText(displayName.toUpperCase(), cx, plateY);
    ctx.shadowColor = "transparent";

    // 5. Save
    const link = document.createElement("a");
    link.download = `hackthespring26-${displayName.replace(/\s/g, "")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    setIsGenerating(false);
  };

  /* ---------------- UI RENDER ---------------- */
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090216] p-4 font-sans overflow-hidden">
      
      <div className="w-full max-w-6xl z-10 grid lg:grid-cols-2 gap-8 items-center">
        
        {/* PREVIEW SECTION */}
        <div className="flex flex-col items-center order-2 lg:order-1">
          <div className="relative w-full max-w-[450px] aspect-square rounded-xl shadow-2xl border border-white/10 bg-[#090216]">
            
            {/* 1. Background Image (Z-10: Bottom) */}
            <img 
              src={swagBg} 
              alt="Badge Template" 
              className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
            />

            {/* 2. Profile Picture (Z-20: Top) - FIXED: Now sits on top of bg */}
            <div 
              className="absolute z-20 rounded-full overflow-hidden bg-black/50 flex items-center justify-center"
              style={{
                top: `${(POS.CIRCLE_CY - POS.CIRCLE_RAD) * 100}%`,
                left: `${(0.5 - POS.CIRCLE_RAD) * 100}%`,
                width: `${POS.CIRCLE_RAD * 2 * 100}%`,
                height: `${POS.CIRCLE_RAD * 2 * 100}%`,
              }}
            >
              {profileImage ? (
                <>
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-cyan-400/10 mix-blend-overlay pointer-events-none" />
                </>
              ) : (
                <div className="text-4xl animate-pulse">🚀</div>
              )}
            </div>

            {/* 3. Name Text (Z-30: Top Most) */}
            <div 
              className="absolute z-30 w-full flex items-center justify-center text-center"
              style={{
                top: '82%', // Visual tweak for preview alignment
                height: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                maxWidth: '55%'
              }}
            >
              <h2 
                className="font-serif font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#5c3a21] via-[#1a1109] to-[#5c3a21]"
                style={{ 
                   fontSize: 'clamp(16px, 3.5cqw, 32px)',
                   filter: 'drop-shadow(0px 1px 1px rgba(255,255,255,0.2))' 
                }} 
              >
                {name || "HACKER NAME"}
              </h2>
            </div>
          </div>
          <p className="mt-4 text-xs text-white/40 font-mono">Preview Mode • 4K Export Available</p>
        </div>

        {/* CONTROLS SECTION */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl order-1 lg:order-2">
            <Link to="/">
              <Button variant="ghost" className="pl-0 gap-2 text-white/60 hover:text-white mb-4">
                <ArrowLeft size={16} /> Back
              </Button>
            </Link>

            <h1 className="text-3xl font-bold text-white mb-2">Badge Generator</h1>
            <p className="text-white/60 mb-8">Official Hack The Spring '26 Identity</p>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-amber-500 uppercase tracking-widest ml-1">Codename</label>
                <Input
                  value={name}
                  onChange={(e) => {
                    if (e.target.value.length <= 20) setName(e.target.value);
                  }}
                  className="bg-black/40 border-white/10 h-12 text-center text-lg font-serif placeholder:text-white/20"
                  placeholder="ENTER NAME"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="h-12 bg-white/5 border-white/10 hover:bg-white/10 hover:text-amber-400"
                >
                  <Upload size={16} className="mr-2" /> Upload
                </Button>
                <Button 
                  variant="outline" 
                  onClick={useDefaultImage}
                  className="h-12 bg-white/5 border-white/10 hover:bg-white/10 hover:text-red-400"
                >
                  <User size={16} className="mr-2" /> Reset
                </Button>
              </div>

              <Button
                onClick={downloadSwag}
                disabled={isGenerating}
                className="w-full h-14 font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white"
              >
                {isGenerating ? (
                  <span className="flex items-center"><Sparkles className="mr-2 animate-spin" /> Processing...</span>
                ) : (
                  <span className="flex items-center"><Download className="mr-2" /> Download 4K Badge</span>
                )}
              </Button>
            </div>
        </div>

      </div>

      <canvas ref={canvasRef} className="hidden" />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />
    </div>
  );
}