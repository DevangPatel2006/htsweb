import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Upload, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StarField from "@/components/StarField";

export default function Swag() {
  const [name, setName] = useState("Hacker's Name");
  const [profileImage, setProfileImage] = useState<string | null>(null);
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

  const useDefaultImage = () => {
    setProfileImage(null);
  };

  const downloadSwag = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 800;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 800, 800);
    gradient.addColorStop(0, "#1a0a2e");
    gradient.addColorStop(0.5, "#16213e");
    gradient.addColorStop(1, "#0f0f23");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 800);

    // Add stars
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * 800;
      const y = Math.random() * 800;
      const size = Math.random() * 2;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
      ctx.fill();
    }

    // Draw decorative border
    ctx.strokeStyle = "#f7b32b";
    ctx.lineWidth = 8;
    ctx.strokeRect(30, 30, 740, 740);

    // Inner decorative border
    ctx.strokeStyle = "#8b5cf6";
    ctx.lineWidth = 3;
    ctx.strokeRect(50, 50, 700, 700);

    // Event title
    ctx.fillStyle = "#f7b32b";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";
    ctx.fillText("HACK THE SPRING", 400, 120);

    // Date
    ctx.fillStyle = "#a855f7";
    ctx.font = "24px Arial";
    ctx.fillText("2026 Edition", 400, 160);

    // Profile circle background
    ctx.beginPath();
    ctx.arc(400, 380, 150, 0, Math.PI * 2);
    const circleGradient = ctx.createRadialGradient(400, 380, 0, 400, 380, 150);
    circleGradient.addColorStop(0, "#8b5cf6");
    circleGradient.addColorStop(1, "#6366f1");
    ctx.fillStyle = circleGradient;
    ctx.fill();

    // Profile image or default
    if (profileImage) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      await new Promise<void>((resolve) => {
        img.onload = () => {
          ctx.save();
          ctx.beginPath();
          ctx.arc(400, 380, 130, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(img, 270, 250, 260, 260);
          ctx.restore();
          resolve();
        };
        img.src = profileImage;
      });
    } else {
      // Default astronaut icon
      ctx.fillStyle = "#1a0a2e";
      ctx.beginPath();
      ctx.arc(400, 380, 130, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#f7b32b";
      ctx.font = "100px Arial";
      ctx.fillText("🚀", 400, 410);
    }

    // Profile border
    ctx.strokeStyle = "#f7b32b";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(400, 380, 150, 0, Math.PI * 2);
    ctx.stroke();

    // Hacker's name
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 36px Arial";
    ctx.fillText(name || "Hacker's Name", 400, 590);

    // Participant badge
    ctx.fillStyle = "#f7b32b";
    ctx.font = "bold 28px Arial";
    ctx.fillText("✨ PARTICIPANT ✨", 400, 640);

    // Tagline
    ctx.fillStyle = "#a855f7";
    ctx.font = "18px Arial";
    ctx.fillText("Guardians of Code • Defenders of Innovation", 400, 720);

    // Footer
    ctx.fillStyle = "#6b7280";
    ctx.font = "14px Arial";
    ctx.fillText("@HackTheSpring • hackthespring.tech", 400, 760);

    // Download
    const link = document.createElement("a");
    link.download = `hackthespring-swag-${name.replace(/\s+/g, "-").toLowerCase()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
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

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <Button variant="outline" className="gap-2 border-primary/50 hover:bg-primary/10">
              <ArrowLeft size={18} />
              Go Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8"
        >
          <h1 className="font-display text-5xl md:text-6xl text-primary mb-4">
            Digital Swag ✨
          </h1>
          <p className="text-muted-foreground text-lg">
            Show off your cosmic swag and don't forget to tag <span className="text-primary font-semibold">@HackTheSpring</span> 💫
          </p>
        </motion.div>

        {/* Swag Generator Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg mx-auto mt-12"
        >
          {/* Name input */}
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Hacker's Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-center text-lg bg-card/50 border-primary/30 focus:border-primary"
            />
          </div>

          {/* Upload buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="gap-2 border-primary/50 hover:bg-primary/10"
            >
              <Upload size={18} />
              Upload Photo
            </Button>
            <Button
              variant="outline"
              onClick={useDefaultImage}
              className="gap-2 border-primary/50 hover:bg-primary/10"
            >
              <User size={18} />
              Use Default
            </Button>
          </div>

          {/* Preview Card */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-deep-space via-cosmic-purple/30 to-deep-space border-4 border-primary/50 shadow-glow-purple">
            {/* Stars overlay */}
            <div className="absolute inset-0 opacity-50">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative p-8">
              {/* Event title */}
              <div className="text-center mb-6">
                <h2 className="font-display text-3xl text-primary">HACK THE SPRING</h2>
                <p className="text-nebula-pink text-sm">2026 Edition</p>
              </div>

              {/* Profile circle */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cosmic-purple to-nebula-pink p-1">
                  <div className="w-full h-full rounded-full bg-deep-space flex items-center justify-center overflow-hidden">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-6xl">🚀</span>
                    )}
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10" />
              </div>

              {/* Name */}
              <h3 className="font-display text-2xl text-center text-foreground mb-2">
                {name || "Hacker's Name"}
              </h3>

              {/* Badge */}
              <p className="text-center text-primary font-semibold">
                ✨ PARTICIPANT ✨
              </p>

              {/* Tagline */}
              <p className="text-center text-muted-foreground text-sm mt-4">
                Guardians of Code • Defenders of Innovation
              </p>
            </div>
          </div>

          {/* Download Button */}
          <motion.div
            className="mt-8 text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={downloadSwag}
              className="gap-2 px-8 py-6 text-lg bg-gold-gradient text-primary-foreground shadow-glow-gold hover:scale-105 transition-all"
            >
              <Download size={22} />
              Download Swag ✨
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
