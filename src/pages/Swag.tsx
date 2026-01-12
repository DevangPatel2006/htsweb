import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Download, Upload, User, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StarField from "@/components/StarField";
import swagBg from "@/assets/bg.png"; // Ensure this bg exists or swap with space-hero-bg.png

export default function Swag() {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load custom fonts for Canvas
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await document.fonts.load("bold 120px 'Cinzel'");
        await document.fonts.load("120px 'MyCustomFont'"); // Guardians font
      } catch (e) {
        console.error("Font loading failed", e);
      }
    };
    loadFonts();
  }, []);

  /* ---------------- IMAGE UPLOAD ---------------- */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => setProfileImage(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const useDefaultImage = () => setProfileImage(null);

  /* ---------------- DRAW & DOWNLOAD ---------------- */
  const downloadSwag = async () => {
    setIsGenerating(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // High Resolution (4K for crispness, 16k is often unstable in browsers)
    const SIZE = 4096; 
    canvas.width = SIZE;
    canvas.height = SIZE;

    /* 1. Background Fill */
    // Create a deep space gradient if image fails or as base
    const gradient = ctx.createLinearGradient(0, 0, 0, SIZE);
    gradient.addColorStop(0, "#0b0c15");
    gradient.addColorStop(1, "#13001e");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, SIZE, SIZE);

    /* 2. Background Image Overlay */
    const bg = new Image();
    bg.crossOrigin = "anonymous";
    bg.src = swagBg;

    await new Promise<void>((resolve) => {
      bg.onload = () => {
        // Draw image covering the canvas while maintaining aspect ratio
        const scale = Math.max(SIZE / bg.width, SIZE / bg.height);
        const x = (SIZE - bg.width * scale) / 2;
        const y = (SIZE - bg.height * scale) / 2;
        ctx.drawImage(bg, x, y, bg.width * scale, bg.height * scale);
        
        // Darken overlay for text readability
        ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
        ctx.fillRect(0, 0, SIZE, SIZE);
        resolve();
      };
      bg.onerror = () => resolve(); // Proceed even if bg fails
    });

    const cx = SIZE / 2;
    const cy = SIZE / 2;

    /* 3. Decorative Badge Frame (Gold/Tech look) */
    ctx.shadowColor = "#facc15";
    ctx.shadowBlur = 50;
    ctx.strokeStyle = "rgba(250, 204, 21, 0.8)"; // Gold
    ctx.lineWidth = 20;

    // Outer Hexagon or Circle
    ctx.beginPath();
    ctx.arc(cx, cy, SIZE * 0.42, 0, Math.PI * 2);
    ctx.stroke();

    // Inner rim
    ctx.strokeStyle = "rgba(147, 51, 234, 0.5)"; // Purple
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(cx, cy, SIZE * 0.40, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0; // Reset shadow

    /* 4. Profile Picture */
    const radius = SIZE * 0.18;
    const profileY = cy - 150; // Shifted up slightly

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, profileY, radius, 0, Math.PI * 2);
    ctx.clip();

    if (profileImage) {
      const img = new Image();
      img.src = profileImage;
      await new Promise<void>((resolve) => {
        img.onload = () => {
          // Object cover logic for circle
          const scale = Math.max((radius * 2) / img.width, (radius * 2) / img.height);
          const w = img.width * scale;
          const h = img.height * scale;
          ctx.drawImage(img, cx - w / 2, profileY - h / 2, w, h);
          resolve();
        };
        img.onerror = () => resolve();
      });
    } else {
      // Default Avatar
      ctx.fillStyle = "#1e1b4b";
      ctx.fillRect(cx - radius, profileY - radius, radius * 2, radius * 2);
      ctx.font = `${radius}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#facc15";
      ctx.fillText("🚀", cx, profileY);
    }
    ctx.restore();

    // Profile Border Ring
    ctx.strokeStyle = "#facc15"; // Gold
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.arc(cx, profileY, radius, 0, Math.PI * 2);
    ctx.stroke();

    /* 5. Text Layers */
    ctx.textAlign = "center";
    
    // "DUHACKS 5.0" Header
    ctx.font = "bold 180px 'MyCustomFont', 'Cinzel', serif"; // Use Guardians font
    ctx.fillStyle = "#facc15"; // Gold
    ctx.shadowColor = "rgba(250, 204, 21, 0.8)";
    ctx.shadowBlur = 40;
    ctx.fillText("DUHACKS 5.0", cx, profileY - radius - 150);
    ctx.shadowBlur = 0;

    // Subtitle
    ctx.font = "100px 'Barlow', sans-serif";
    ctx.fillStyle = "#e2e8f0";
    ctx.fillText("OFFICIAL HACKER", cx, profileY - radius - 60);

    // User Name
    const displayName = name.trim() || "HACKER NAME";
    ctx.font = "bold 240px 'Cinzel', serif";
    ctx.fillStyle = "#ffffff";
    // Add text outline
    ctx.strokeStyle = "#4b1c0d";
    ctx.lineWidth = 8;
    ctx.strokeText(displayName, cx, profileY + radius + 250);
    ctx.fillText(displayName, cx, profileY + radius + 250);

    // Footer Text
    ctx.font = "80px 'Barlow', sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("HACK THE SPRING 2026 • SPACE EDITION", cx, SIZE - 200);

    /* 6. Download */
    const link = document.createElement("a");
    link.download = `duhacks-swag-${displayName.replace(/\s+/g, "-").toLowerCase()}.png`;
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
    
    setIsGenerating(false);
  };

  /* ---------------- UI RENDER ---------------- */
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-background overflow-hidden font-body selection:bg-primary selection:text-black">
      <StarField />
      
      {/* Hidden Canvas for Generation */}
      <canvas ref={canvasRef} className="hidden" />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />

      {/* Main Glass Card */}
      <div className="relative z-10 w-full max-w-5xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        <div className="grid lg:grid-cols-2 gap-0">
          
          {/* Left: Preview Section */}
          <div className="bg-gradient-to-br from-white/5 to-transparent p-8 md:p-12 flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-r border-white/10">
             {/* Decorative Elements */}
             <div className="absolute top-6 left-6 w-20 h-20 border-l-2 border-t-2 border-primary/50 rounded-tl-xl" />
             <div className="absolute bottom-6 right-6 w-20 h-20 border-r-2 border-b-2 border-primary/50 rounded-br-xl" />
            
            <h2 className="text-xl md:text-2xl font-display text-primary tracking-widest mb-8 text-center uppercase">
              Badge Preview
            </h2>

            {/* Live Preview Card */}
            <div className="relative group aspect-square w-full max-w-md rounded-full border-4 border-primary/30 p-2 shadow-[0_0_50px_rgba(250,204,21,0.1)] transition-transform duration-500 hover:scale-[1.02]">
               <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse-glow" />
               
               <div className="w-full h-full rounded-full overflow-hidden relative bg-black">
                  {/* Background Layer */}
                  <img 
                    src={swagBg} 
                    alt="Background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

                  {/* Content Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-lg overflow-hidden mb-6 bg-deep-space">
                      {profileImage ? (
                        <img src={profileImage} className="w-full h-full object-cover" alt="Profile" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl bg-white/5">
                          🚀
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white drop-shadow-lg break-words w-full px-4 leading-tight">
                      {name || "HACKER NAME"}
                    </h3>
                    <p className="text-primary font-display tracking-widest mt-2 text-sm md:text-base opacity-90">
                      OFFICIAL PARTICIPANT
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground font-mono bg-black/40 px-3 py-1 rounded-full border border-white/10">
                      <Sparkles size={12} className="text-primary" />
                      DUHACKS 5.0
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right: Controls Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-black/20">
            <div className="mb-8">
              <Link to="/">
                <Button variant="ghost" className="pl-0 gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ArrowLeft size={16} /> Return to Mission Control
                </Button>
              </Link>
              
              <div className="mt-6">
                <h1 className="text-3xl md:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                  Identity Card
                </h1>
                <p className="text-muted-foreground mt-2">
                  Generate your official Hack The Spring 2026 digital badge.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-primary/80 uppercase tracking-widest ml-1">
                  Codename / Name
                </label>
                <Input
                  value={name}
                  onChange={(e) => {
                    if (e.target.value.length <= 25) setName(e.target.value);
                  }}
                  className="bg-white/5 border-white/10 focus:border-primary/50 text-lg h-12 text-center font-display tracking-wide placeholder:text-white/20"
                  placeholder="ENTER NAME"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="h-12 bg-transparent border-white/10 hover:bg-white/5 hover:border-primary/30 hover:text-primary transition-all group"
                >
                  <Upload size={18} className="mr-2 group-hover:-translate-y-0.5 transition-transform" /> 
                  Upload Photo
                </Button>
                <Button 
                  variant="outline" 
                  onClick={useDefaultImage}
                  className="h-12 bg-transparent border-white/10 hover:bg-white/5 hover:text-white"
                >
                  <User size={18} className="mr-2" /> 
                  Reset
                </Button>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Button
                  onClick={downloadSwag}
                  disabled={isGenerating}
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-orange-600 hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(250,204,21,0.3)] text-black"
                >
                  {isGenerating ? (
                    <span className="animate-pulse">Processing...</span>
                  ) : (
                    <>
                      <Download size={20} className="mr-2" />
                      Download High-Res Badge
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4 font-mono">
                  * Generates 4K Ultra-HD Image. Please allow a moment.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}