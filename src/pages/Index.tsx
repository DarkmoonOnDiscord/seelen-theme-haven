
import Header from "@/components/Header";
import ThemeGrid from "@/components/ThemeGrid";
import { useEffect, useState } from "react";

const Index = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Add a timeout to help ensure video loads properly
    const timer = setTimeout(() => setVideoLoaded(true), 300);
    return () => clearTimeout(timer);
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
          className={`w-full h-full object-cover blur-sm transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          poster="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source src="https://media-hosting.imagekit.io/fd355ae74fa74b4d/abstract-monochrome-waves-moewalls-com.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback if video doesn't load */}
        {!videoLoaded && (
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
            alt="Tech background" 
            className="w-full h-full object-cover blur-sm"
          />
        )}
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
