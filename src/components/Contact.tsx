import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, Info, CalendarRange, Trash2, ArrowRight } from "lucide-react";

interface ContactProps {
  prefilledService: string;
}

interface SubmittedInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
  status: string;
}

export default function Contact({ prefilledService }: ContactProps) {
  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Validation States
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [pastInquiries, setPastInquiries] = useState<SubmittedInquiry[]>([]);
  const [showInquiryHistory, setShowInquiryHistory] = useState(false);

  // Sync Prefilled service from parent
  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  // Read previous local submissions on load
  useEffect(() => {
    try {
      const stored = localStorage.getItem("siltawi_consultations");
      if (stored) {
        setPastInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error if typed
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = "Full Name is required.";
    }
    
    // Email standard pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid email format.";
    }

    // Handcrafted simple phone pattern
    const phonePattern = /^\+?[0-9\s-]{9,15}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!phonePattern.test(formData.phone)) {
      errors.phone = "Phone pattern invalid. (e.g., +251911000000)";
    }

    if (!formData.message.trim()) {
      errors.message = "Please write a small explanation of your project.";
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Save to local persistence
    const newInquiry: SubmittedInquiry = {
      id: "inq_" + Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service || "General Consultation",
      message: formData.message,
      timestamp: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "Awaiting Schedule",
    };

    const updated = [newInquiry, ...pastInquiries];
    setPastInquiries(updated);
    try {
      localStorage.setItem("siltawi_consultations", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }

    setIsSubmitSuccessful(true);
    // Reset Form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    // Timeout response window reset
    setTimeout(() => {
      setIsSubmitSuccessful(false);
    }, 6000);
  };

  const deleteInquiry = (id: string) => {
    const remaining = pastInquiries.filter((inq) => inq.id !== id);
    setPastInquiries(remaining);
    try {
      localStorage.setItem("siltawi_consultations", JSON.stringify(remaining));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
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
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-4 leading-tight">
            Schedule a Free 30-Minute Growth Strategy Call
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-base">
            No obligation. We will review your current website, ads footprint, or branding assets and give you 3 actionable optimization steps.
          </p>
        </div>

        {/* Content Info Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Channels Column Left */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            
            <div className="flex flex-col gap-8">
              <h3 className="text-xl font-display font-bold text-slate-850 dark:text-slate-200 flex items-center gap-2">
                <span className="w-5 h-1 bg-brand-blue rounded-full" />
                Contact Channels
              </h3>

              <div className="flex flex-col gap-6">
                
                {/* Channel Element 1 */}
                <div id="contact-pin-phone" className="flex gap-4 items-start">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-brand-blue shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call or Telegram Us</h4>
                    <a href="tel:+251911000000" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-blue-light mt-1 block">
                      +251 911 000000
                    </a>
                    <a href="tel:+251912345678" className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5 block">
                      +251 912 345678 (Corporate Desk)
                    </a>
                  </div>
                </div>

                {/* Channel Element 2 */}
                <div id="contact-pin-mail" className="flex gap-4 items-start">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-brand-purple shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Direct Emails</h4>
                    <a href="mailto:info@siltawi.com" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-brand-purple dark:hover:text-brand-purple-light mt-1 block">
                      info@siltawi.com
                    </a>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">
                      rfp@siltawi.com (NGO Bid Proposals)
                    </span>
                  </div>
                </div>

                {/* Channel Element 3 */}
                <div id="contact-pin-location" className="flex gap-4 items-start">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-teal-500 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Office Location</h4>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 block leading-snug">
                      4th Floor, Zemen Plaza, Bole Road
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">
                      Addis Ababa, Ethiopia (Behind Friendship Mall)
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded maps location */}
            <div className="rounded-3xl border border-slate-150/80 dark:border-slate-800 overflow-hidden shadow-sm aspect-video relative bg-slate-200 dark:bg-slate-900">
              <iframe
                title="Google Maps Location - Siltawi Digital Marketing"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.535894178523!2d38.784260218731!3d9.011680211756272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85aaf4fc06f5%3A0xe7a56113b2c1fcc7!2sBole%20Road%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>

          </div>

          {/* Form Column Right */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl relative animate-fadeIn">
              
              <AnimatePresence mode="wait">
                {isSubmitSuccessful && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-x-6 inset-y-6 sm:inset-x-10 sm:inset-y-10 bg-white dark:bg-slate-900 z-10 flex flex-col items-center justify-center text-center gap-4"
                  >
                    <div className="w-16 h-16 bg-emerald-50 dark:bg-slate-950 rounded-full flex items-center justify-center border border-emerald-100 dark:border-slate-850 mb-2">
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Consultation Scheduled!</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-sm">
                      We have stored your session specifications locally. Our Digital Consultant, Semhal Belay, will reach out to you within **2 business hours** over your phone/email!
                    </p>
                    <button
                      onClick={() => setIsSubmitSuccessful(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 mt-2 hover:scale-[1.03] transition-transform cursor-pointer"
                    >
                      Fill Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="text-xl font-display font-bold text-slate-808 dark:text-white mb-6">
                Consultation Request Form
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Row: Name */}
                <div>
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2">
                    Full Name / Institution
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name or business name"
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-950/40 hover:bg-slate-55/20 text-xs sm:text-sm text-slate-900 dark:text-slate-100 transition-all focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 ${
                      validationErrors.name ? "border-rose-400 focus:ring-rose-450" : "border-slate-200 dark:border-slate-800 focus:ring-brand-blue"
                    }`}
                  />
                  {validationErrors.name && (
                    <span className="text-[10px] text-rose-500 font-bold block mt-1.5">{validationErrors.name}</span>
                  )}
                </div>

                {/* Grid: Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2">
                      Email Address
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. business@domain.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-950/40 hover:bg-slate-55/20 text-xs sm:text-sm text-slate-900 dark:text-slate-100 transition-all focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 ${
                        validationErrors.email ? "border-rose-400 focus:ring-rose-450" : "border-slate-200 dark:border-slate-800 focus:ring-brand-blue"
                      }`}
                    />
                    {validationErrors.email && (
                      <span className="text-[10px] text-rose-500 font-bold block mt-1.5">{validationErrors.email}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +251 911 000000"
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-950/40 hover:bg-slate-55/20 text-xs sm:text-sm text-slate-900 dark:text-slate-100 transition-all focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 ${
                        validationErrors.phone ? "border-rose-400 focus:ring-rose-450" : "border-slate-200 dark:border-slate-800 focus:ring-blue-500"
                      }`}
                    />
                    {validationErrors.phone && (
                      <span className="text-[10px] text-rose-500 font-bold block mt-1.5">{validationErrors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Dropdown: Services Categories */}
                <div>
                  <label htmlFor="service" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="" className="dark:bg-slate-900">-- General Exploration / Not Specified --</option>
                    <option value="Digital Marketing" className="dark:bg-slate-900">Digital Marketing Campaigns</option>
                    <option value="Website Development" className="dark:bg-slate-900">Website Development</option>
                    <option value="Branding & Design" className="dark:bg-slate-900">Branding & Corporate Identity</option>
                    <option value="Content Creation" className="dark:bg-slate-900">Creative Copywriting & Video</option>
                    <option value="SEO Services" className="dark:bg-slate-900">Search Engine Optimization (SEO)</option>
                  </select>
                </div>

                {/* Textarea: Brief project details */}
                <div>
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2">
                    Tell us about your venture
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your current bottleneck, your target audience, and what scale objectives you hope to hit with us."
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-950/40 hover:bg-slate-55/20 text-xs sm:text-sm text-slate-900 dark:text-slate-100 transition-all focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 resize-none ${
                      validationErrors.message ? "border-rose-400 focus:ring-rose-450" : "border-slate-200 dark:border-slate-800 focus:ring-blue-500"
                    }`}
                  />
                  {validationErrors.message && (
                    <span className="text-[10px] text-rose-500 font-bold block mt-1.5">{validationErrors.message}</span>
                  )}
                </div>

                {/* Consent & Submit */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-550 dark:text-slate-300 border border-slate-100 dark:border-slate-800 rounded-lg p-2.5 bg-slate-50 dark:bg-slate-955/50">
                    <Info className="w-4 h-4 text-brand-blue shrink-0 animate-pulse" />
                    <span>Free blueprint analysis delivered with consultation proposal.</span>
                  </div>
                  
                  <button
                    type="submit"
                    id="form-submit-btn"
                    className="px-6 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-blue to-brand-purple hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-blue-500/10 cursor-pointer self-stretch sm:self-auto shrink-0"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>

            {/* In-app past inquiries visual tracker logged to localStorage */}
            {pastInquiries.length > 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-5 shadow-sm">
                
                {/* Header Switch */}
                <button
                  id="toggle-history-btn"
                  onClick={() => setShowInquiryHistory(!showInquiryHistory)}
                  className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-1.5">
                    <CalendarRange className="w-4 h-4 text-brand-purple" />
                    <span>Your Session Enquiries ({pastInquiries.length})</span>
                  </div>
                  <span className="text-[10px] bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-850 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded transition-colors uppercase">
                    {showInquiryHistory ? "Hide logs" : "View logs"}
                  </span>
                </button>

                {/* Submissions List */}
                <AnimatePresence>
                  {showInquiryHistory && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 flex flex-col gap-3 overflow-hidden max-h-[220px] overflow-y-auto pr-1"
                    >
                      {pastInquiries.map((inq) => (
                        <div
                          key={inq.id}
                          id={`inquiry-log-${inq.id}`}
                          className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850 flex items-center justify-between gap-3 text-xs"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-800 dark:text-slate-100 truncate block">
                                {inq.name}
                              </span>
                              <span className="text-[9px] bg-sky-100 dark:bg-slate-900 text-brand-blue-deep dark:text-brand-blue-light px-1.5 py-0.5 rounded font-bold shrink-0 uppercase">
                                {inq.service}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 block">
                              Submitted: {inq.timestamp} • Status: <span className="text-emerald-600 dark:text-emerald-450 font-semibold">{inq.status}</span>
                            </span>
                          </div>
                          <button
                            id={`delete-inquiry-btn-${inq.id}`}
                            onClick={() => deleteInquiry(inq.id)}
                            className="p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-955/20 transition-colors cursor-pointer"
                            aria-label={`Delete ${inq.name} inquiry`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )}

          </div>

        </div>

      </motion.div>
    </section>
  );
}
