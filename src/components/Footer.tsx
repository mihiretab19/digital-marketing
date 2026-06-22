import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Send, Check, Phone, Mail, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  const [emailValue, setEmailValue] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValue.trim()) return;
    setIsSubscribed(true);
    setEmailValue("");
    setTimeout(() => {
      setIsSubscribed(false);
    }, 4500);
  };

  const handleScrollToSegment = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      
      {/* Top Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a
              href="#home"
              onClick={(e) => handleScrollToSegment(e, "#home")}
              className="flex items-center gap-2"
            >
              <img
                src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg"
                alt="Siltawi Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallbackText = document.getElementById("footer-logo-fallback");
                  if (fallbackText) fallbackText.style.display = "flex";
                }}
              />
              <span
                id="footer-logo-fallback"
                className="hidden items-center text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-display"
              >
                Siltawi
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Siltawi Digital Marketing is a creative agency in Addis Ababa. We empower corporate companies, local startups, and NGOs across East Africa to scale their digital infrastructure, design visual standards, and dominate search organic algorithms.
            </p>

            {/* Social media connections */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 text-white hover:bg-brand-blue hover:text-white transition-all shadow-sm"
                aria-label="Siltawi Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 text-white hover:bg-sky-500 hover:text-white transition-all shadow-sm"
                aria-label="Siltawi Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 text-white hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-purple-500 hover:text-white transition-all shadow-sm"
                aria-label="Siltawi Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 text-white hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                aria-label="Siltawi LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-display">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <a
                href="#home"
                onClick={(e) => handleScrollToSegment(e, "#home")}
                className="hover:text-white transition-colors py-1 inline-block"
              >
                Home Profile
              </a>
              <a
                href="#about"
                onClick={(e) => handleScrollToSegment(e, "#about")}
                className="hover:text-white transition-colors py-1 inline-block"
              >
                Company Story
              </a>
              <a
                href="#services"
                onClick={(e) => handleScrollToSegment(e, "#services")}
                className="hover:text-white transition-colors py-1 inline-block"
              >
                Core Portfolio
              </a>
              <a
                href="#team"
                onClick={(e) => handleScrollToSegment(e, "#team")}
                className="hover:text-white transition-colors py-1 inline-block"
              >
                Corporate Team
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleScrollToSegment(e, "#testimonials")}
                className="hover:text-white transition-colors py-1 inline-block"
              >
                Client Testimonials
              </a>
            </div>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-display">
              Corporate Desk
            </h4>
            <div className="flex flex-col gap-4 text-xs sm:text-sm">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4.5 h-4.5 text-brand-blue shrink-0 mt-0.5" />
                <span>4th Floor, Zemen Plaza, Bole Road, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4.5 h-4.5 text-brand-purple shrink-0" />
                <a href="tel:+251911000000" className="hover:text-white transition-colors">
                  +251 911 000000
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="w-4.5 h-4.5 text-teal-400 shrink-0" />
                <a href="mailto:info@siltawi.com" className="hover:text-white transition-colors">
                  info@siltawi.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-display">
              Creative Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get monthly digital growth checklists compiled specifically for the Ethiopian marketing sectors.
            </p>

            <form onSubmit={handleSubscribe} className="flex relative rounded-xl bg-slate-800 border border-slate-700/60 p-1">
              <input
                type="email"
                placeholder="Your email address"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                className="bg-transparent text-xs text-white px-3 py-2 focus:outline-none flex-grow min-w-0 placeholder-slate-500"
                required
              />
              <button
                type="submit"
                id="newsletter-subscribe-btn"
                className={`p-2.5 rounded-lg font-semibold text-white transition-all flex items-center justify-center shrink-0 cursor-pointer ${
                  isSubscribed ? "bg-emerald-500" : "bg-brand-blue hover:bg-brand-blue-deep"
                }`}
                aria-label="Subscribe to newsletter"
              >
                {isSubscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </form>
            {isSubscribed && (
              <span className="text-[10px] text-emerald-400 font-bold block animate-pulse">
                Successfully registered email! Thank you.
              </span>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} Siltawi S.C.</span>
            <span className="text-slate-700">•</span>
            <span>Crafted in Addis Ababa, Ethiopia</span>
            <span className="text-slate-700">•</span>
            <span>All Rights Reserved</span>
          </div>
          <div className="flex gap-4">
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms & Conditions</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
