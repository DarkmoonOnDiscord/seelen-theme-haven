
import { useEffect, useState } from "react";
import { themes } from "@/data/themes";
import ThemeTile from "./ThemeTile";
import { Theme } from "@/data/themes";

const ThemeGrid = () => {
  const [visibleThemes, setVisibleThemes] = useState<Theme[]>([]);

  useEffect(() => {
    // Simulate loading with a staggered effect
    const loadThemes = async () => {
      for (let i = 0; i < themes.length; i++) {
        // Add each theme with a delay to create a staggered effect
        await new Promise((resolve) => setTimeout(resolve, 150));
        setVisibleThemes((prev) => [...prev, themes[i]]);
      }
    };

    loadThemes();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl mx-auto px-4 md:px-8">
      {visibleThemes.map((theme, index) => (
        <ThemeTile key={theme.id} theme={theme} index={index} />
      ))}
    </div>
  );
};

export default ThemeGrid;
