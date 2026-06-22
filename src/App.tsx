import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BentoHighlights from "./components/BentoHighlights";
import Services from "./components/Services";
import ROICalculator from "./components/ROICalculator";
import Portfolio from "./components/Portfolio";
import SEOScanner from "./components/SEOScanner";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [prefilledService, setPrefilledService] = useState("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) {
        return stored === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Toggle HTML class and save preference when theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Track active section on scrolling to highlight current menu item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "team", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 140; // offset for sticky header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100 antialiased overflow-x-hidden selection:bg-brand-blue selection:text-white transition-colors duration-300">
      {/* Dynamic Grid Overlay under entire application structure to align with Linor reference */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_0.8px,transparent_0.8px)] dark:bg-[radial-gradient(#334155_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-20 dark:opacity-30 pointer-events-none -z-50" />
      
      {/* Navigation Sticky Bar */}
      <Navbar activeSection={activeSection} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Structural Modules representing 7 functional Pages */}
      <main className="relative">
        <Hero />
        <About />
        <BentoHighlights />
        <Services onSelectService={handleSelectService} />
        <ROICalculator />
        <Portfolio />
        <SEOScanner />
        <Team />
        <Testimonials />
        <FAQs />
        <Contact prefilledService={prefilledService} />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

