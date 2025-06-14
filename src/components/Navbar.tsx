import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Skills', path: '/skills' },
    { text: 'Services', path: '/services' },
    { text: 'Courses', path: '/courses' },
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
    <nav className={`bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-3 px-4 sm:px-6 fixed w-full z-50 border-b border-border transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/93c859bf-5ffd-4de8-b833-d822b128a6bd.png" 
            alt="Tech-x4 Logo" 
            className="h-10 md:h-12"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-sm font-medium hover:text-primary transition-colors px-2 py-1 ${
                isActive(item.path) ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.text}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30 transition-all">
            <Link to="/sponsor" className="px-4 py-2 rounded-lg">
              Sponsor
            </Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <Button 
            asChild 
            variant="ghost" 
            size="sm" 
            className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Link to="/sponsor">Sponsor</Link>
          </Button>
          <button
            className="text-foreground p-2 rounded-md hover:bg-accent transition-colors"
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
        <div className="lg:hidden fixed inset-0 bg-background z-40 mt-16 animate-fade-in border-t border-border">
          <div className="flex flex-col h-[calc(100vh-4rem)] overflow-y-auto bg-background">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`px-6 py-4 hover:bg-accent hover:text-primary transition-colors border-b border-border ${
                  isActive(item.path) ? 'text-primary font-medium' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
            ))}
            <div className="px-6 py-4">
              <Button 
                asChild 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Link to="/sponsor" onClick={() => setIsOpen(false)}>
                  Sponsor
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;