
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

const SocialIcons = ({ className = "", iconSize = 20, iconColor = "currentColor" }: SocialIconsProps) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a 
        href="https://youtube.com" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="hover:text-gold transition-colors"
      >
        <Youtube size={iconSize} color={iconColor} />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="hover:text-gold transition-colors"
      >
        <Twitter size={iconSize} color={iconColor} />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-gold transition-colors"
      >
        <Instagram size={iconSize} color={iconColor} />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-gold transition-colors"
      >
        <Linkedin size={iconSize} color={iconColor} />
      </a>
    </div>
  );
};

export default SocialIcons;
