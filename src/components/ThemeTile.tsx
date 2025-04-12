
import { useState } from "react";
import { Theme } from "@/data/themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";
import ImageViewer from "./ImageViewer";

interface ThemeTileProps {
  theme: Theme;
  index: number;
}

const ThemeTile = ({ theme, index }: ThemeTileProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  
  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.success(`Downloading ${theme.title}...`);
    // In a real implementation, this would trigger an actual download
  };
  
  const openViewer = () => {
    setIsViewerOpen(true);
  };
  
  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <>
      <div 
        className={cn(
          "glass-card rounded-xl overflow-hidden flex flex-col animate-fade-in",
          "transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
        )}
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="aspect-[4/3] relative overflow-hidden cursor-pointer"
          onClick={openViewer}
        >
          <img 
            src={theme.imageUrl} 
            alt={theme.title} 
            className={cn(
              "w-full h-full object-cover",
              isHovered && "animate-zoom-in",
              !isHovered && "animate-zoom-out"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-seelen-dark/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white text-sm">Click to preview</span>
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-center text-white">{theme.title}</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">{theme.description}</p>
          
          <div className="flex justify-end">
            <Button 
              onClick={handleDownload} 
              className="bg-seelen-bright hover:bg-seelen-purple text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </div>
      
      {isViewerOpen && (
        <ImageViewer 
          imageUrl={theme.imageUrl} 
          title={theme.title} 
          onClose={closeViewer} 
        />
      )}
    </>
  );
};

export default ThemeTile;
