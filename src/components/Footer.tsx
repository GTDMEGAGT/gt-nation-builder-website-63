
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Youtube, MessageSquare } from 'lucide-react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/93c859bf-5ffd-4de8-b833-d822b128a6bd.png" 
              alt="Tech-x4" 
              className="h-16 mb-4"
            />
            <p className="mb-6 text-gray-specific">"Turning Digital Dreams into Global Brands."</p>
            <SocialIcons iconColor="gray-specific" />
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-poppins font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-specific hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-specific hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/skills" className="text-gray-specific hover:text-primary transition-colors">Skills & Stack</Link></li>
              <li><Link to="/services" className="text-gray-specific hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/courses" className="text-gray-specific hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="/contact" className="text-gray-specific hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-poppins font-bold text-lg mb-4">Get In Touch</h3>
            <a href="https://wa.me/7085655759" className="flex items-center text-gray-specific hover:text-primary transition-colors mb-4">
              <MessageSquare size={20} className="mr-2" />
              <span>WhatsApp Support</span>
            </a>
            <form 
   action="https://guru.us14.list-manage.com/subscribe/post?u=184559d44d209c2462827381a&amp;id=10a7d9ed29&amp;f_id=001799e1f0" 
   method="post"
  target="_blank"
  className="flex flex-col space-y-3"
>
  <input 
    type="email" 
    name="EMAIL"
    placeholder="Your email" 
    className="px-4 py-2 bg-secondary text-white border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
    required
  />

  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
    <input type="text" name="b_abc123_def456" tabIndex={-1} defaultValue="" />
  </div>

  <button 
    type="submit" 
    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
  >
    Subscribe
  </button>
</form>

          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-muted">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} TECH-X4. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-primary">Terms</Link>
              <span>|</span>
              <Link to="/partner" className="hover:text-primary">Become a Partner</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/7085655759" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Contact on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
