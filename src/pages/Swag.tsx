import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Download, Upload, User, Sparkles, Smartphone, RectangleVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// --- ASSETS ---
// Ensure these images exist in your assets folder
import swagBgPortrait from "@/assets/Group 11.svg"; 
import swagBgStory from "@/assets/Group 11.svg"; 

// --- TYPES ---
type FormatConfig = {
  id: string;
  label: string;
  icon: React.ElementType;
  aspectRatio: string; // CSS aspect-ratio value
  bgImage: string;
  width: number;
  height: number;
  // Position config (Normalized 0 to 1 based on Width/Height)
  pos: {
    circleCy: number;   // Center Y (percentage of height)
    circleRad: number;  // Radius (percentage of WIDTH)
    plateCy: number;    // Text Center Y (percentage of height)
    plateWidth: number; // Max Text Width (percentage of WIDTH)
  }
};

export default function Swag() {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Default to Portrait since Square is removed
  const [selectedFormat, setSelectedFormat] = useState<"portrait" | "story">("portrait");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- CONFIGURATION MAP ---
  // Only 4:5 and 9:16 allowed
  const FORMATS: Record<string, FormatConfig> = {
    portrait: {
      id: "portrait",
      label: "Portrait (4:5)",
      icon: RectangleVertical,
      aspectRatio: "4/5",
      bgImage: swagBgPortrait, 
      width: 4096,
      height: 5120, // 4:5 Ratio
      pos: {
        // TODO: Adjust these decimals to match your specific SVG/PNG layout
        circleCy: 0.40, // 40% down from top
        circleRad: 0.225, // Radius is 22.5% of the total Width
        plateCy: 0.75, // Text is 75% down from top
        plateWidth: 0.55,
      }
    },
    story: {
      id: "story",
      label: "Story (9:16)",
      icon: Smartphone,
      aspectRatio: "9/16",
      bgImage: swagBgStory, 
      width: 4096,
      height: 7282, // 9:16 Ratio
      pos: {
        // TODO: Adjust these decimals to match your specific SVG/PNG layout
        circleCy: 0.35, 
        circleRad: 0.225, 
        plateCy: 0.70, 
        plateWidth: 0.55,
      }
    }
  };

  const activeConfig = FORMATS[selectedFormat];

  // Font loading only
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
    e.target.value = ""; 
  };

  const useDefaultImage = () => setProfileImage(null);

  /* ---------------- DRAWING LOGIC ---------------- */
  const downloadSwag = async () => {
    setIsGenerating(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Setup Canvas based on Active Config
    const W = activeConfig.width;
    const H = activeConfig.height;
    
    canvas.width = W;
    canvas.height = H;

    // Clear canvas
    ctx.clearRect(0, 0, W, H);

    const cx = W * 0.5;
    const circleY = H * activeConfig.pos.circleCy;
    const circleRadius = W * activeConfig.pos.circleRad; 
    const plateY = H * activeConfig.pos.plateCy;
    
    // --- 2. Draw Profile Picture (Bottom Layer) ---
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, circleY, circleRadius, 0, Math.PI * 2);
    ctx.clip(); 

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
      // Default placeholder
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, W, H);
      ctx.font = `${circleRadius}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("🚀", cx, circleY);
    }
    
    // Tint
    ctx.globalCompositeOperation = "overlay";
    ctx.fillStyle = "rgba(0, 190, 255, 0.15)";
    ctx.fillRect(0, 0, W, H);
    ctx.restore(); 

    // --- 3. Draw Background Frame (Middle Layer) ---
    const bg = new Image();
    bg.crossOrigin = "anonymous";
    bg.src = activeConfig.bgImage;

    await new Promise<void>((resolve) => {
      bg.onload = () => {
        ctx.drawImage(bg, 0, 0, W, H);
        resolve();
      };
      bg.onerror = () => resolve();
    });

    // --- 4. Draw Name (Top Layer) ---
    const displayName = name.trim() || "HACKER NAME";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    let fontSize = 210;
    ctx.font = `900 ${fontSize}px 'Cinzel', serif`;
    let textWidth = ctx.measureText(displayName.toUpperCase()).width;
    const maxTextWidth = W * activeConfig.pos.plateWidth;

    while (textWidth > maxTextWidth && fontSize > 60) {
      fontSize -= 10;
      ctx.font = `900 ${fontSize}px 'Cinzel', serif`;
      textWidth = ctx.measureText(displayName.toUpperCase()).width;
    }

    // Gradient Text
    const textGradient = ctx.createLinearGradient(0, plateY - 100, 0, plateY + 100);
    textGradient.addColorStop(0, "#452814"); 
    textGradient.addColorStop(0.5, "#1a0f08");
    textGradient.addColorStop(1, "#452814"); 
    ctx.fillStyle = textGradient;

    ctx.shadowColor = "rgba(255, 255, 255, 0.2)";
    ctx.shadowOffsetY = 3;
    ctx.fillText(displayName.toUpperCase(), cx, plateY);
    ctx.shadowColor = "transparent";

    // --- 5. Save ---
    const link = document.createElement("a");
    link.download = `hackthespring26-${activeConfig.id}-${displayName.replace(/\s/g, "")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    setIsGenerating(false);
  };

  /* ---------------- UI RENDER ---------------- */
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090216] p-4 font-sans overflow-hidden">
      
      <div className="w-full max-w-6xl z-10 grid lg:grid-cols-2 gap-8 items-center h-full">
        
        {/* PREVIEW SECTION */}
        <div className="flex flex-col items-center justify-center order-2 lg:order-1 h-full min-h-[500px]">
          <div 
            className="relative rounded-xl shadow-2xl border border-white/10 bg-[#090216] transition-all duration-500 ease-in-out"
            style={{
                aspectRatio: activeConfig.aspectRatio,
                width: selectedFormat === 'story' ? 'auto' : '100%',
                height: selectedFormat === 'story' ? '600px' : 'auto',
                maxWidth: '500px'
            }}
          >
            
            {/* 1. Profile Picture (Bottom) */}
            <div 
              className="absolute z-10 rounded-full overflow-hidden bg-black/50 flex items-center justify-center"
              style={{
                top: `${(activeConfig.pos.circleCy * 100)}%`, 
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: `${activeConfig.pos.circleRad * 2 * 100}%`,
                aspectRatio: '1/1', 
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

             {/* 2. Background ImageFrame (Middle) */}
            <img 
              src={activeConfig.bgImage} 
              alt="Badge Template" 
              className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"
            />

            {/* 3. Name Text (Top) */}
            <div 
              className="absolute z-30 flex items-center justify-center text-center"
              style={{
                top: `${activeConfig.pos.plateCy * 100}%`,
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                maxWidth: `${activeConfig.pos.plateWidth * 100}%`
              }}
            >
              <h2 
                className="font-serif font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#5c3a21] via-[#1a1109] to-[#5c3a21] whitespace-nowrap"
                style={{ 
                   fontSize: 'clamp(16px, 3.5cqw, 32px)',
                   filter: 'drop-shadow(0px 1px 1px rgba(255,255,255,0.2))' 
                }} 
              >
                {name || "HACKER NAME"}
              </h2>
            </div>
          </div>
          <p className="mt-4 text-xs text-white/40 font-mono">
            {activeConfig.label}
          </p>
        </div>

        {/* CONTROLS SECTION */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl order-1 lg:order-2">
            <Link to="/">
              {/* CHANGE HERE: added hover:bg-transparent */}
              <Button variant="ghost" className="pl-0 gap-2 text-white/60 hover:text-white hover:bg-transparent mb-4">
                <ArrowLeft size={16} /> Back
              </Button>
            </Link>

            <h1 className="text-3xl font-bold text-white mb-2">GALACTIC ID</h1>
            <p className="text-white/60 mb-8 font-barlow">Official Hack The Spring '26 Identity</p>

            <div className="space-y-6 pt-4">
              
              {/* FORMAT SELECTOR */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-amber-500 uppercase tracking-widest ml-1">Format</label>
                <div className="grid grid-cols-2 gap-2">
                   {Object.values(FORMATS).map((fmt) => (
                       <button
                        key={fmt.id}
                        onClick={() => setSelectedFormat(fmt.id as any)}
                        className={cn(
                            "flex flex-col items-center justify-center gap-2 p-4 rounded-lg border transition-all",
                            selectedFormat === fmt.id 
                                ? "bg-amber-500/10 border-amber-500 text-amber-500" 
                                : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                        )}
                       >
                           <fmt.icon size={24} />
                           <span className="text-xs font-bold uppercase">{fmt.id}</span>
                       </button>
                   ))}
                </div>
              </div>

              {/* NAME INPUT */}
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

              {/* IMAGE CONTROLS */}
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

              {/* DOWNLOAD BUTTON */}
              <Button
                onClick={downloadSwag}
                disabled={isGenerating}
                className="w-full h-14 font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white"
              >
                {isGenerating ? (
                  <span className="flex items-center"><Sparkles className="mr-2 animate-spin" /> Processing...</span>
                ) : (
                  <span className="flex items-center"><Download className="mr-2" /> Download Badge</span>
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