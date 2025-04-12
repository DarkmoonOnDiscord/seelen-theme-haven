
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("w-full py-6 px-4 md:px-8 flex flex-col items-center justify-center", className)}>
      <div className="flex items-center gap-2 mb-2">
        <div className="h-10 w-10 rounded-md bg-gradient-to-br from-seelen-purple to-seelen-bright flex items-center justify-center">
          <span className="text-white font-bold text-2xl">S</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">Seelen UI</h1>
      </div>
      <p className="text-gradient text-lg md:text-xl font-medium">
        Beautiful themes for your next project
      </p>
    </header>
  );
};

export default Header;
