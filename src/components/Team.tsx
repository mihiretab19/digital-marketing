import { motion } from "motion/react";
import { Linkedin, Twitter, Sparkles, Trophy } from "lucide-react";
import { TEAM_DATA } from "../data";

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
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
            Our Professionals
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 leading-tight">
            The Digital Gurus Powering Your Campaigns
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-base">
            Our team comprises highly certified developers, visual researchers, seasoned copywriters, and maps experts who work collaboratively under Yohannes' visionary strategy.
          </p>
        </div>

        {/* Team Grid */}
        <div id="team-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_DATA.map((member, idx) => (
            <motion.div
              key={member.id}
              id={`team-card-${member.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              
              {/* Image Frame with Overlay container */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-slate-950 overflow-hidden shrink-0">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Visual Accent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                {/* Tag Department Badge overlay */}
                <span className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {member.department}
                </span>

                {/* Social hover shortcuts */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white text-brand-blue hover:bg-brand-blue hover:text-white shadow transition-all hover:scale-110"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white text-sky-500 hover:bg-sky-500 hover:text-white shadow transition-all hover:scale-110"
                    aria-label={`${member.name} Twitter Profile`}
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-blue-light transition-colors">
                      {member.name}
                    </h3>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-brand-purple dark:text-purple-400 bg-purple-50 dark:bg-slate-800 px-2 py-0.5 rounded-md shrink-0">
                      <Trophy className="w-3 h-3 text-brand-purple dark:text-purple-400" />
                      <span>{member.experience}</span>
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {member.role}
                  </span>
                  <p className="text-xs text-slate-450 dark:text-slate-400 leading-relaxed mt-2">
                    {member.bio}
                  </p>
                </div>

                {/* Consultation trigger inside team context */}
                <div className="pt-4 border-t border-slate-55 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-brand-blue dark:group-hover:text-brand-blue-light transition-colors duration-200">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
                    <span>Specialist Deployed</span>
                  </div>
                  <a
                    href="#contact"
                    className="hover:underline text-[10px] uppercase text-brand-purple hover:text-brand-purple-deep"
                  >
                    Discuss Campaign
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
