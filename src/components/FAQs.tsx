import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquareText } from "lucide-react";
import { motion } from "motion/react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      q: "Where is Siltawi Digital Marketing located?",
      a: "Our core creative crew operates from Bole, Addis Ababa, Ethiopia. We frequently host hybrid strategy meetups with corporations and local startup founders.",
    },
    {
      q: "How long does a custom business profile website take to install?",
      a: "Generally between 10 to 18 business days. We map out full custom high-fidelity Figma models, code the interactive layouts using lightweight Vite patterns, perform mobile 3G speed tests, and integrate standard billing tunnels before handing over files.",
    },
    {
      q: "Can you list my retail physical location on local Google Maps?",
      a: "Yes! Our localized SEO and organic search map citations team helps verify, structure, and maintain target physical branch footprints to rank under localized search terms (e.g., 'best clinics in Addis Ababa', 'offices near Bole').",
    },
    {
      q: "Do you build custom mobile checkouts supporting Telebirr, Chapa, or CBE Birr?",
      a: "Absolutely. We are certified partner developers with top local gateways like Chapa and YenePay. We install automated checkout widgets so your customers can complete purchases directly via Telebirr or local cards with real-time merchant webhooks.",
    },
    {
      q: "What makes your digital service better than template-built pages?",
      a: "Template code typically drags heavy external loads, decreasing page load speeds to over 6 seconds on common 3G mobile networks. We build from scratch with light Tailwind utilities, ensuring fast load times. We also write custom copy targeted at local audiences instead of generic translations.",
    },
    {
      q: "Do you offer post-launch maintenance packages?",
      a: "We do. We have dedicated weekly checkups tracking server health, updating system security components, altering copy adjustments, and monitoring target keyword alignments on organic search portals.",
    },
  ];

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-blue dark:text-brand-blue-light uppercase bg-blue-50 dark:bg-slate-900 px-3.5 py-1.5 rounded-full inline-block">
            Frequently Answered Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 leading-tight">
            Got Questions? We Have Honest Answers.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-xs sm:text-sm">
            Everything you need to know about our work methods, billing gateways, local search alignments, and post-launch maintenance terms in Ethiopia.
          </p>
        </div>

        {/* FAQs list */}
        <div className="flex flex-col gap-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-5 cursor-pointer hover:shadow-sm transition-all duration-200"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-blue-light mt-0.5 shrink-0" />
                    <h3 className="font-bold text-sm sm:text-base text-slate-800 dark:text-white font-display leading-snug">
                      {item.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-brand-purple" : ""
                    }`}
                  />
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-8 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-l-2 border-slate-100 dark:border-slate-800 pr-4">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

            {/* Call to action card */}
            <div className="mt-12 bg-gradient-to-tr from-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 text-white text-center relative overflow-hidden shadow-lg border border-slate-800">
              <div className="relative z-10 flex flex-col items-center gap-4">
                <h3 className="text-lg sm:text-xl font-display font-bold">Have a custom requirement?</h3>
                <p className="text-xs text-slate-400 max-w-xl">
                  Each campaign layout has unique demands. We can jump on a brief Zoom session or physical Bole office meeting to lay out a complete strategic breakdown.
                </p>
                <button
                  onClick={() => {
                    const contactSection = document.querySelector("#contact");
                    if (contactSection) {
                      const offsetPos = contactSection.getBoundingClientRect().top + window.pageYOffset - 90;
                      window.scrollTo({ top: offsetPos, behavior: "smooth" });
                    }
                  }}
                  className="mt-2 px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl text-xs font-bold text-white hover:scale-[1.03] transition-transform flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Let's Discuss Your Project</span>
                </button>
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-2xl" />
            </div>

      </motion.div>
    </section>
  );
}
