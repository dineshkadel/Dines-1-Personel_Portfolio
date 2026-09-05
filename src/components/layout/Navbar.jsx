import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.remove('light');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { to: "/", label: "Home", icon: "fa-house" },
    { to: "/about", label: "About", icon: "fa-user" },
    { to: "/skills", label: "Skills", icon: "fa-layer-group" },
    { to: "/projects", label: "Projects", icon: "fa-folder-open" },
    { to: "/contact", label: "Contact", icon: "fa-paper-plane" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-bg/95 backdrop-blur-lg border-b border-sky/10 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm text-sky flex items-center gap-2"
          >
            <img 
              src="/gibly.png" 
              alt="Dinesh Kadel" 
              className="w-8 h-8 rounded-full object-cover border border-sky/20"
              onError={(e) => { e.currentTarget.src = './public/gibly.png'; }}
            />
            <span className="text-text font-semibold">Dinesh Kadel</span>
          </Link>

          <div className="flex items-center gap-3 md:gap-6">
            <ul className="hidden md:flex gap-8">
              {navItems.map(item => (
                <li key={item.to}>
                  <NavLink 
                    to={item.to} 
                    className={({ isActive }) =>
                      `text-sm flex items-center gap-2 transition-colors ${
                        isActive ? 'text-sky font-semibold' : 'text-muted hover:text-sky'
                      }`
                    }
                  >
                    <i className={`fas ${item.icon} text-xs`}></i>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-bg2 border border-sky/10 text-sky hover:bg-card transition-colors flex items-center justify-center w-9 h-9"
              aria-label="Toggle theme"
            >
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-bg2 border border-sky/10 text-sky hover:bg-card transition-colors flex items-center justify-center w-9 h-9"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <i className={`fas ${isOpen ? 'fa-xmark' : 'fa-bars'} text-sm`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-80 opacity-100 mt-4 pt-3 border-t border-sky/10' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col gap-1 py-2">
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                      isActive 
                        ? 'text-sky bg-sky/10 font-semibold' 
                        : 'text-muted hover:text-sky hover:bg-sky/5 active:bg-sky/10'
                    }`
                  }
                >
                  <span className="w-6 flex items-center justify-center text-sky">
                    <i className={`fas ${item.icon} text-xs`}></i>
                  </span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;