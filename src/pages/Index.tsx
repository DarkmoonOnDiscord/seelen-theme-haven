
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
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="background" 
          className="w-full h-full object-cover"
        />
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

