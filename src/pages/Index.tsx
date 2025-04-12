
import Header from "@/components/Header";
import ThemeGrid from "@/components/ThemeGrid";
import { useEffect, useState } from "react";

const Index = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Force video to be shown even if not fully loaded
    setVideoLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-seelen-dark to-black relative">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover blur-sm"
        >
          <source src="/src/video2/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-seelen-dark via-seelen-dark/80 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen py-8">
        <Header />
        
        <main className="flex-grow flex flex-col items-center justify-center py-8">
          <ThemeGrid />
        </main>
        
        <footer className="py-6 text-center text-white/60 text-sm">
          <p>© 2025 Seelen UI Theme Haven. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
