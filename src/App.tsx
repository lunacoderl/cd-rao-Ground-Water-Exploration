import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { NotFound } from './pages/NotFound';
import { Preloader } from './components/home/Preloader';
import { EnquiryModal } from './components/common/EnquiryModal';

// Auto scroll to top on route change or handle hash
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (serviceTitle?: string) => {
    setSelectedService(serviceTitle);
    setEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
    setSelectedService(undefined);
  };

  return (
    <Router>
      <Preloader />
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-500 selection:text-white pb-14 sm:pb-0">
        <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenEnquiry={handleOpenEnquiry}
                  enquiryOpen={enquiryOpen}
                  onCloseEnquiry={handleCloseEnquiry}
                />
              }
            />
            <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
        <MobileActionBar onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Global Enquiry Modal with selected service support */}
        <EnquiryModal
          isOpen={enquiryOpen}
          onClose={handleCloseEnquiry}
          preselectedService={selectedService}
        />
      </div>
    </Router>
  );
};

export default App;
