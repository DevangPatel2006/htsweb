import { motion } from "framer-motion";
import sepSvg from "@/assets/sep.svg"; // Ensure this path is correct

const SectionDivider = () => {
  return (
    <div className="relative w-full mx-auto flex items-center justify-center py-2">
      <motion.img 
        src={sepSvg} 
        alt="Section Divider"
        // This ensures the SVG displays at its intrinsic size (400x80) 
        // but scales down if the screen is smaller than 400px.
        className="w-auto h-auto max-w-full"
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default SectionDivider;