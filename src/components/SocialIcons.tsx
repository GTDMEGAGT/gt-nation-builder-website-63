import TiktokIcon from "@/components/TiktokIcon";
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  iconColor?: string;
  iconSize?: number;
}

const SocialIcons = ({ className = '', iconColor = 'currentColor', iconSize = 20 }: SocialIconsProps) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a href="https://x.com/TechX4_Guru" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 transition-opacity text-${iconColor}`}>
        <Twitter size={iconSize} />
      </a>
      <a href="https://www.instagram.com/techx4_guru/" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 transition-opacity text-${iconColor}`}>
        <Instagram size={iconSize} />
      </a>
      <a href="https://www.tiktok.com/@techx4_guru" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 transition-opacity text-${iconColor}`}>
        
        <TiktokIcon width={iconSize} height={iconSize} />
      </a>
      <a href="https://www.youtube.com/channel/UC2Ib304K6-yw2e3o0wBVZyA" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 transition-opacity text-${iconColor}`}>
        <Youtube size={iconSize} />
      </a>
    </div>
  );
};

export default SocialIcons;
