import { motion } from "motion/react";
import { Lightbulb, Palette, FileText, Award, Heart, BookOpen, Navigation, Compass } from "lucide-react";

export default function About() {
  const values = [
    {
      name: "Innovation",
      desc: "Constantly pushing tech boundaries and adopting state-of-the-art architectures.",
      icon: <Lightbulb className="w-5 h-5 text-indigo-500" />,
      color: "bg-indigo-50 border-indigo-100",
    },
    {
      name: "Creativity",
      desc: "Rejecting templates. Crafting custom visual assets and authentic communications.",
      icon: <Palette className="w-5 h-5 text-purple-500" />,
      color: "bg-purple-50 border-purple-100",
    },
    {
      name: "Transparency",
      desc: "Providing crystal clear analytics blueprints, direct key integrations, and honest timelines.",
      icon: <FileText className="w-5 h-5 text-sky-500" />,
      color: "bg-sky-50 border-sky-100",
    },
    {
      name: "Excellence",
      desc: "Polishing details for flawless execution across desktop, mobile, and print mediums.",
      icon: <Award className="w-5 h-5 text-yellow-500" />,
      color: "bg-yellow-50 border-yellow-100",
    },
    {
      name: "Customer Success",
      desc: "Measuring our victory directly by our partners' scaling indices and ROI metrics.",
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      color: "bg-rose-50 border-rose-100",
    },
    {
      name: "Continuous Learning",
      desc: "Evolving relentlessly alongside global algorithm shifts and emerging AI vectors.",
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
      color: "bg-emerald-50 border-emerald-100",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
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
            About Our Agency
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 leading-tight">
            Crafting Unforgettable Digital Journeys Since 2023
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-base">
            Siltawi Digital Marketing is a creative tech agency in Addis Ababa. We stand at the junction of high-performance modern code, stunning graphic identity, and high-conversion ad operations.
          </p>
        </div>

        {/* Company Story, Mission, Vision Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Story Column */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="prose text-slate-600 dark:text-slate-350">
              <h3 className="text-xl font-display font-bold text-slate-800 dark:text-white mb-4 inline-flex items-center gap-2">
                <span className="w-5 h-1 bg-brand-blue rounded-full" />
                The Story of Siltawi
              </h3>
              <p className="leading-relaxed text-sm">
                Founded in Addis Ababa in 2023, **Siltawi Digital Marketing** was born from a simple yet robust realization: *Ethiopian businesses deserve world-class digital representation.* The local market is bubbling with creative potential, startup initiatives, and established corporations aiming to leap onto the regional stage.
              </p>
              <p className="leading-relaxed mt-4 text-sm">
                To solve this, our multidisciplinary team assembled developers, creative copywriters, SEO experts, and branding professionals. We set aside standard generic presets and committed to custom, high-caliber strategies. Today, we work as strategic partners beside healthcare clinics, NGO groups, luxury real estate developers, and local e-commerce giants.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-2">
              {/* Mission */}
              <div className="relative p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900 shadow-sm overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-xl transition-all duration-500 group-hover:scale-125" />
                <div className="p-2.5 bg-brand-blue rounded-xl text-white inline-flex mb-4">
                  <Navigation className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold font-display text-slate-800 dark:text-white">Our Mission</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed">
                  "To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful customer connections."
                </p>
              </div>

              {/* Vision */}
              <div className="relative p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900 shadow-sm overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full blur-xl transition-all duration-500 group-hover:scale-125" />
                <div className="p-2.5 bg-brand-purple rounded-xl text-white inline-flex mb-4">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold font-display text-slate-800 dark:text-white">Our Vision</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed">
                  "To become one of Africa's leading digital marketing agencies by delivering creative, data-driven, and results-oriented digital solutions."
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Column (2x3 Grid) */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-display font-bold text-slate-800 dark:text-white mb-6 inline-flex items-center gap-2 px-1">
              <span className="w-5 h-1 bg-brand-purple rounded-full" />
              Our Core Values
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v, idx) => (
                <motion.div
                  key={v.name}
                  id={`value-card-${v.name.toLowerCase().replace(/\s+/g, "-")}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300 group`}
                >
                  <div className="flex gap-4 items-start">
                    <div className={`p-2.5 rounded-xl border dark:bg-slate-800 dark:border-slate-700 shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      {v.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white font-display group-hover:text-brand-blue dark:group-hover:text-brand-blue-light transition-colors duration-200">
                        {v.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Local Trust Badge */}
            <div className="mt-8 bg-gradient-to-r from-brand-blue/5 to-brand-purple/5 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 flex items-center gap-4">
              <span className="text-xl shrink-0">🇪🇹</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                We take extreme pride in cultivating the domestic digital workforce, supporting 100% locally manufactured creative talent scaling up into world-class agencies.
              </p>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
