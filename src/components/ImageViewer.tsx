
import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageViewerProps {
  imageUrl: string;
  title: string;
  onClose: () => void;
}

const ImageViewer = ({ imageUrl, title, onClose }: ImageViewerProps) => {
  // Add keydown event for ESC key to close the viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling while viewer is open
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md animate-fade-in" />
      
      {/* Content */}
      <div 
        className={cn(
          "relative z-10 max-w-4xl w-full animate-fade-in",
          "rounded-xl overflow-hidden glass-card"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button 
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={onClose}
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        
        {/* Image */}
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
