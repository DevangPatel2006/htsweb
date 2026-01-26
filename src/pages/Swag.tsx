import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Download, Upload, User, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// --- ASSET ---
import swagBgStory from "@/assets/swagsst.png"; 

export default function Swag() {
  // -------------------------------------------------------------------------
  // --- MANUAL POSITION ADJUSTMENTS (KEPT EXACTLY AS PROVIDED) ---
  // -------------------------------------------------------------------------
  const profileX = 540;   
  const profileY = 755;   
  const nameX = 540;      
  const nameY = 1068;     
  const radius = 185;     
  // -------------------------------------------------------------------------

  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const CANVAS_W = 1080;
  const CANVAS_H = 1920;

  useEffect(() => {
    document.fonts.load("900 40px 'Barlow'");
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setProfileImage(e.target?.result as string);
    reader.readAsDataURL(file);
    e.target.value = ""; 
  };

  const drawCanvas = async () => {
    setIsGenerating(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = CANVAS_W;
    canvas.height = CANVAS_H;

    // --- LAYER 1: PROFILE IMAGE ---
    if (profileImage) {
      const img = new Image();
      img.src = profileImage;
      await new Promise((res) => {
        img.onload = () => {
          ctx.save();
          ctx.beginPath();
          ctx.arc(profileX, profileY, radius, 0, Math.PI * 2);
          ctx.clip();
          const scale = Math.max((radius * 2) / img.width, (radius * 2) / img.height);
          const w = img.width * scale;
          const h = img.height * scale;
          ctx.drawImage(img, profileX - w / 2, profileY - h / 2, w, h);
          ctx.restore();
          res(null);
        };
      });
    }

    // --- LAYER 2: MAIN FRAME ---
    const bg = new Image();
    bg.crossOrigin = "anonymous";
    bg.src = swagBgStory;
    await new Promise((res) => { bg.onload = res; bg.onerror = res; });
    ctx.drawImage(bg, 0, 0, CANVAS_W, CANVAS_H);

    // --- LAYER 3: NAME TEXT (BARLOW + FIRST NAME ONLY + ENGRAVED WHITE) ---
    const rawName = name.trim() || "";
    const firstName = rawName.split(" ")[0].toUpperCase();

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    let fontSize = 45; 
    ctx.font = `900 ${fontSize}px 'Barlow', sans-serif`;
    const maxWidth = 600;
    
    while (ctx.measureText(firstName).width > maxWidth && fontSize > 20) {
      fontSize -= 2;
      ctx.font = `900 ${fontSize}px 'Barlow', sans-serif`;
    }

    // WHITE ENGRAVED GRADIENT
    const textGrad = ctx.createLinearGradient(0, nameY - 20, 0, nameY + 20);
    textGrad.addColorStop(0, "#888888"); // Darker top for inner shadow effect
    textGrad.addColorStop(0.3, "#f0f0f0"); // Transition to white
    textGrad.addColorStop(1, "#ffffff"); // Bright bottom edge

    // Outer shadow for "edge" highlights
    ctx.shadowColor = "rgba(255,255,255,0.2)";
    ctx.shadowBlur = 1;
    ctx.shadowOffsetY = 1;

    ctx.fillStyle = textGrad;
    ctx.fillText(firstName, nameX, nameY);

    const link = document.createElement("a");
    link.download = `galactic-id-${firstName}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050508] p-6 font-barlow">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        
        {/* PREVIEW */}
        <div className="flex flex-col items-center">
          <div 
            className="relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/5 bg-black"
            style={{ aspectRatio: '9/16', height: '80vh', maxHeight: '850px' }}
          >
            {/* PHOTO (Z-10) */}
            <div 
              className="absolute z-10 rounded-full overflow-hidden flex items-center justify-center bg-zinc-900"
              style={{
                top: `${(profileY / 1920) * 100}%`, 
                left: `${(profileX / 1080) * 100}%`, 
                transform: 'translate(-50%, -50%)',
                width: `${(radius * 2 / 1080) * 100}%`,
                aspectRatio: '1/1',
              }}
            >
              {profileImage ? <img src={profileImage} className="w-full h-full object-cover" /> : <span className="text-2xl">🚀</span>}
            </div>

            {/* FRAME (Z-20) */}
            <img src={swagBgStory} className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none" alt="bg" />

            {/* NAME (Z-30) - WHITE ENGRAVED STYLE */}
            <div 
              className="absolute z-30 w-full flex justify-center"
              style={{ 
                top: `${(nameY / 1920) * 100}%`, 
                left: `${(nameX / 1080) * 100}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <h2 
                className="font-barlow font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-white to-white text-center"
                style={{ 
                  fontSize: 'min(3.5vw, 18px)',
                  maxWidth: '60%',
                  fontFamily: 'Barlow, sans-serif',
                  filter: 'drop-shadow(0px 1px 0px rgba(255,255,255,0.2))'
                }}
              >
                {(name.trim().split(" ")[0] || "")}
              </h2>
            </div>
          </div>
        </div>

        {/* UI CONTROLS */}
        <div className="bg-[#0f0f13] border border-white/10 p-10 rounded-3xl shadow-2xl">
          <Link to="/">
            <Button variant="ghost" className="pl-0 text-zinc-500 hover:text-white mb-8">
              <ArrowLeft size={16} className="mr-2" /> EXIT TERMINAL
            </Button>
          </Link>

           <h2 className="font-display text-[27px] lg:text-[44px] font-bold mb-2">
            <span className="text-gradient-gold">GALACTIC ID</span>
          </h2>
          <p className="text-orange-500 font-mono text-xs mb-12 tracking-[0.4em]">Official Hack The Spring '26 Identity</p>

          <div className="space-y-10">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Assign Codename</label>
              <Input
                value={name}
                onChange={(e) => e.target.value.length <= 25 && setName(e.target.value)}
                className="bg-white/5 border-white/10 h-16 text-center text-2xl font-barlow font-bold text-white placeholder:text-zinc-800"
                placeholder="TYPE FULL NAME"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button onClick={() => fileInputRef.current?.click()} className="h-16 bg-zinc-800 hover:bg-zinc-700 text-white border-none">
                <Upload size={20} className="mr-2" /> PHOTO
              </Button>
              <Button onClick={() => setProfileImage(null)} variant="outline" className="h-16 border-zinc-800 text-zinc-400 hover:bg-zinc-900">
                <User size={20} className="mr-2" /> RESET
              </Button>
            </div>

            <Button
              onClick={drawCanvas}
              disabled={isGenerating}
              className="w-full h-20 text-xl font-black bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-2xl hover:scale-[1.02] transition-transform shadow-xl shadow-orange-950/20"
            >
              {isGenerating ? <Sparkles className="animate-spin" /> : "GENERATE IDENTITY"}
            </Button>
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} className="hidden" />
      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
    </div>
  );
}