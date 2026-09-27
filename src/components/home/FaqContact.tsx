import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { faqData } from '../../data/faqData';
import { servicesData } from '../../data/servicesData';
import { YouTubeIcon } from '../common/YouTubeIcon';

export const FaqContact: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: 'Ground Water Survey',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="faq" className="py-24 bg-slate-100/70 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Frequently Asked Questions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Help & Clarifications
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Common questions about our groundwater exploration methodology, accuracy, and booking.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              {faqData.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isOpen
                        ? 'bg-white border-sky-400 shadow-md'
                        : 'bg-white/80 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-sky-600 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Us & Form Card (5 cols) matching mockup */}
          <div id="contact" className="lg:col-span-5">
            <div className="bg-[#0b1a30] text-white rounded-2xl p-6 sm:p-8 shadow-xl relative border border-slate-800">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Direct Consultancy
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Contact Geologist C.D. Rao
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Reach out to recognized Geologist Chigurupati Durga Rao for scientific ground water exploration in Visakhapatnam.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3 pb-6 border-b border-slate-700/80 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <a href="tel:+919949401970" className="text-white font-bold hover:text-sky-300">
                      9949401970
                    </a>
                    <span className="text-slate-400 mx-1.5">|</span>
                    <a href="tel:+919492459873" className="text-slate-300 hover:text-sky-300">
                      9492459873
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href="mailto:durgaraochp04@gmail.com"
                    className="text-slate-300 hover:text-sky-300 break-all text-xs"
                  >
                    durgaraochp04@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-slate-300 text-xs">
                    M.V.P. Colony, Sector-9, Gollaveedhi, Visakhapatnam – 530017
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <p className="text-slate-300 text-xs">
                    5:00 AM – 11:30 PM (All 7 Days)
                  </p>
                </div>

                {/* YouTube Link in Contact Info */}
                <div className="pt-2">
                  <a
                    href="https://www.youtube.com/@BoreMitra/shorts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-xs shadow-md shadow-red-600/25 transition-all"
                  >
                    <YouTubeIcon className="w-4 h-4 fill-white" />
                    <span>Watch Field Works on YouTube @BoreMitra</span>
                  </a>
                </div>
              </div>

              {/* Form Section inside White Container */}
              <div className="pt-6">
                {submitted ? (
                  <div className="bg-white text-slate-900 rounded-xl p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">Enquiry Submitted!</h4>
                    <p className="text-xs text-slate-600">
                      Thank you. Geologist C.D. Rao will contact you shortly to confirm your survey slot.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-4 py-2 rounded-lg bg-slate-800 text-xs text-white font-semibold hover:bg-slate-700"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="bg-white text-slate-900 rounded-xl p-4 sm:p-5 shadow-lg space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-sky-500 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 outline-none"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-digit Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-sky-500 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 outline-none"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Location / Area (e.g. Anakapalle / MVP Colony) *"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-sky-500 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-sky-500 rounded-lg px-2.5 py-2 text-xs text-slate-800 outline-none"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>

                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-sky-500 rounded-lg px-2.5 py-2 text-xs text-slate-800 outline-none"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={2}
                        placeholder="Message or property details (optional)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-sky-500 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 outline-none resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
