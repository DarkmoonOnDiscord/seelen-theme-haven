
import Header from "@/components/Header";
import ThemeGrid from "@/components/ThemeGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-seelen-dark to-black relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
          alt="Tech background" 
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
