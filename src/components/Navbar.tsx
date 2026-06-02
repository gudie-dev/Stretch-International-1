import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import solutionsLabLogo from '../assets/solutions_lab_logo_new.png';
import impactHubLogo from '../assets/impact_hub_logo_new.png';
import stretchLogo from '../assets/stretch_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolidNavbar = isScrolled || location.pathname !== '/';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Impact Hub', href: '/impact-hub' },
    { name: 'Solutions Lab', href: '/solutions-lab' },
    { name: 'About Us', href: '/about' },
    { name: 'Join Us', href: '/join' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${showSolidNavbar ? 'bg-white/95 backdrop-blur-xl py-4 shadow-xl border-b border-slate-100' : 'bg-transparent py-8'}`}>
      <div className="container-wide flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          {location.pathname === '/solutions-lab' ? (
            <img src={solutionsLabLogo} alt="Stretch Solutions Lab" className="h-28 md:h-32 w-auto object-contain" />
          ) : location.pathname === '/impact-hub' ? (
            <img src={impactHubLogo} alt="Stretch Impact Hub" className="h-28 md:h-32 w-auto object-contain" />
          ) : (
            <img src={stretchLogo} alt="STRETCH International" className="h-20 md:h-24 w-auto object-contain" />
          )}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`font-bold text-sm uppercase tracking-widest transition-all hover:text-primary relative group ${showSolidNavbar ? 'text-secondary/70' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-widest shadow-primary/20">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`${showSolidNavbar ? 'text-secondary' : 'text-white'} p-2`}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-[-1] flex flex-col justify-center items-center animate-fade-in">
          <div className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black text-secondary hover:text-primary transition-colors font-serif italic"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary px-12 py-5 text-xl mt-8">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar;
