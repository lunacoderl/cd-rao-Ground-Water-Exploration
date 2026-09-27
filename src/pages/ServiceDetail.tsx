import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ChevronRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Droplets,
  Layers,
  MapPin,
  Sparkles,
  BarChart3,
  Calendar,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { Lightbox } from '../components/common/Lightbox';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { YouTubeIcon } from '../components/common/YouTubeIcon';

export const ServiceDetail: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState({ url: '', title: '' });

  const service = servicesData.find((s) => s.slug === serviceSlug);

  // If not found, redirect to 404
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleOpenImage = (url: string, title: string) => {
    setActiveImage({ url, title });
    setLightboxOpen(true);
  };

  return (
    <div className="pt-20 bg-white text-slate-900 min-h-screen">
      
      {/* Section A: Service Hero Banner (Dark photo banner matching mockup Panel 2) */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-sky-900/30">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6">
            <Link to="/" className="hover:text-sky-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <a href="/#services" className="hover:text-sky-300 transition-colors">Services</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-sky-400 font-semibold">{service.title}</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
              {service.badge}
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              {service.shortDescription}
            </p>

            <div className="flex items-center gap-2 text-xs text-sky-300 font-medium">
              <span>Field Survey &amp; Analysis by Certified Geologist Chigurupati Durga Rao, M.Sc</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/30 border border-sky-400/30 transition-all cursor-pointer"
              >
                Request This Service
              </button>

              <a
                href="https://www.youtube.com/@BoreMitra/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all cursor-pointer"
              >
                <YouTubeIcon className="w-4 h-4 fill-white" />
                <span>YouTube @BoreMitra</span>
              </a>

              <a
                href="tel:+919949401970"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-sky-400/60 transition-all backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call: 9949401970</span>
              </a>

              <a
                href={`https://wa.me/919949401970?text=Hello%20Geologist%20C.D.Rao%20Sir,%20I%20am%20interested%20in%20your%20service:%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 font-semibold text-xs sm:text-sm border border-emerald-500/40 transition-colors backdrop-blur-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Strip (Light Theme matching mockup Panel 2) */}
      <section className="bg-slate-100/80 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">Survey Depth</span>
                <span className="text-sm font-bold text-slate-900">Up to 1,000+ ft</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">Accuracy Rate</span>
                <span className="text-sm font-bold text-slate-900">98% Yield Success</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">Survey Type</span>
                <span className="text-sm font-bold text-slate-900">3D Digital Scan</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">Turnaround</span>
                <span className="text-sm font-bold text-slate-900">Same-Day Marking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: About this Service / Overview (Crisp Light Theme matching mockup) */}
      <section className="py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Comprehensive Overview
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  About This Service
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.overview.paragraph1}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.overview.paragraph2}
              </p>

              <div className="space-y-3 pt-2">
                {service.overview.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Media (5 cols) - Uncropped full height/width presentation */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full bg-slate-50 p-3 rounded-2xl border border-slate-200 shadow-md flex items-center justify-center min-h-[320px]">
                <img
                  src={service.overview.visualImage}
                  alt={service.title}
                  className="max-h-[380px] w-auto max-w-full object-contain rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section C: What the Service Involves (4 Highlight Badges on Light Background) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Technical Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              What This Service Involves
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 transition-all flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-4 group-hover:scale-105 transition-transform">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5">{feat.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section D: Our Survey Process (5-Step Numbered Timeline on White Background) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Execution Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Our Survey Process
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Structured step-by-step methodology followed for every field assessment.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-0.5 bg-sky-200 -z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {service.process.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-18 h-18 rounded-full bg-white border-2 border-sky-500/40 group-hover:border-sky-500 flex items-center justify-center shadow-md mb-4 transition-transform group-hover:scale-110">
                    <span className="text-sm font-mono font-bold text-sky-600">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[190px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section E: Equipment & Technology Used (Light Background) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Field Tested Instrumentation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Equipment & Technology Used
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Modern digital exploration tools utilized during the survey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.equipment.map((eq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-400 transition-all flex flex-col group shadow-sm hover:shadow-md"
              >
                {/* Media Container - Uncropped */}
                <div className="w-full h-44 bg-slate-50 flex items-center justify-center p-3 border-b border-slate-100">
                  <img
                    src={eq.image}
                    alt={eq.name}
                    className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 block">
                      {eq.role}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1 group-hover:text-sky-600 transition-colors">
                      {eq.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {eq.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section F: Why This Service is Important (Checklist + Visual on White) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Checklist (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Critical Value
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  {service.whyItMatters.title}
                </h2>
              </div>

              <div className="space-y-3 pt-2">
                {service.whyItMatters.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-800 leading-relaxed font-semibold">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md shadow-sky-600/25 transition-all cursor-pointer"
                >
                  Book Site Consultation
                </button>
              </div>
            </div>

            {/* Visual (5 cols) - Uncropped */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full bg-slate-50 p-3 rounded-2xl border border-slate-200 shadow-md flex items-center justify-center min-h-[320px]">
                <img
                  src={service.whyItMatters.waterImage}
                  alt="High water yield borewell"
                  className="max-h-[380px] w-auto max-w-full object-contain rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section G: Service Gallery (Light Background) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Visual Documentation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Service Gallery
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Real field photographs related to {service.title}.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {service.gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => handleOpenImage(img.url, img.caption)}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-sky-400 cursor-pointer group flex flex-col shadow-xs hover:shadow-md transition-all"
              >
                <div className="w-full h-40 bg-slate-100 flex items-center justify-center p-2">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="max-h-full max-w-full w-auto h-auto object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-3 bg-white text-center border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-800 line-clamp-1 block">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section H: Frequently Asked Questions (White Background) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {service.faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white border-sky-400 shadow-md'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-sky-600 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section I: Final CTA Banner (Dark Geological Navy Banner matching mockup Panel 2) */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-sky-950 via-slate-900 to-blue-950 border border-sky-400/40 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                Ready to explore groundwater on your land?
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Need a Ground Water Survey?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Contact C.D.Rao Ground Water Exploration Consultancy for accurate and reliable field assessments in Visakhapatnam.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 flex-shrink-0 w-full sm:w-auto">
              <a
                href="https://www.youtube.com/@BoreMitra/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all cursor-pointer"
              >
                <YouTubeIcon className="w-4 h-4 fill-white" />
                <span>YouTube @BoreMitra</span>
              </a>

              <a
                href="tel:+919949401970"
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/30"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/919949401970?text=Hello%20Geologist%20C.D.Rao%20Sir,%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for gallery view */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageUrl={activeImage.url}
        title={activeImage.title}
      />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        preselectedService={service.title}
      />

    </div>
  );
};
