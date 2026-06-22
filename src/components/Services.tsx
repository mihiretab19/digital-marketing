import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Megaphone, Code, Palette, Camera, Search, ChevronRight, ArrowRight, CheckCircle2, MessageSquareText } from "lucide-react";
import { SERVICES_DATA } from "../data";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("marketing");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Megaphone":
        return <Megaphone className="w-5 h-5" />;
      case "Code":
        return <Code className="w-5 h-5" />;
      case "Palette":
        return <Palette className="w-5 h-5" />;
      case "Camera":
        return <Camera className="w-5 h-5" />;
      case "Search":
        return <Search className="w-5 h-5" />;
      default:
        return <Megaphone className="w-5 h-5" />;
    }
  };

  const getSubItemCount = (id: string) => {
    return SERVICES_DATA.find((s) => s.id === id)?.subItems.length || 0;
  };

  const handleConsultationClick = (categoryTitle: string) => {
    onSelectService(categoryTitle);
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const headerOffset = 90;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
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
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 leading-tight">
            Comprehensive Digital Ecosystems Tailored For Scaling
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-base">
            No cookie-cutter shortcuts. We combine design excellence and battle-tested digital advertising techniques to solve complicated industrial growth issues.
          </p>
        </div>

        {/* Services Page Segment Tab Controls */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Controls Left */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
              Select Service Domain
            </h4>
            {SERVICES_DATA.map((srv) => (
              <button
                key={srv.id}
                id={`srv-tab-${srv.id}`}
                onClick={() => setActiveCategory(srv.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group ${
                  activeCategory === srv.id
                    ? "bg-slate-900 dark:bg-slate-900 border-slate-950 dark:border-slate-800 text-white shadow-lg shadow-slate-900/10"
                    : "bg-white dark:bg-slate-900/40 border-slate-100 dark:border-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-800"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`p-2.5 rounded-xl transition-colors duration-300 ${
                      activeCategory === srv.id
                        ? "bg-brand-blue text-white"
                        : "bg-blue-50 dark:bg-slate-800 text-brand-blue dark:text-brand-blue-light group-hover:bg-brand-blue group-hover:text-white"
                    }`}
                  >
                    {getIcon(srv.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm font-display tracking-tight leading-tight">
                      {srv.title}
                    </h3>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">
                      {getSubItemCount(srv.id)} Exclusive capabilities
                    </span>
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeCategory === srv.id ? "rotate-90 text-brand-blue" : "text-slate-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Details Column Right */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {SERVICES_DATA.map((srv) => {
                if (srv.id !== activeCategory) return null;
                return (
                  <motion.div
                    key={srv.id}
                    id={`srv-details-pane-${srv.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden"
                  >
                    
                    {/* Glowing Accent Ring */}
                    <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 rounded-full blur-2xl" />

                    {/* Meta Top Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <span className="text-[10px] font-bold text-brand-blue dark:text-brand-blue-light uppercase tracking-widest bg-blue-50 dark:bg-slate-800 px-2.5 py-1 rounded">
                          {srv.tagline}
                        </span>
                        <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-2">
                          {srv.title}
                        </h3>
                      </div>
                      
                      <button
                        id={`srv-consult-btn-${srv.id}`}
                        onClick={() => handleConsultationClick(srv.title)}
                        className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-1.5 self-start group cursor-pointer"
                      >
                        <MessageSquareText className="w-3.5 h-3.5" />
                        <span>Book free consultation</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Overall Description text */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                      {srv.description}
                    </p>

                    {/* Sub Items Detailed Stack */}
                    <div className="flex flex-col gap-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Included Deliverables
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {srv.subItems.map((sub, sIdx) => (
                          <div
                            key={sub.name}
                            id={`sub-item-block-${sIdx}`}
                            className="p-4 rounded-2xl bg-slate-50/50 hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-950/20 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-800 transition-all duration-200"
                          >
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-brand-blue dark:text-brand-blue-light mt-0.5 shrink-0" />
                              <div>
                                <h5 className="text-xs font-bold text-slate-800 dark:text-slate-100 font-display">
                                  {sub.name}
                                </h5>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 lines-clamp-3 leading-relaxed">
                                  {sub.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
