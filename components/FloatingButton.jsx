import { Instagram } from "lucide-react";
import { Button } from "./ui/button";

export default function FloatingButton() {
  const handleOpenInstagram = () => {
    const instagramUsername = "fatimacc_"; 
    window.open(`https://www.instagram.com/${instagramUsername}`, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="icon"
        onClick={handleOpenInstagram}
        className="
          rounded-full 
          w-14 h-14
          shadow-lg
          bg-gradient-to-br 
          from-[#833ab4] via-[#fd1d1d] to-[#fcb045]
          text-white
          hover:opacity-90 
          transition-opacity 
          flex items-center justify-center
        "
      >
        <Instagram className="w-6 h-6" />
      </Button>
    </div>
  );
}