import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, Calendar, Award, Clock, ArrowRight, Grid, X, LayoutGrid, Sparkles } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filterCategories = [
    { value: "all", label: "All Works" },
    { value: "websites", label: "Web development" },
    { value: "marketing", label: "Digital Marketing" },
    { value: "branding", label: "Branding & Design" },
    { value: "creation", label: "Content Creation" },
    { value: "seo", label: "SEO Services" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((proj) => proj.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-brand-blue dark:text-brand-blue-light uppercase bg-blue-50 dark:bg-slate-900 px-3.5 py-1.5 rounded-full inline-block">
              Our Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 leading-tight">
              Selected Deliverables That Redefined Brands
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm">
              Explore how we translate complex market goals into lightning fast platforms, creative typography, and stellar growth loops.
            </p>
          </div>

          {/* Filter Dropdown/Tabs */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {filterCategories.map((tab) => (
              <button
                key={tab.value}
                id={`filter-btn-${tab.value}`}
                onClick={() => setSelectedCategory(tab.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-350 cursor-pointer ${
                  selectedCategory === tab.value
                    ? "bg-slate-900 dark:bg-slate-100 dark:text-slate-950 text-white shadow-md shadow-slate-900/10"
                    : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800 border border-slate-200/40 dark:border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={`portfolio-skeleton-${num}`}
                id={`portfolio-skeleton-${num}`}
                className="relative rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 aspect-[4/3] p-6 flex flex-col justify-between animate-pulse"
              >
                {/* Simulated category pin pill */}
                <div className="w-24 h-5 bg-slate-200 dark:bg-slate-800 rounded-full" />
                
                {/* Bottom details */}
                <div className="flex flex-col gap-2.5 mt-auto">
                  <div className="w-28 h-3 bg-blue-100 dark:bg-slate-800 rounded" />
                  <div className="w-3/4 h-5 bg-slate-300 dark:bg-slate-700 rounded" />
                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            id="portfolio-grid"
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.div
                  key={proj.id}
                  id={`portfolio-card-${proj.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveModalProject(proj)}
                  className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 aspect-[4/3] cursor-pointer"
                >
                  {/* Background Image */}
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Category Pin Pill */}
                  <span className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {proj.categoryLabel}
                  </span>

                  {/* Content Area Bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col gap-2 justify-end h-full">
                    <span className="text-[11px] text-brand-blue-light font-semibold font-display uppercase tracking-wide">
                      {proj.client}
                    </span>
                    <h3 className="text-white text-base sm:text-lg font-bold font-display leading-tight group-hover:text-brand-blue-light transition-colors duration-200">
                      {proj.title}
                    </h3>
                    <div className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 py-1">
                      <p className="text-white/70 text-xs line-clamp-2">
                        {proj.description}
                      </p>
                      <span className="text-indigo-400 text-xs font-bold mt-2 inline-flex items-center gap-1">
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty Search/Filter State */}
        {!isLoading && filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <LayoutGrid className="w-12 h-12 text-slate-350 mx-auto stroke-1" />
            <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm">No campaigns match this category yet.</p>
          </div>
        )}

        {/* Project Details Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <div
              id="project-detail-modal-bg"
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
              onClick={() => setActiveModalProject(null)}
            >
              <motion.div
                id="project-detail-modal"
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative border border-slate-100 dark:border-slate-800 max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()} // Stop bubbling
              >
                {/* Close Button Pin */}
                <button
                  id="close-modal-btn"
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 bg-slate-900/40 backdrop-blur-md hover:bg-slate-900/80 text-white p-2 rounded-full z-15 transition-colors shadow-md cursor-pointer"
                  aria-label="Close Detailed View"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Feature Image */}
                <div className="relative h-48 sm:h-64 shrink-0">
                  <img
                    src={activeModalProject.imageUrl}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 pr-12">
                    <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 backdrop-blur-md px-2.5 py-1 rounded inline-block uppercase tracking-wider mb-2">
                      {activeModalProject.categoryLabel}
                    </span>
                    <h3 className="text-white text-lg sm:text-2xl font-bold font-display">
                      {activeModalProject.title}
                    </h3>
                  </div>
                </div>

                {/* Body Details (Scrollable) */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-1 flex flex-col gap-6">
                  
                  {/* Meta Stats Row */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-slate-950 rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                    <div className="text-center border-r border-slate-200/60 dark:border-slate-800 last:border-0">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Client</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-white font-display block mt-1">{activeModalProject.client}</span>
                    </div>
                    <div className="text-center border-r border-slate-200/60 dark:border-slate-800 last:border-0">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Year</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-white font-display block mt-1">{activeModalProject.year}</span>
                    </div>
                    <div className="text-center last:border-0">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Duration</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-white font-display block mt-1">{activeModalProject.duration}</span>
                    </div>
                  </div>

                  {/* Description Challenge */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Project Brief</h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {activeModalProject.description}
                    </p>
                  </div>

                  {/* Impact & Outcome */}
                  <div className="p-5 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 flex items-start gap-3.5">
                    <Award className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">Verified Business Impact</h4>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-100 font-semibold font-display mt-1 leading-relaxed">
                        {activeModalProject.results}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Capabilities Deployed</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalProject.technologies.map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-[10px] font-semibold rounded-full border border-slate-200/30 dark:border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer close option */}
                <div className="bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 px-6 py-4 flex justify-end shrink-0">
                  <button
                    id="modal-footer-close-btn"
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2 rounded-full text-xs font-bold bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-950 transition-colors cursor-pointer"
                  >
                    Done Reading
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </motion.div>
    </section>
  );
}
