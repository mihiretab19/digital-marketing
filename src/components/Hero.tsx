import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Trophy, Users, CheckCircle, Flame, LineChart, Palette } from "lucide-react";
import { STATS_DATA } from "../data";

export default function Hero() {

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
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

  const getStatIcon = (id: string) => {
    switch (id) {
      case "stat1":
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case "stat2":
        return <Users className="w-6 h-6 text-brand-blue" />;
      case "stat3":
        return <Flame className="w-6 h-6 text-brand-purple" />;
      case "stat4":
        return <CheckCircle className="w-6 h-6 text-emerald-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 overflow-hidden flex flex-col justify-center bg-gradient-to-b from-slate-50 via-white to-blue-50/20 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative Grid Pattern */}
      <div className="absolute top-20 inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-60 dark:opacity-40 pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Left Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-4 h-8 bg-blue-100/50 hover:bg-blue-100/80 dark:bg-slate-900/60 dark:hover:bg-slate-900/80 border border-blue-200/60 dark:border-slate-800 rounded-full text-brand-blue dark:text-brand-blue-light text-xs font-semibold mb-6 shadow-sm transition-colors cursor-default"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-450 fill-blue-500/10 animate-pulse" />
              <span>Leading Marketing Agency in Addis Ababa, Ethiopia</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
            >
              Empowering Businesses Through{" "}
              <span className="bg-gradient-to-r from-brand-blue via-violet-600 to-brand-purple bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </motion.h1>

            {/* Subheadline Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              We design and execute custom digital footprints—from premium logo design and engaging social assets to high-performing e-commerce platforms and robust local SEO architectures. Built in Addis Ababa for growth-minded startups, institutions, and global NGO brands.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                id="hero-get-started-btn"
                href="#services"
                onClick={(e) => handleScrollToContact(e, "#services")}
                className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.03] group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a
                id="hero-contact-btn"
                href="#contact"
                onClick={(e) => handleScrollToContact(e, "#contact")}
                className="px-8 py-4 rounded-full font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03] flex items-center justify-center"
              >
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Graphics Right Column */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-visible"
            >
              {/* Outer floating dynamic frames */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-brand-purple/20 rounded-full blur-md animate-bounce" style={{ animationDuration: '6s' }} />
              <div className="absolute -bottom-8 -right-6 w-24 h-24 bg-brand-blue/10 rounded-full blur-xl animate-pulse" />

              {/* Central Premium Graphic Container */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 border border-white/40 dark:border-slate-850 shadow-2xl p-6 relative flex flex-col justify-between overflow-hidden backdrop-blur-md">
                
                {/* Simulated digital graph with animated dots */}
                <div className="flex justify-between items-center bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex gap-2.5 items-center">
                    <div className="w-7 h-7 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                      <LineChart className="w-4 h-4 text-brand-blue dark:text-brand-blue-light" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-100">Analytics Dashboard</div>
                      <div className="text-[10px] text-slate-400 dark:text-slate-500">Real-Time Performance</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400 px-2 py-1 rounded-md">
                    Live Active
                  </div>
                </div>

                {/* Geometric identity grid alignment */}
                <div className="my-8 flex justify-center relative">
                  <div className="absolute w-36 h-36 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-2xl opacity-15" />
                  <div className="w-36 h-36 border border-dashed border-slate-300 dark:border-slate-700 rounded-full animate-spin flex items-center justify-center" style={{ animationDuration: "25s" }}>
                    <div className="w-24 h-24 border border-dashed border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                     <span className="text-white font-display font-black text-xl">S</span>
                  </div>
                </div>

                {/* Footer simulation */}
                <div className="bg-slate-900 text-white p-4 rounded-xl shadow-lg border border-slate-800 flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-slate-300">Campaign Operations Active</span>
                  </div>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white font-mono">
                    95% Delivery
                  </span>
                </div>

              </div>

              {/* Tiny floating elements for marketing vibes */}
              <div className="absolute -right-4 top-1/4 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 px-3 py-1.5 rounded-lg shadow-md border border-slate-100 dark:border-slate-800 flex items-center gap-1.5 animate-bounce" style={{ animationDuration: '4s' }}>
                <LineChart className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span className="text-xs font-semibold">SEO Optimization Leader</span>
              </div>
              <div className="absolute -left-10 bottom-1/4 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 px-3 py-1.5 rounded-lg shadow-md border border-slate-100 dark:border-slate-800 flex items-center gap-1.5 animate-bounce" style={{ animationDuration: '5s' }}>
                <Palette className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                <span className="text-xs font-semibold">Figma UI Architecture</span>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Animated Statistics Block */}
        <div id="stats-section" className="mt-20 lg:mt-28">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl p-8 lg:p-10 relative overflow-hidden">
            {/* Glowing gradient background border segment */}
            <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-b from-brand-blue to-brand-purple" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS_DATA.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  id={`stat-card-${stat.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="flex flex-col gap-3 group px-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:bg-indigo-50/50 dark:group-hover:bg-slate-750 transition-colors duration-300">
                      {getStatIcon(stat.id)}
                    </div>
                    <div>
                      <span className="text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight flex items-baseline">
                        {stat.value}
                        <span className="text-brand-purple ml-0.5">{stat.suffix}</span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-150 group-hover:text-brand-blue dark:group-hover:text-brand-blue-light transition-colors duration-300">
                      {stat.label}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-400 mt-1 line-clamp-2">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Corporate Trust Logos */}
        <div className="mt-16 text-center">
          <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Trusted by Leaders & Growth Accelerators in Ethiopia
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-1.5 font-display font-extrabold text-slate-700 tracking-tight text-sm md:text-base">
              <span className="text-brand-blue">■</span> CBE Corporate
            </div>
            <div className="flex items-center gap-1.5 font-display font-extrabold text-slate-700 tracking-tight text-sm md:text-base">
              <span className="text-emerald-500">●</span> telebirr Media
            </div>
            <div className="flex items-center gap-1.5 font-display font-extrabold text-slate-700 tracking-tight text-sm md:text-base">
              <span className="text-brand-purple">▲</span> Chapa API
            </div>
            <div className="flex items-center gap-1.5 font-display font-extrabold text-slate-700 tracking-tight text-sm md:text-base">
              <span className="text-amber-500">◆</span> Zemen Capital
            </div>
            <div className="flex items-center gap-1.5 font-display font-extrabold text-slate-700 tracking-tight text-sm md:text-base">
              <span className="text-rose-500">▼</span> YenePay Pay
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
