
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-poppins font-bold text-xl mb-4">GT</h3>
            <p className="mb-6 text-gray-300">"Start with nothing. Build everything."</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-poppins font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/story" className="text-gray-300 hover:text-gold transition-colors">My Story</Link></li>
              <li><Link to="/ecosystem" className="text-gray-300 hover:text-gold transition-colors">My Ecosystem</Link></li>
              <li><Link to="/sponsor" className="text-gray-300 hover:text-gold transition-colors">Become a Sponsor</Link></li>
              <li><Link to="/content" className="text-gray-300 hover:text-gold transition-colors">Content Hub</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-poppins font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-sm text-gray-300 mb-4">Stay updated with my latest news and updates</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-navy-light text-white border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button type="submit" className="btn-secondary">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400">
          <p>&copy; {currentYear} GT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
