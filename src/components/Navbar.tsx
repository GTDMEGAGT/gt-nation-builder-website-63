
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Skills', path: '/skills' },
    { text: 'Services', path: '/services' },
    { text: 'Courses', path: '/courses' },
    { text: "GT's Journey", path: '/story' },
    { text: 'Content', path: '/content' },
    { text: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return path !== '/' && location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-background py-4 px-6 shadow-md fixed w-full z-50 border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/93c859bf-5ffd-4de8-b833-d822b128a6bd.png" 
            alt="GTH Digital Academy" 
            className="h-12 md:h-14"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`font-medium hover:text-primary transition-colors ${
                isActive(item.path) ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.text}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild className="bg-primary text-white hover:bg-primary/90">
            <Link to="/sponsor">Sponsor</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-background border-t border-border shadow-lg animate-fade-in">
          <div className="flex flex-col py-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`px-6 py-3 hover:bg-accent hover:text-primary transition-colors ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
            ))}
            <div className="px-6 py-4">
              <Button asChild className="bg-primary text-white w-full hover:bg-primary/90">
                <Link to="/sponsor">Sponsor</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
