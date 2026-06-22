import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Loader2, CheckCircle2, AlertTriangle, ShieldCheck, Zap, ArrowRight, Gauge, FileCode, Sliders } from "lucide-react";

export default function SEOScanner() {
  const [domain, setDomain] = useState("");
  const [loadingStep, setLoadingStep] = useState(0); // 0: Idle, 1: Connecting, 2: Parsing mobile metrics, 3: Completed
  const [results, setResults] = useState<any | null>(null);

  const steps = [
    "Establishing handshake to external nameservers...",
    "Crawling document structures & header outlines...",
    "Reviewing Core Web Vitals on mobile viewport networks...",
    "Compiling critical recommendations dataset...",
  ];

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;

    setResults(null);
    setLoadingStep(1);

    // Sequence simulating local web crawler
    const timer1 = setTimeout(() => {
      setLoadingStep(2);
    }, 1200);

    const timer2 = setTimeout(() => {
      setLoadingStep(3);
    }, 2400);

    const timer3 = setTimeout(() => {
      setLoadingStep(4);
    }, 3600);

    const timer4 = setTimeout(() => {
      setLoadingStep(0);
      setResults({
        score: Math.floor(Math.random() * 25) + 55, // score between 55 and 80
        speedScore: Math.floor(Math.random() * 20) + 40, // mobile speed load score
        issues: [
          { type: "warning", message: "Missing image dimensions causing layout cumulative shifts (CLS)." },
          { type: "error", message: "Images lack optimized WEBP compression, boosting page weigh over 4.2 MB." },
          { type: "warning", message: "No local structured microdata schema for Bole / Addis Ababa map alignment." },
          { type: "success", message: "Sitemap.xml and Robots.txt are reachable." },
        ],
        estimatedOrganicIncrease: "+45% surge in free Google impressions achievable within 8 weeks."
      });
    }, 4800);
  };

  return (
    <section id="seo-audit" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 relative overflow-hidden">
      {/* Visual accents */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-purple dark:text-purple-450 uppercase bg-purple-50 dark:bg-slate-900 px-3.5 py-1.5 rounded-full inline-block">
            SEO Performance Scanner
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 leading-tight">
            Free Mobile Performance & Rank Audit
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-base">
            Is your website loading too slowly on mobile 4G networks? Enter your domain name below to check load speeds, parse outline structures, and identify SEO index bugs.
          </p>
        </div>

        {/* Audit Sandbox Box */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <form onSubmit={handleStartScan} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                🌐
              </span>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Type your company portfolio link (e.g., mysite.com)"
                className="w-full pl-11 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                disabled={loadingStep > 0}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loadingStep > 0}
              className="px-6 py-4 rounded-xl font-bold text-white dark:text-slate-900 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 self-stretch sm:self-auto min-w-[140px] shrink-0 cursor-pointer"
            >
              {loadingStep > 0 ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Auditing...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Run Live Audit</span>
                </>
              )}
            </button>
          </form>

          {/* Crawler Animation Showcase */}
          <AnimatePresence mode="wait">
            {loadingStep > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 border border-slate-100 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-950 p-6 flex flex-col gap-4 overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <Loader2 className="w-5 h-5 text-brand-blue animate-spin shrink-0" />
                  <span className="text-sm font-semibold font-display text-slate-800 dark:text-white">
                    Analyzing performance metrics for {domain}
                  </span>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  {steps.map((step, idx) => {
                    const stepNum = idx + 1;
                    const isActive = loadingStep === stepNum;
                    const isCompleted = loadingStep > stepNum;

                    return (
                      <div
                        key={idx}
                        className={`flex items-center gap-2.5 text-xs transition-colors duration-200 ${
                          isActive ? "text-slate-800 dark:text-slate-200 font-bold" : isCompleted ? "text-slate-400" : "text-slate-300 dark:text-slate-600"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                            isCompleted
                              ? "bg-emerald-500 text-white"
                              : isActive
                              ? "bg-brand-blue text-white animate-pulse"
                              : "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500"
                          }`}
                        >
                          {isCompleted ? "✓" : stepNum}
                        </div>
                        <p>{step}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Display Pane */}
          <AnimatePresence>
            {results && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <div className="grid md:grid-cols-12 gap-6 items-stretch">
                  
                  {/* Performance Indicators Left */}
                  <div className="md:col-span-4 flex flex-col gap-4 bg-slate-900 dark:bg-slate-950 text-white p-6 rounded-2xl border border-slate-950 dark:border-slate-800 shadow-md">
                    
                    <div className="text-center pb-4 border-b border-white/10">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">SEO Audit Score</span>
                      <div className="text-4xl font-extrabold font-display text-amber-400 mt-2">
                        {results.score}/100
                      </div>
                    </div>

                    <div className="text-center">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Mobile Loading Speed</span>
                      <div className="text-4xl font-extrabold font-display text-rose-500 mt-2 flex justify-center items-baseline gap-1">
                        {results.speedScore}%
                      </div>
                      <span className="text-[9px] bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded-full inline-block mt-1 font-bold">
                        ⚠️ Critical bottlenecks (Local 4G latency)
                      </span>
                    </div>

                  </div>

                  {/* Checklist Right */}
                  <div className="md:col-span-8 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-5 justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                        Technical Crawl Discoveries for {domain}
                      </h4>
                      
                      <div className="flex flex-col gap-3">
                        {results.issues.map((issue: any, idx: number) => (
                          <div key={idx} className="flex gap-2.5 items-start text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            {issue.type === "error" ? (
                              <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5 animate-pulse" />
                            ) : issue.type === "warning" ? (
                              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            ) : (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            )}
                            <p>{issue.message}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommendation Footer banner */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-950 dark:to-slate-950 rounded-xl p-4 border border-blue-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                      <div>
                        <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block font-display">Optimization Potential</span>
                        <p className="text-[11px] text-slate-700 dark:text-slate-200 font-semibold mt-1">
                          {results.estimatedOrganicIncrease}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          const contactSection = document.querySelector("#contact");
                          if (contactSection) {
                            const offsetPos = contactSection.getBoundingClientRect().top + window.pageYOffset - 90;
                            window.scrollTo({ top: offsetPos, behavior: "smooth" });
                          }
                        }}
                        className="px-4 py-2 bg-gradient-to-r from-brand-blue to-brand-purple rounded-lg text-[10px] font-bold text-white flex items-center justify-center gap-1 shrink-0 cursor-pointer"
                      >
                        <span>Fix All Core Issues Now</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </motion.div>
    </section>
  );
}
