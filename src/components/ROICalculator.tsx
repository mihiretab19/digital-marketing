import React, { useState } from "react";
import { motion } from "motion/react";
import { Calculator, Sparkles, TrendingUp, Users, ArrowRight, MousePointer, Flame, Check } from "lucide-react";

export default function ROICalculator() {
  const [selectedService, setSelectedService] = useState<"ads" | "web" | "seo">("ads");
  const [monthlyBudget, setMonthlyBudget] = useState<number>(300); // USD or equivalent

  // Handcrafted multiplier indices typical for the East African / local market
  const getEstimationMetrics = () => {
    switch (selectedService) {
      case "ads":
        return {
          reach: monthlyBudget * 1500, // reaching users
          clicks: Math.floor(monthlyBudget * 35),
          leads: Math.floor(monthlyBudget * 4.2),
          roi: "3.5x - 5.0x",
          description: "Hyper-targeted campaigns across Facebook, TikTok, and Instagram optimized for local delivery.",
          deliverables: ["A/B Split testing", "Creative video hooks", "Weekly analytics dashboard", "Pixel integration"],
        };
      case "web":
        return {
          reach: monthlyBudget * 800, // speed loads
          clicks: Math.floor(monthlyBudget * 68),
          leads: Math.floor(monthlyBudget * 8.5),
          roi: "4.8x - 6.5x",
          description: "High-performance company profile or custom e-commerce solution with integrated local payment channels.",
          deliverables: ["Instant load (<500ms)", "Telebirr & Chapa payment setup", "SEO structured layout", "Fully responsive design"],
        };
      case "seo":
        return {
          reach: monthlyBudget * 2200, // natural search reach
          clicks: Math.floor(monthlyBudget * 55),
          leads: Math.floor(monthlyBudget * 6.0),
          roi: "5.0x - 7.5x",
          description: "Dominating local Map searches and Google organic keywords in high-intent buyer sectors.",
          deliverables: ["Addis Ababa local citation", "Mobile speed ranking optimization", "Keyword gap analysis", "Backlinks strategy"],
        };
    }
  };

  const metrics = getEstimationMetrics();

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 relative overflow-hidden">
      {/* Background Graphic Orbs */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-blue dark:text-brand-blue-light uppercase bg-blue-50 dark:bg-slate-900 px-3.5 py-1.5 rounded-full inline-block">
            Growth Planning Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 leading-tight">
            Calculate your Campaign ROI Blueprint
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-base">
            Select a target marketing channel, set your projected monthly advertising goals, and visualize estimated reach metrics instantly based on our team's past campaign history.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Form Sliders (Colspan 7) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              {/* Service Tab Selectors */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  1. Select Core Service Channel
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => { setSelectedService("ads"); if (monthlyBudget < 200) setMonthlyBudget(200); }}
                    className={`p-4 rounded-xl text-center border transition-all cursor-pointer ${
                      selectedService === "ads"
                        ? "bg-slate-900 dark:bg-slate-950 border-slate-950 dark:border-slate-800 text-white shadow-md shadow-slate-900/15"
                        : "bg-white dark:bg-slate-900/60 border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-850"
                    }`}
                  >
                    <Flame className={`w-5 h-5 mx-auto mb-2 ${selectedService === "ads" ? "text-brand-purple" : "text-slate-400"}`} />
                    <span className="text-xs font-bold font-display block">Paid Ad Campaigns</span>
                  </button>

                  <button
                    onClick={() => { setSelectedService("web"); if (monthlyBudget < 500) setMonthlyBudget(500); }}
                    className={`p-4 rounded-xl text-center border transition-all cursor-pointer ${
                      selectedService === "web"
                        ? "bg-slate-900 dark:bg-slate-950 border-slate-950 dark:border-slate-800 text-white shadow-md shadow-slate-900/15"
                        : "bg-white dark:bg-slate-900/60 border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-850"
                    }`}
                  >
                    <MousePointer className={`w-5 h-5 mx-auto mb-2 ${selectedService === "web" ? "text-brand-blue" : "text-slate-400"}`} />
                    <span className="text-xs font-bold font-display block">High-Speed Web</span>
                  </button>

                  <button
                    onClick={() => { setSelectedService("seo"); if (monthlyBudget < 300) setMonthlyBudget(300); }}
                    className={`p-4 rounded-xl text-center border transition-all cursor-pointer ${
                      selectedService === "seo"
                        ? "bg-slate-900 dark:bg-slate-950 border-slate-950 dark:border-slate-800 text-white shadow-md shadow-slate-900/15"
                        : "bg-white dark:bg-slate-900/60 border-slate-200/60 dark:border-slate-800 text-slate-750 dark:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-850"
                    }`}
                  >
                    <TrendingUp className={`w-5 h-5 mx-auto mb-2 ${selectedService === "seo" ? "text-emerald-500" : "text-slate-400"}`} />
                    <span className="text-xs font-bold font-display block">Local organic SEO</span>
                  </button>
                </div>
              </div>

              {/* Slider Input */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    2. Adjust Your Projected Budget
                  </h4>
                  <span className="text-lg font-bold text-brand-blue dark:text-brand-blue-light font-display">
                    ${monthlyBudget} <span className="text-xs text-slate-400 dark:text-slate-450">/ Monthly</span>
                  </span>
                </div>

                <input
                  type="range"
                  min={selectedService === "web" ? 500 : selectedService === "seo" ? 300 : 200}
                  max={5000}
                  step={50}
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none"
                />

                <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-mono">
                  <span>Min: ${selectedService === "web" ? 500 : selectedService === "seo" ? 300 : 200}</span>
                  <span>Optimal Campaign Scale</span>
                  <span>Max: $5000</span>
                </div>
              </div>

              {/* Service Capabilities Checklist */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Delivered Actions & Upkeeps included
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {metrics.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <div className="p-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Results Output (Colspan 5) */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-tr from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
                {/* Visual decoration blur backdrop */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-purple/20 rounded-full blur-2xl" />

                <div className="flex items-center gap-2 mb-4">
                  <Calculator className="w-4 h-4 text-brand-blue-light" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Calculated Outreach Forecast
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-6">
                  Estimate For {selectedService === "ads" ? "Meta Ads Portfolio" : selectedService === "web" ? "Speed Profile Site" : "SEO Rank Campaign"}
                </h3>

                {/* Outputs Display Stack */}
                <div className="flex flex-col gap-5 py-4 border-y border-white/10 mb-6">
                  
                  {/* Metric 1 */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> Est. Monthly Reach
                    </span>
                    <span className="text-base sm:text-lg font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      ~{metrics.reach.toLocaleString()} Impressions
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MousePointer className="w-3.5 h-3.5" /> High-intent Clicks
                    </span>
                    <span className="text-base sm:text-lg font-bold font-display text-white">
                      ~{metrics.clicks.toLocaleString()} / Month
                    </span>
                  </div>

                  {/* Metric 3 */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Direct Conversion Leads
                    </span>
                    <span className="text-base sm:text-lg font-bold font-display text-emerald-400">
                      ~{metrics.leads.toLocaleString()} WhatsApp / Calls
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/10" />

                  {/* Metric 4 */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400 font-bold uppercase">
                      Est. ROI Multiplier
                    </span>
                    <span className="text-lg sm:text-xl font-black font-display text-yellow-400">
                      {metrics.roi}
                    </span>
                  </div>

                </div>

                <p className="text-[10px] text-slate-405 leading-relaxed mb-6">
                  *Figures calculated based on median commercial conversion records for the Addis Ababa market. Individual results may adapt depending on product-market fit.
                </p>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSect = document.querySelector("#contact");
                    if (contactSect) {
                      const offsetTop = contactSect.getBoundingClientRect().top + window.pageYOffset - 90;
                      window.scrollTo({ top: offsetTop, behavior: "smooth" });
                    }
                  }}
                  className="w-full text-center py-3.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl text-xs font-bold text-white shadow-md hover:scale-[1.03] transition-transform flex items-center justify-center gap-1.5"
                >
                  <span>Apply with this Budget</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}
