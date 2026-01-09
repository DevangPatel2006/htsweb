import { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Upload, User, Sparkles, Stars, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarField from "@/components/StarField";

// Generate static star positions once
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }));
};

export default function Swag() {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Memoize stars so they don't regenerate on every render
  const cardStars = useMemo(() => generateStars(50), []);
  const bgOrbs = useMemo(() => generateStars(8), []);

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

    canvas.width = 1080;
    canvas.height = 1080;

    // Deep space gradient background
    const bgGradient = ctx.createRadialGradient(540, 540, 0, 540, 540, 800);
    bgGradient.addColorStop(0, "#1a0a2e");
    bgGradient.addColorStop(0.4, "#0d0618");
    bgGradient.addColorStop(0.7, "#0a0412");
    bgGradient.addColorStop(1, "#050208");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 1080, 1080);

    // Add nebula effects
    const nebulaGradient1 = ctx.createRadialGradient(200, 200, 0, 200, 200, 400);
    nebulaGradient1.addColorStop(0, "rgba(139, 92, 246, 0.15)");
    nebulaGradient1.addColorStop(1, "transparent");
    ctx.fillStyle = nebulaGradient1;
    ctx.fillRect(0, 0, 600, 600);

    const nebulaGradient2 = ctx.createRadialGradient(900, 850, 0, 900, 850, 350);
    nebulaGradient2.addColorStop(0, "rgba(236, 72, 153, 0.12)");
    nebulaGradient2.addColorStop(1, "transparent");
    ctx.fillStyle = nebulaGradient2;
    ctx.fillRect(550, 500, 530, 580);

    // Add stars
    for (let i = 0; i < 150; i++) {
      const x = Math.random() * 1080;
      const y = Math.random() * 1080;
      const size = Math.random() * 2.5;
      const opacity = Math.random() * 0.8 + 0.2;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
    }

    // Decorative corner elements
    ctx.strokeStyle = "#f7b32b";
    ctx.lineWidth = 4;
    
    // Top left corner
    ctx.beginPath();
    ctx.moveTo(40, 100);
    ctx.lineTo(40, 40);
    ctx.lineTo(100, 40);
    ctx.stroke();
    
    // Top right corner
    ctx.beginPath();
    ctx.moveTo(980, 40);
    ctx.lineTo(1040, 40);
    ctx.lineTo(1040, 100);
    ctx.stroke();
    
    // Bottom left corner
    ctx.beginPath();
    ctx.moveTo(40, 980);
    ctx.lineTo(40, 1040);
    ctx.lineTo(100, 1040);
    ctx.stroke();
    
    // Bottom right corner
    ctx.beginPath();
    ctx.moveTo(980, 1040);
    ctx.lineTo(1040, 1040);
    ctx.lineTo(1040, 980);
    ctx.stroke();

    // Inner decorative frame
    ctx.strokeStyle = "rgba(139, 92, 246, 0.5)";
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]);
    ctx.strokeRect(60, 60, 960, 960);
    ctx.setLineDash([]);

    // Event branding - top
    ctx.fillStyle = "#f7b32b";
    ctx.font = "bold 72px Arial";
    ctx.textAlign = "center";
    ctx.fillText("HACK THE SPRING", 540, 160);

    // Subtitle with glow effect
    ctx.fillStyle = "#a855f7";
    ctx.font = "32px Arial";
    ctx.fillText("( 2026 Edition )", 540, 210);

    // Profile circle with gradient border
    const profileCenterY = 520;
    const profileRadius = 180;

    // Outer glow
    const glowGradient = ctx.createRadialGradient(540, profileCenterY, profileRadius - 20, 540, profileCenterY, profileRadius + 40);
    glowGradient.addColorStop(0, "rgba(247, 179, 43, 0.4)");
    glowGradient.addColorStop(0.5, "rgba(139, 92, 246, 0.2)");
    glowGradient.addColorStop(1, "transparent");
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(540, profileCenterY, profileRadius + 40, 0, Math.PI * 2);
    ctx.fill();

    // Profile border gradient
    const borderGradient = ctx.createLinearGradient(360, 340, 720, 700);
    borderGradient.addColorStop(0, "#f7b32b");
    borderGradient.addColorStop(0.5, "#a855f7");
    borderGradient.addColorStop(1, "#ec4899");
    ctx.strokeStyle = borderGradient;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(540, profileCenterY, profileRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Profile background
    ctx.fillStyle = "#0a0412";
    ctx.beginPath();
    ctx.arc(540, profileCenterY, profileRadius - 8, 0, Math.PI * 2);
    ctx.fill();

    // Profile image or default
    if (profileImage) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      await new Promise<void>((resolve) => {
        img.onload = () => {
          ctx.save();
          ctx.beginPath();
          ctx.arc(540, profileCenterY, profileRadius - 12, 0, Math.PI * 2);
          ctx.clip();
          const size = (profileRadius - 12) * 2;
          ctx.drawImage(img, 540 - size/2, profileCenterY - size/2, size, size);
          ctx.restore();
          resolve();
        };
        img.onerror = () => resolve();
        img.src = profileImage;
      });
    } else {
      // Default rocket emoji
      ctx.fillStyle = "#f7b32b";
      ctx.font = "120px Arial";
      ctx.fillText("🚀", 540, profileCenterY + 40);
    }

    // Decorative stars around profile
    const starPositions = [
      { x: 320, y: 380, size: 20 },
      { x: 760, y: 380, size: 20 },
      { x: 280, y: 520, size: 15 },
      { x: 800, y: 520, size: 15 },
      { x: 320, y: 660, size: 20 },
      { x: 760, y: 660, size: 20 },
    ];

    starPositions.forEach(star => {
      ctx.fillStyle = "#f7b32b";
      ctx.font = `${star.size}px Arial`;
      ctx.fillText("✦", star.x, star.y);
    });

    // Hacker's name
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 56px Arial";
    ctx.fillText(name || "Hacker's Name", 540, 780);

    // Participant badge
    ctx.fillStyle = "#f7b32b";
    ctx.font = "bold 36px Arial";
    ctx.fillText("✨ PARTICIPANT ✨", 540, 840);

    // Tagline
    ctx.fillStyle = "rgba(168, 85, 247, 0.9)";
    ctx.font = "22px Arial";
    ctx.fillText("Guardians of Code  •  Defenders of Innovation", 540, 920);

    // Footer branding
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.font = "18px Arial";
    ctx.fillText("@HackTheSpring  •  hackthespring.tech", 540, 1000);

    // Small decorative rocket icons
    ctx.font = "24px Arial";
    ctx.fillText("🌟", 200, 1000);
    ctx.fillText("🌟", 880, 1000);

    // Download
    const link = document.createElement("a");
    link.download = `hackthespring-swag-${(name || "hacker").replace(/\s+/g, "-").toLowerCase()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <StarField />
      
      {/* Animated nebula orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {bgOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full blur-3xl"
            style={{
              left: `${orb.left}%`,
              top: `${orb.top}%`,
              width: orb.size * 100 + 100,
              height: orb.size * 100 + 100,
              background: orb.id % 2 === 0 
                ? "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: orb.duration + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Hidden canvas */}
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">
            <Button 
              variant="ghost" 
              className="gap-2 text-primary hover:bg-primary/10 hover:text-primary border border-primary/30 backdrop-blur-sm"
            >
              <ArrowLeft size={18} />
              <span className="font-display">Go Back to Hack The Spring</span>
            </Button>
          </Link>
        </motion.div>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-8 md:mt-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gradient-gold">
              Digital Swag
            </h1>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
            Show off your enchanted swag and don't forget to tag{" "}
            <span className="text-primary font-bold">@HackTheSpring</span>{" "}
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              💫
            </motion.span>
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto mt-10 md:mt-16"
        >
          {/* Input Section */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cosmic-purple/20 to-nebula-pink/20 blur-xl rounded-2xl" />
            <div className="relative glass-card rounded-2xl p-6 border border-primary/30">
              {/* Name Input */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-4 text-center text-xl font-display bg-deep-space/80 border-2 border-primary/40 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_30px_rgba(247,179,43,0.3)] transition-all duration-300"
                />
              </div>

              {/* Upload Buttons */}
              <div className="flex justify-center gap-4">
                <motion.button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/50 bg-primary/10 text-primary font-display text-sm hover:bg-primary/20 hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(247,179,43,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Upload size={18} />
                  Upload Photo
                </motion.button>
                <motion.button
                  onClick={useDefaultImage}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-cosmic-purple/50 bg-cosmic-purple/10 text-foreground font-display text-sm hover:bg-cosmic-purple/20 hover:border-cosmic-purple transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139,92,246,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User size={18} />
                  Use Default
                </motion.button>
              </div>
            </div>
          </div>

          {/* Preview Card */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-cosmic-purple/30 to-nebula-pink/30 blur-2xl rounded-3xl opacity-60" />
            
            {/* Card */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-cosmic-purple to-nebula-pink p-[3px] rounded-2xl">
                <div className="w-full h-full bg-deep-space rounded-2xl" />
              </div>
              
              {/* Content */}
              <div className="relative bg-gradient-to-br from-deep-space via-[#0d0618] to-deep-space rounded-2xl m-[3px] overflow-hidden">
                {/* Stars inside card */}
                <div className="absolute inset-0 overflow-hidden">
                  {cardStars.map((star) => (
                    <motion.div
                      key={star.id}
                      className="absolute bg-white rounded-full"
                      style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: star.size,
                        height: star.size,
                      }}
                      animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                {/* Nebula effects */}
                <div className="absolute top-0 left-0 w-48 h-48 bg-cosmic-purple/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-nebula-pink/15 blur-3xl rounded-full" />

                <div className="relative p-8 md:p-10">
                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary" />

                  {/* Event title */}
                  <div className="text-center mb-8">
                    <h2 className="font-display text-3xl md:text-4xl text-gradient-gold mb-2">
                      HACK THE SPRING
                    </h2>
                    <p className="text-nebula-pink font-display text-lg">( 2026 Edition )</p>
                  </div>

                  {/* Profile circle */}
                  <div className="relative w-52 h-52 md:w-60 md:h-60 mx-auto mb-8">
                    {/* Animated ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "conic-gradient(from 0deg, #f7b32b, #a855f7, #ec4899, #f7b32b)",
                        padding: "4px",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full rounded-full bg-deep-space" />
                    </motion.div>
                    
                    {/* Profile content */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cosmic-purple/30 to-nebula-pink/20 p-1">
                      <div className="w-full h-full rounded-full bg-deep-space flex items-center justify-center overflow-hidden">
                        {profileImage ? (
                          <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <Rocket className="w-20 h-20 md:w-24 md:h-24 text-primary" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10 scale-110" />
                    
                    {/* Decorative stars */}
                    <motion.div
                      className="absolute -left-6 top-1/2 text-primary text-2xl"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✦
                    </motion.div>
                    <motion.div
                      className="absolute -right-6 top-1/2 text-primary text-2xl"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      ✦
                    </motion.div>
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 -top-4 text-nebula-pink text-xl"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      ✦
                    </motion.div>
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-2xl md:text-3xl text-center text-foreground mb-3">
                    {name || "Hacker's Name"}
                  </h3>

                  {/* Badge */}
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Stars className="w-5 h-5 text-primary" />
                    <span className="text-primary font-display text-lg md:text-xl font-bold tracking-wider">
                      PARTICIPANT
                    </span>
                    <Stars className="w-5 h-5 text-primary" />
                  </div>

                  {/* Tagline */}
                  <p className="text-center text-muted-foreground text-sm md:text-base font-display tracking-wide">
                    Guardians of Code • Defenders of Innovation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={downloadSwag}
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-xl font-display text-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button background */}
              <div className="absolute inset-0 bg-gold-gradient" />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              
              {/* Content */}
              <span className="relative flex items-center gap-3 text-primary-foreground font-bold">
                <Download size={24} />
                Download Swag
                <motion.span
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
                >
                  ✨
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
