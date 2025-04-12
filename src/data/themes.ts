
// Configuration file for Seelen UI Themes
// This file contains all theme information displayed on the website

export interface Theme {
  /**
   * Unique identifier for the theme
   */
  id: string;
  
  /**
   * Display title of the theme
   */
  title: string;
  
  /**
   * Short description of the theme (keep under 100 characters)
   */
  description: string;
  
  /**
   * URL to the preview image
   * Recommended dimensions: 800x600px or 16:9 aspect ratio
   */
  imageUrl: string;
  
  /**
   * Download link for the theme file
   * This can be a direct link or a path to a local file
   */
  downloadUrl: string;
  
  /**
   * Optional tags for filtering/categorizing
   */
  tags?: string[];
}

/**
 * Array of theme objects
 * To add a new theme:
 * 1. Create a new object following the Theme interface
 * 2. Assign a unique id
 * 3. Add all required fields (title, description, imageUrl, downloadUrl)
 * 4. Optionally add tags for categorization
 */
export const themes: Theme[] = [
  {
    id: "neo-brutalism",
    title: "Neo Brutalism",
    description: "Bold colors with sharp edges, perfect for modern applications",
    imageUrl: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1032&auto=format&fit=crop",
    downloadUrl: "/themes/neo-brutalism.zip",
    tags: ["bold", "modern", "colorful"]
  },
  {
    id: "midnight-glass",
    title: "Midnight Glass",
    description: "Dark glassmorphism interface with neon accents",
    imageUrl: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1170&auto=format&fit=crop",
    downloadUrl: "/themes/midnight-glass.zip",
    tags: ["dark", "glass", "neon"]
  },
  {
    id: "minimal-light",
    title: "Minimal Light",
    description: "Clean, lightweight interface with subtle shadows",
    imageUrl: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1074&auto=format&fit=crop",
    downloadUrl: "/themes/minimal-light.zip",
    tags: ["light", "minimal", "clean"]
  },
  {
    id: "cyber-pastel",
    title: "Cyber Pastel",
    description: "Cyberpunk aesthetics with soft pastel colors",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1170&auto=format&fit=crop",
    downloadUrl: "/themes/cyber-pastel.zip",
    tags: ["cyberpunk", "pastel", "futuristic"]
  },
  {
    id: "retro-wave",
    title: "Retro Wave",
    description: "80s inspired design with vibrant colors and gradients",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170&auto=format&fit=crop",
    downloadUrl: "/themes/retro-wave.zip",
    tags: ["retro", "80s", "gradients"]
  },
  {
    id: "monochrome-pro",
    title: "Monochrome Pro",
    description: "Professional black and white theme with subtle accents",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1170&auto=format&fit=crop",
    downloadUrl: "/themes/monochrome-pro.zip",
    tags: ["monochrome", "professional", "minimal"]
  }
];
