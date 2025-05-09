
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  iconColor?: string;
  iconSize?: number;
}

const SocialIcons = ({ className = '', iconColor = 'currentColor', iconSize = 20 }: SocialIconsProps) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 transition-opacity text-${iconColor}`}>
        <Twitter size={iconSize} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 transition-opacity text-${iconColor}`}>
        <Instagram size={iconSize} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 transition-opacity text-${iconColor}`}>
        <Linkedin size={iconSize} />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 transition-opacity text-${iconColor}`}>
        <Youtube size={iconSize} />
      </a>
    </div>
  );
};

export default SocialIcons;
