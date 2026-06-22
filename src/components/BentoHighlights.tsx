import React from "react";
import { motion } from "motion/react";
import { Zap, Globe, MessageSquare, ShieldCheck, HeartHandshake, Sparkles, Cpu, Award } from "lucide-react";

export default function BentoHighlights() {
  const cards = [
    {
      id: "bento-1",
      title: "Blazing Mobile Load Speeds",
      badge: "Performance",
      description: "Our platforms are styled using custom flat lightweight utility modules, rendering under 600ms on local Ethio Telecom 3G/4G networks. Zero bloated script overhead.",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      size: "lg:col-span-8",
      bg: "bg-gradient-to-br from-slate-900 to-slate-950 text-white border-slate-950",
      accent: "from-blue-600/25 to-purple-600/10",
      textColor: "text-slate-300",
    },
    {
      id: "bento-2",
      title: "98% Localized Retention",
      badge: "Strategy",
      description: "We craft targeted content directly tailored to Amharic-speaking buyers, aligning layouts with local trends across Telegram, TikTok, and Instagram.",
      icon: <Globe className="w-6 h-6 text-brand-purple" />,
      size: "lg:col-span-4",
      bg: "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-slate-100 dark:border-slate-800/80",
      accent: "from-purple-500/5 to-transparent",
      textColor: "text-slate-500 dark:text-slate-400",
    },
    {
      id: "bento-3",
      title: "Chapa & Telebirr Integration",
      badge: "Fintech",
      description: "Seamless custom e-commerce checkouts supporting local payment systems out of the box, with offline bank transfer tracking and SMS notification hooks.",
      icon: <Cpu className="w-6 h-6 text-emerald-500" />,
      size: "lg:col-span-4",
      bg: "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-slate-100 dark:border-slate-800/80",
      accent: "from-emerald-500/5 to-transparent",
      textColor: "text-slate-500 dark:text-slate-400",
    },
    {
      id: "bento-4",
      title: "No Templates, Built in Figma First",
      badge: "Craftsmanship",
      description: "Every single company profile, landing page, and vector asset is created from a blank canvas in Figma. We focus heavily on grid alignments, elegant font pairings, and distinct visual tones to ensure your website is unforgettable.",
      icon: <Award className="w-6 h-6 text-indigo-500" />,
      size: "lg:col-span-8",
      bg: "bg-gradient-to-br from-slate-50 to-indigo-50/20 dark:from-slate-900 dark:to-slate-950/40 text-slate-800 dark:text-slate-100 border-slate-150/40 dark:border-slate-800/80",
      accent: "from-indigo-500/5 to-purple-500/5",
      textColor: "text-slate-600 dark:text-slate-400",
    },
  ];

  return (
    <section id="why-siltawi" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 relative">
      {/* Background radial alignment */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-blue dark:text-brand-blue-light uppercase bg-blue-50 dark:bg-slate-900 px-3.5 py-1.5 rounded-full inline-block">
            Why Partner with Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 leading-tight">
            Designed for Local Markets. Engineered to Global Standards.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm sm:text-base">
            We are more than a standard digital agency. We combine visual integrity, localized messaging, and performant web code into a unified engine built to grow your business.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {cards.map((c) => (
            <motion.div
              key={c.id}
              id={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-3xl border p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-300 ${c.bg} ${c.size}`}
            >
              {/* Dynamic blur radial highlight backing */}
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${c.accent} rounded-full blur-3xl`} />

              <div className="relative flex flex-col justify-between h-full gap-6">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${
                      c.id === "bento-1" ? "bg-white/10 text-white/90" : "bg-blue-50 dark:bg-slate-800 text-brand-blue dark:text-brand-blue-light"
                    } px-2.5 py-1 rounded-md`}>
                      {c.badge}
                    </span>
                    <div className="shrink-0">
                      {c.icon}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold mb-3 tracking-tight">
                    {c.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${c.textColor}`}>
                    {c.description}
                  </p>
                </div>

                <div className={`pt-4 border-t ${
                  c.id === "bento-1" ? "border-white/10 text-brand-blue-light" : "border-slate-100 dark:border-slate-800/80 text-brand-purple"
                } text-xs font-bold flex items-center justify-between`}>
                  <span>Tailored Agency Deliverable</span>
                  <Sparkles className="w-4 h-4 text-brand-blue-light dark:text-yellow-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
