import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Calendar, MapPin, User } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: preselectedService || 'Ground Water Survey',
    preferredDate: '',
    message: '',
  });

  // Synchronize preselectedService when modal opens with a specific service
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService, isOpen]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending enquiry
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      location: '',
      service: 'Ground Water Survey',
      preferredDate: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative max-w-lg w-full bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Close Enquiry Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Enquiry Received!</h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-sky-600">{formData.name}</span>. Geologist C.D. Rao will call you shortly on{' '}
              <span className="font-semibold text-sky-600">{formData.phone}</span> to discuss your site survey requirement.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/919949401970?text=Hi%20C.D.Rao%20Sir,%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(formData.service)}%20at%20${encodeURIComponent(formData.location)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-sm"
              >
                Connect on WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="py-2.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-sky-600">
                Ground Water Exploration
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                Request a Field Survey
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill this form to book an on-site groundwater exploration and point marking survey.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-sky-500 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number (10 digits) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="e.g. 9949401970"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-sky-500 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Site / Land Location *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. MVP Colony, Visakhapatnam"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-sky-500 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-sky-500 rounded-xl px-3 py-2.5 text-xs text-slate-900 outline-none focus:bg-white"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Survey Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 focus:border-sky-500 rounded-xl px-3 py-2.5 text-xs text-slate-900 outline-none focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Plot dimensions, previous borewell depth if any..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-sky-500 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 outline-none resize-none focus:bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-600/25 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm Survey Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
