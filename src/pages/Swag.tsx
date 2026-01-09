import { useState, useRef } from "react";
import { ArrowLeft, Download, Upload, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StarField from "@/components/StarField";
import swagBg from "@/assets/bg.png";

export default function Swag() {
  const [name, setName] = useState("Hacker's Name");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ---------------- IMAGE UPLOAD ---------------- */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => setProfileImage(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const useDefaultImage = () => setProfileImage(null);

  /* ---------------- DOWNLOAD SWAG ---------------- */
  const downloadSwag = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // HD canvas (auto scale for quality)
    const SIZE = 1600; // bigger for crispness
    canvas.width = SIZE;
    canvas.height = SIZE;

    /* ---- Background Image ---- */
    const bg = new Image();
    bg.src = swagBg;

    await new Promise<void>((resolve) => {
      bg.onload = () => {
        ctx.drawImage(bg, 0, 0, SIZE, SIZE);
        resolve();
      };
    });

    /* ---- Profile Circle ---- */
    const cx = SIZE / 2;
    const cy = SIZE * 0.5; // exact vertical center
    const radius = SIZE * 0.15;

    // Clip circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();

    if (profileImage) {
      const img = new Image();
      img.src = profileImage;

      await new Promise<void>((resolve) => {
        img.onload = () => {
          ctx.drawImage(
            img,
            cx - radius,
            cy - radius,
            radius * 2,
            radius * 2
          );
          resolve();
        };
      });
    } else {
      ctx.fillStyle = "#1e1b4b";
      ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);
      ctx.font = `${radius}px serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#facc15";
      ctx.fillText("🚀", cx, cy);
    }
    ctx.restore();

    /* ---- Circle Border ---- */
    ctx.strokeStyle = "#facc15";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();

    /* ---- Name Text ---- */
    ctx.fillStyle = "#4b1c0d";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // preload font before drawing
    await document.fonts.load("bold 72px 'Playfair Display'");
    await document.fonts.ready;

    ctx.font = "bold 72px 'Playfair Display', serif";
    ctx.fillText(name || "Hacker's Name", cx, cy + radius + 100);

    /* ---- Download ---- */
    const link = document.createElement("a");
    link.download = `duhacks-swag-${name.replace(/\s+/g, "-").toLowerCase()}.png`;
    link.href = canvas.toDataURL("image/png", 1.0); // full quality
    link.click();
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <StarField />

      <canvas ref={canvasRef} className="hidden" />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Back */}
        <Link to="/">
          <Button variant="outline" className="mb-6 gap-2">
            <ArrowLeft size={18} /> Back
          </Button>
        </Link>

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Digital Swag ✨
          </h1>
          <p className="text-muted-foreground mt-2">
            DUHACKS 5.0 • Share & Tag Us 🚀
          </p>
        </div>

        {/* Main Card */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Controls */}
          <div>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-center text-lg mb-4"
              placeholder="Your Name"
            />

            <div className="flex gap-4 justify-center mb-6">
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload size={18} /> Upload Photo
              </Button>
              <Button variant="outline" onClick={useDefaultImage}>
                <User size={18} /> Default
              </Button>
            </div>

            <Button
              onClick={downloadSwag}
              className="w-full py-6 text-lg bg-gold-gradient"
            >
              <Download size={22} /> Download Swag
            </Button>
          </div>

          {/* Preview */}
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl border">
            <img
              src={swagBg}
              alt="Swag Preview"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-400 bg-black">
                {profileImage ? (
                  <img
                    src={profileImage}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">
                    🚀
                  </div>
                )}
              </div>

              <p className="mt-4 font-display text-xl md:text-2xl text-center text-[#4b1c0d] bg-[#fff3e0]/90 px-5 py-2 rounded-lg shadow-md tracking-wide">
                {name || "Hacker's Name"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}