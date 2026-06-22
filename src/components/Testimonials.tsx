import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Simulated load on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Autoplay functionality, runs only when not loading
  useEffect(() => {
    if (isLoading) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000); // changes every 7s
    return () => clearInterval(timer);
  }, [isLoading]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
    }),
  };

  const activeTest = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* Abstract design elements */}
        <div className="absolute top-10 left-10 text-slate-100/80 dark:text-slate-900/40 pointer-events-none -z-10 select-none">
          <Quote className="w-48 h-48 stroke-[0.3]" />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-purple dark:text-purple-450 uppercase bg-purple-50 dark:bg-slate-900 px-3.5 py-1.5 rounded-full inline-block">
            Proven Client Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 leading-tight">
            Hear From Our Retained Growth Partners
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-base">
            We don't preach theory. We prove efficacy through real, daily transactions registered on local wallets and physical branch footprints.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-8">
          
          {/* Main Slider Window */}
          <div className="min-h-[280px] sm:min-h-[220px] flex items-center justify-center relative">
            {isLoading ? (
              <div className="w-full text-center flex flex-col items-center animate-pulse">
                {/* 5 Stars Rating Bar Placeholder */}
                <div className="flex gap-1 justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-5 h-5 bg-slate-250 dark:bg-slate-800 rounded shrink-0" />
                  ))}
                </div>

                {/* Big Quote Block Placeholder */}
                <div className="flex flex-col gap-2.5 w-full items-center">
                  <div className="w-3/4 sm:w-2/3 h-5 bg-slate-300 dark:bg-slate-700 rounded" />
                  <div className="w-1/2 sm:w-1/3 h-5 bg-slate-200 dark:bg-slate-800 rounded" />
                </div>

                {/* Avatar and Name details Placeholder */}
                <div className="mt-8 flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-slate-205 dark:bg-slate-850 shrink-0" />
                  <div>
                    <div className="w-24 h-4 bg-slate-300 dark:bg-slate-700 rounded" />
                    <div className="w-32 h-3 bg-slate-200 dark:bg-slate-800 mt-1.5" />
                  </div>
                </div>
              </div>
            ) : (
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  id={`testimonial-slide-${activeTest.id}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full text-center flex flex-col items-center"
                >
                  {/* 5 Stars Rating Bar */}
                  <div className="flex gap-1 justify-center mb-6">
                    {[...Array(activeTest.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500 shrink-0" />
                    ))}
                  </div>

                  {/* Big Quote Block */}
                  <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-800 dark:text-slate-200 italic leading-relaxed max-w-3xl">
                    "{activeTest.quote}"
                  </blockquote>

                  {/* Avatar and Name details */}
                  <div className="mt-8 flex items-center gap-4 text-left">
                    <img
                      src={activeTest.imageUrl}
                      alt={activeTest.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue shadow-sm shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <cite className="not-italic font-bold text-sm sm:text-base text-slate-900 dark:text-white font-display block">
                        {activeTest.author}
                      </cite>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block mt-0.5">
                        {activeTest.role}, <span className="text-brand-purple dark:text-purple-450 font-bold">{activeTest.company}</span>
                      </span>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Left/Right Action Arrows */}
          <div className="flex justify-center sm:justify-between items-center gap-4 mt-8 sm:mt-0 sm:absolute sm:inset-y-1/2 sm:-inset-x-8 sm:-translate-y-1/2 w-full sm:w-[calc(100%+64px)] z-15">
            <button
              id="slider-prev-btn"
              onClick={handlePrev}
              disabled={isLoading}
              className={`p-3 rounded-full bg-slate-50 dark:bg-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-950 text-slate-700 dark:text-slate-300 transition-all duration-300 border border-slate-200/50 dark:border-slate-800 shadow-sm ${
                isLoading ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
              }`}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="slider-next-btn"
              onClick={handleNext}
              disabled={isLoading}
              className={`p-3 rounded-full bg-slate-50 dark:bg-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-950 text-slate-700 dark:text-slate-300 transition-all duration-300 border border-slate-200/50 dark:border-slate-800 shadow-sm ${
                isLoading ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
              }`}
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Bottom Dot Selectors */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((_, dotIdx) => (
            <button
              key={dotIdx}
              id={`slider-dot-${dotIdx}`}
              onClick={() => {
                if (isLoading) return;
                setDirection(dotIdx > currentIndex ? 1 : -1);
                setCurrentIndex(dotIdx);
              }}
              disabled={isLoading}
              className={`h-2 rounded-full transition-all duration-300 ${
                isLoading ? "opacity-30 cursor-not-allowed w-2 bg-slate-200 dark:bg-slate-800" : currentIndex === dotIdx ? "w-8 bg-brand-blue dark:bg-brand-blue-light cursor-pointer" : "w-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-350 dark:hover:bg-slate-700 cursor-pointer"
              }`}
              aria-label={`Go to Testimonial Slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
}
