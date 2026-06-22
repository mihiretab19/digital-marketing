import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone, Sun, Moon } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ activeSection, isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollToSegment = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-100 dark:border-slate-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleScrollToSegment(e, "#home")}
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={isDarkMode ? "https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg" : "https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg"}
              alt="Siltawi Logo"
              className={`h-10 w-auto object-contain transition-all duration-300 filter drop-shadow-sm ${isDarkMode ? "brightness-110" : ""}`}
              onError={(e) => {
                // Failback safety in case remote image fails during offline environment tests
                e.currentTarget.style.display = "none";
                const fallbackText = document.getElementById("logo-fallback");
                if (fallbackText) fallbackText.style.display = "flex";
              }}
            />
            <div
              id="logo-fallback"
              className="hidden items-center text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-display"
            >
              Siltawi
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div id="desktop-links" className="hidden lg:flex items-center gap-8 border-r border-slate-100 dark:border-slate-800 pr-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  id={`link-${link.href.substring(1)}`}
                  href={link.href}
                  onClick={(e) => handleScrollToSegment(e, link.href)}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-2 group ${
                    isActive
                      ? "text-brand-blue dark:text-brand-blue-light"
                      : isScrolled
                      ? "text-slate-750 dark:text-slate-300 hover:text-brand-purple dark:hover:text-brand-blue-light"
                      : "text-slate-850 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-blue-light"
                  }`}
                >
                  {link.name}
                  {/* Underline Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* CTA & Actions Button */}
          <div id="desktop-cta" className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-desktop"
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full border border-slate-250/50 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:text-brand-blue hover:border-brand-blue/30 dark:hover:text-white dark:hover:border-slate-750 transition-all duration-300 cursor-pointer hover:scale-[1.04]"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400 fill-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            <a
              id="nav-phone-btn"
              href="tel:+251911000000"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors duration-300 py-1.5 px-3 border border-slate-200/60 dark:border-slate-800 rounded-full bg-slate-55/20 dark:bg-slate-900/25 backdrop-blur-sm"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue dark:text-brand-blue-light" />
              <span>+251 911 000000</span>
            </a>
            <a
              id="nav-get-started-btn"
              href="#contact"
              onClick={(e) => handleScrollToSegment(e, "#contact")}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.04]"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Action */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mobile Theme Toggle */}
            <button
              id="theme-toggle-mobile"
              onClick={toggleDarkMode}
              className="p-2 border border-slate-200 dark:border-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400 fill-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            <a
              id="nav-phone-btn-mobile"
              href="tel:+251911000000"
              className="p-2 border border-slate-200 dark:border-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-brand-blue"
              aria-label="Call Siltawi"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggler"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-drawer"
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 shadow-xl transition-all duration-300 flex flex-col px-6 py-6 gap-4 overflow-hidden z-40 ${
          isMobileMenuOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                id={`mobile-link-${link.href.substring(1)}`}
                href={link.href}
                onClick={(e) => handleScrollToSegment(e, link.href)}
                className={`py-3 px-4 rounded-xl text-base font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-slate-50 dark:bg-slate-900 text-blue-600 dark:text-brand-blue-light"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-brand-purple dark:hover:text-brand-blue-light"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
        <div className="h-px bg-slate-100 dark:bg-slate-900 my-2" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-sm px-4">
            <span>Call us directly:</span>
            <a href="tel:+251911000000" className="font-bold text-slate-850 dark:text-slate-200">
              +251 911 000000
            </a>
          </div>
          <a
            id="mobile-get-started-btn"
            href="#contact"
            onClick={(e) => handleScrollToSegment(e, "#contact")}
            className="w-full text-center py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center gap-2 shadow-md"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
