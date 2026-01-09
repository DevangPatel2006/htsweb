import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Camera, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StarField from "@/components/StarField";

export default function Swag() {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadSwag = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsGenerating(true);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Instagram story size (1080x1920)
    canvas.width = 1080;
    canvas.height = 1920;

    // Create deep space gradient background
    const bgGradient = ctx.createLinearGradient(0, 0, 0, 1920);
    bgGradient.addColorStop(0, "#0a0612");
    bgGradient.addColorStop(0.3, "#1a0a2e");
    bgGradient.addColorStop(0.6, "#0f1628");
    bgGradient.addColorStop(1, "#050510");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 1080, 1920);

    // Add nebula clouds
    const drawNebula = (x: number, y: number, radius: number, color1: string, color2: string) => {
      const nebulaGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      nebulaGradient.addColorStop(0, color1);
      nebulaGradient.addColorStop(0.5, color2);
      nebulaGradient.addColorStop(1, "transparent");
      ctx.fillStyle = nebulaGradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    drawNebula(200, 300, 400, "rgba(139, 92, 246, 0.15)", "rgba(139, 92, 246, 0.05)");
    drawNebula(900, 600, 350, "rgba(236, 72, 153, 0.12)", "rgba(236, 72, 153, 0.03)");
    drawNebula(400, 1400, 500, "rgba(59, 130, 246, 0.1)", "rgba(59, 130, 246, 0.02)");
    drawNebula(800, 1700, 300, "rgba(168, 85, 247, 0.15)", "rgba(168, 85, 247, 0.05)");

    // Add stars
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * 1080;
      const y = Math.random() * 1920;
      const size = Math.random() * 2.5 + 0.5;
      const opacity = Math.random() * 0.8 + 0.2;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
    }

    // Add some colored accent stars
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 1080;
      const y = Math.random() * 1920;
      const size = Math.random() * 3 + 1;
      const colors = ["rgba(251, 191, 36, 0.8)", "rgba(236, 72, 153, 0.7)", "rgba(139, 92, 246, 0.7)"];
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.fill();
    }

    // Top decorative element - cosmic infinity symbol
    ctx.strokeStyle = "#f7b32b";
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.moveTo(440, 180);
    ctx.bezierCurveTo(340, 180, 340, 280, 440, 280);
    ctx.bezierCurveTo(540, 280, 540, 180, 640, 180);
    ctx.bezierCurveTo(740, 180, 740, 280, 640, 280);
    ctx.bezierCurveTo(540, 280, 540, 180, 440, 180);
    ctx.stroke();
    ctx.globalAlpha = 1;

    // Event branding - "HACK THE SPRING"
    ctx.textAlign = "center";
    
    // Main title with glow
    ctx.shadowColor = "#f7b32b";
    ctx.shadowBlur = 30;
    ctx.fillStyle = "#f7b32b";
    ctx.font = "bold 90px 'Arial Black', Arial, sans-serif";
    ctx.fillText("HACK THE", 540, 420);
    ctx.fillText("SPRING", 540, 520);
    ctx.shadowBlur = 0;

    // Year with cosmic styling
    ctx.font = "bold 48px Arial";
    ctx.fillStyle = "#a855f7";
    ctx.shadowColor = "#a855f7";
    ctx.shadowBlur = 15;
    ctx.fillText("2026", 540, 590);
    ctx.shadowBlur = 0;

    // Decorative line
    const lineGradient = ctx.createLinearGradient(240, 640, 840, 640);
    lineGradient.addColorStop(0, "transparent");
    lineGradient.addColorStop(0.2, "#f7b32b");
    lineGradient.addColorStop(0.5, "#ec4899");
    lineGradient.addColorStop(0.8, "#8b5cf6");
    lineGradient.addColorStop(1, "transparent");
    ctx.strokeStyle = lineGradient;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(240, 640);
    ctx.lineTo(840, 640);
    ctx.stroke();

    // Profile circle with cosmic border
    const profileY = 920;
    const profileRadius = 200;
    
    // Outer glow ring
    const glowGradient = ctx.createRadialGradient(540, profileY, profileRadius - 20, 540, profileY, profileRadius + 40);
    glowGradient.addColorStop(0, "rgba(247, 179, 43, 0.4)");
    glowGradient.addColorStop(0.5, "rgba(168, 85, 247, 0.3)");
    glowGradient.addColorStop(1, "transparent");
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(540, profileY, profileRadius + 40, 0, Math.PI * 2);
    ctx.fill();

    // Cosmic border ring
    const borderGradient = ctx.createLinearGradient(340, 720, 740, 1120);
    borderGradient.addColorStop(0, "#f7b32b");
    borderGradient.addColorStop(0.5, "#ec4899");
    borderGradient.addColorStop(1, "#8b5cf6");
    ctx.strokeStyle = borderGradient;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(540, profileY, profileRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Inner ring
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(540, profileY, profileRadius - 10, 0, Math.PI * 2);
    ctx.stroke();

    // Profile background
    ctx.fillStyle = "#0f0f23";
    ctx.beginPath();
    ctx.arc(540, profileY, profileRadius - 12, 0, Math.PI * 2);
    ctx.fill();

    // Profile image or placeholder
    if (profileImage) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      await new Promise<void>((resolve) => {
        img.onload = () => {
          ctx.save();
          ctx.beginPath();
          ctx.arc(540, profileY, profileRadius - 15, 0, Math.PI * 2);
          ctx.clip();
          
          // Calculate cover dimensions
          const imgRatio = img.width / img.height;
          const targetSize = (profileRadius - 15) * 2;
          let drawWidth, drawHeight, drawX, drawY;
          
          if (imgRatio > 1) {
            drawHeight = targetSize;
            drawWidth = drawHeight * imgRatio;
            drawX = 540 - drawWidth / 2;
            drawY = profileY - targetSize / 2;
          } else {
            drawWidth = targetSize;
            drawHeight = drawWidth / imgRatio;
            drawX = 540 - targetSize / 2;
            drawY = profileY - drawHeight / 2;
          }
          
          ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          ctx.restore();
          resolve();
        };
        img.onerror = () => resolve();
        img.src = profileImage;
      });
    } else {
      // Default cosmic avatar
      ctx.fillStyle = "#8b5cf6";
      ctx.font = "150px Arial";
      ctx.textAlign = "center";
      ctx.fillText("👨‍🚀", 540, profileY + 50);
    }

    // Participant name with glow
    ctx.textAlign = "center";
    ctx.shadowColor = "#ffffff";
    ctx.shadowBlur = 10;
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 64px Arial";
    const displayName = name || "GUARDIAN";
    ctx.fillText(displayName.toUpperCase(), 540, 1220);
    ctx.shadowBlur = 0;

    // Participant badge
    const badgeY = 1300;
    const badgeWidth = 400;
    const badgeHeight = 70;
    
    // Badge background
    const badgeGradient = ctx.createLinearGradient(340, badgeY - 35, 740, badgeY + 35);
    badgeGradient.addColorStop(0, "#f7b32b");
    badgeGradient.addColorStop(0.5, "#fbbf24");
    badgeGradient.addColorStop(1, "#f59e0b");
    
    // Draw rounded badge
    ctx.fillStyle = badgeGradient;
    ctx.beginPath();
    ctx.roundRect(540 - badgeWidth/2, badgeY - badgeHeight/2, badgeWidth, badgeHeight, 35);
    ctx.fill();
    
    // Badge text
    ctx.fillStyle = "#0a0612";
    ctx.font = "bold 32px Arial";
    ctx.fillText("⭐ PARTICIPANT ⭐", 540, badgeY + 12);

    // Tagline
    ctx.fillStyle = "#a855f7";
    ctx.font = "28px Arial";
    ctx.fillText("GUARDIANS OF CODE", 540, 1420);
    ctx.fillStyle = "#ec4899";
    ctx.fillText("DEFENDERS OF INNOVATION", 540, 1460);

    // Bottom decorative line
    ctx.strokeStyle = lineGradient;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(240, 1520);
    ctx.lineTo(840, 1520);
    ctx.stroke();

    // Social handle
    ctx.fillStyle = "#6b7280";
    ctx.font = "32px Arial";
    ctx.fillText("@HackTheSpring", 540, 1600);

    // Website
    ctx.fillStyle = "#f7b32b";
    ctx.font = "bold 28px Arial";
    ctx.fillText("hackthespring.tech", 540, 1660);

    // Bottom cosmic icons
    ctx.font = "48px Arial";
    ctx.fillText("🚀 ✨ 🌌", 540, 1780);

    // Corner decorations
    ctx.strokeStyle = "#f7b32b";
    ctx.lineWidth = 4;
    ctx.globalAlpha = 0.5;
    
    // Top left corner
    ctx.beginPath();
    ctx.moveTo(40, 120);
    ctx.lineTo(40, 40);
    ctx.lineTo(120, 40);
    ctx.stroke();
    
    // Top right corner
    ctx.beginPath();
    ctx.moveTo(960, 40);
    ctx.lineTo(1040, 40);
    ctx.lineTo(1040, 120);
    ctx.stroke();
    
    // Bottom left corner
    ctx.beginPath();
    ctx.moveTo(40, 1800);
    ctx.lineTo(40, 1880);
    ctx.lineTo(120, 1880);
    ctx.stroke();
    
    // Bottom right corner
    ctx.beginPath();
    ctx.moveTo(960, 1880);
    ctx.lineTo(1040, 1880);
    ctx.lineTo(1040, 1800);
    ctx.stroke();
    
    ctx.globalAlpha = 1;

    // Download
    const link = document.createElement("a");
    link.download = `hackthespring-${(name || "guardian").replace(/\s+/g, "-").toLowerCase()}.png`;
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
    
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <StarField />
      
      {/* Hidden canvas for generating image */}
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      <div className="relative z-10 min-h-screen flex flex-col px-4 py-6 md:py-10">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-4"
        >
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
              <ArrowLeft size={16} />
              Back
            </Button>
          </Link>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <h1 className="font-display text-4xl md:text-5xl text-primary mb-2 glow-text">
              Create Your Swag
            </h1>
            <p className="text-muted-foreground text-sm">
              Tag <span className="text-primary font-bold">@HackTheSpring</span> on Instagram! ✨
            </p>
          </motion.div>

          {/* Preview Card - Instagram Story Aspect Ratio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full aspect-[9/16] max-h-[60vh] rounded-3xl overflow-hidden relative mb-6 shadow-2xl"
            style={{
              background: "linear-gradient(180deg, #0a0612 0%, #1a0a2e 30%, #0f1628 60%, #050510 100%)",
            }}
          >
            {/* Nebula effects */}
            <div className="absolute top-10 left-5 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-0 w-28 h-28 bg-pink-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            
            {/* Stars */}
            <div className="absolute inset-0">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.8 + 0.2,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>

            {/* Corner decorations */}
            <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-primary/50 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-primary/50 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-6 pt-8">
              {/* Event title */}
              <div className="text-center mb-4">
                <h2 className="font-display text-2xl md:text-3xl text-primary drop-shadow-[0_0_15px_rgba(247,179,43,0.5)]">
                  HACK THE SPRING
                </h2>
                <p className="text-purple-400 text-sm font-semibold">2026</p>
              </div>

              {/* Decorative line */}
              <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />

              {/* Profile circle */}
              <div 
                className="relative w-28 h-28 md:w-36 md:h-36 mb-4 cursor-pointer group"
                onClick={() => fileInputRef.current?.click()}
              >
                {/* Glow ring */}
                <div className="absolute -inset-3 bg-gradient-to-r from-primary via-pink-500 to-purple-500 rounded-full opacity-40 blur-lg animate-pulse" />
                
                {/* Border ring */}
                <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-primary via-pink-500 to-purple-500">
                  <div className="w-full h-full rounded-full bg-deep-space flex items-center justify-center overflow-hidden">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center">
                        <Camera className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground mx-auto mb-1" />
                        <span className="text-[10px] text-muted-foreground">Tap to add</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Upload overlay */}
                <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Name display */}
              <h3 className="font-display text-xl md:text-2xl text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] mb-3">
                {name || "YOUR NAME"}
              </h3>

              {/* Badge */}
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-primary via-yellow-400 to-amber-500 shadow-lg shadow-primary/30">
                <span className="text-xs md:text-sm font-bold text-deep-space">
                  ⭐ PARTICIPANT ⭐
                </span>
              </div>

              {/* Tagline */}
              <div className="text-center mt-4 space-y-0.5">
                <p className="text-purple-400 text-xs font-medium">GUARDIANS OF CODE</p>
                <p className="text-pink-400 text-xs font-medium">DEFENDERS OF INNOVATION</p>
              </div>

              {/* Decorative line */}
              <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-4 mb-3" />

              {/* Social */}
              <div className="text-center">
                <p className="text-gray-500 text-[10px] md:text-xs">@HackTheSpring</p>
                <p className="text-primary text-[10px] md:text-xs font-semibold">hackthespring.tech</p>
              </div>

              {/* Bottom icons */}
              <div className="mt-3 text-lg md:text-xl">
                🚀 ✨ 🌌
              </div>
            </div>
          </motion.div>

          {/* Name input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full space-y-4"
          >
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-center text-lg h-14 bg-card/80 border-primary/30 focus:border-primary rounded-xl"
            />

            {/* Download Button */}
            <Button
              onClick={downloadSwag}
              disabled={isGenerating}
              className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-primary via-yellow-500 to-amber-500 text-deep-space shadow-lg shadow-primary/40 hover:shadow-primary/60 hover:scale-[1.02] transition-all disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Download HD Swag
                </>
              )}
            </Button>

            <p className="text-center text-muted-foreground text-xs">
              Perfect for Instagram Stories! 📱
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
