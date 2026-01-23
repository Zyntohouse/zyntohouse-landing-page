import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Case Study', href: '#case-study' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

// Building Blocks Logomark Component
const LogoMark = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="translate(14, 13)">
      <rect x="0" y="0" width="52" height="16" rx="4" fill="#10b981" />
      <rect x="14" y="22" width="38" height="16" rx="4" fill="#10b981" opacity="0.7" />
      <rect x="0" y="44" width="52" height="16" rx="4" fill="#10b981" />
    </g>
  </svg>
);

export const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMobileMenuOpen
          ? 'bg-zinc-950 border-b border-zinc-800/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <LogoMark className="w-9 h-9 group-hover:scale-105 transition-transform" />
              <span className="text-xl font-bold">
                <span className="text-primary">Z</span>
                <span className="text-foreground">yntohouse</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm transition-colors duration-200 ${isActive ? 'text-primary' : 'text-zinc-400 hover:text-foreground'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="hero" size="default" className="shadow-lg shadow-primary/20" asChild>
                <a href="tel:+919875338181">Book a Call</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-foreground hover:border-zinc-700 transition-colors relative z-[110]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Separate from nav for proper stacking */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[99] bg-zinc-950"
          style={{ paddingTop: '64px' }}
        >
          <div className="container-custom py-8 h-full overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-4 rounded-xl text-lg font-medium transition-colors duration-200 ${isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-zinc-300 hover:text-foreground hover:bg-zinc-800/50'
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-6 mt-4 border-t border-zinc-800">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="tel:+919875338181" onClick={() => setIsMobileMenuOpen(false)}>
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div >
      )}
    </>
  );
};