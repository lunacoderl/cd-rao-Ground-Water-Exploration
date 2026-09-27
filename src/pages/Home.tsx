import React, { useState } from 'react';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { AboutGeologist } from '../components/home/AboutGeologist';
import { Testimonials } from '../components/home/Testimonials';
import { RealSiteWorks } from '../components/home/RealSiteWorks';
import { ServicesSection } from '../components/home/ServicesSection';
import { TechnologySection } from '../components/home/TechnologySection';
import { HowItWorks } from '../components/home/HowItWorks';
import { FieldVideos } from '../components/home/FieldVideos';
import { Gallery } from '../components/home/Gallery';
import { Reviews } from '../components/home/Reviews';
import { FaqContact } from '../components/home/FaqContact';
import { Lightbox } from '../components/common/Lightbox';
import { VideoModal } from '../components/common/VideoModal';
import { ProjectModal } from '../components/common/ProjectModal';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { SiteWorkItem } from '../types';

interface HomeProps {
  onOpenEnquiry: () => void;
  enquiryOpen: boolean;
  onCloseEnquiry: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onOpenEnquiry,
  enquiryOpen,
  onCloseEnquiry,
}) => {
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState({ url: '', title: '', desc: '' });

  // Video modal state
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState({ url: '', title: '', desc: '' });

  // Project modal state
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<SiteWorkItem | null>(null);

  const handleOpenLightbox = (url: string, title?: string, desc?: string) => {
    setActiveImage({ url, title: title || '', desc: desc || '' });
    setLightboxOpen(true);
  };

  const handlePlayVideo = (url: string, title: string, desc?: string) => {
    setActiveVideo({ url, title, desc: desc || '' });
    setVideoModalOpen(true);
  };

  const handleSelectProject = (project: SiteWorkItem) => {
    setSelectedProject(project);
    setProjectModalOpen(true);
  };

  return (
    <main className="relative">
      <Hero onOpenEnquiry={onOpenEnquiry} />
      <TrustStrip />
      <AboutGeologist onOpenEnquiry={onOpenEnquiry} />
      <Testimonials />
      <RealSiteWorks
        onSelectProject={handleSelectProject}
        onViewAllGallery={() => {
          const el = document.getElementById('gallery');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <ServicesSection onOpenEnquiry={onOpenEnquiry} />
      <TechnologySection onOpenEnquiry={onOpenEnquiry} />
      <HowItWorks />
      <FieldVideos onPlayVideo={handlePlayVideo} />
      <Gallery onOpenLightbox={handleOpenLightbox} onPlayVideo={handlePlayVideo} />
      <Reviews />
      <FaqContact />

      {/* Lightbox for uncropped image views */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageUrl={activeImage.url}
        title={activeImage.title}
        description={activeImage.desc}
      />

      {/* Video Modal for uncropped video views */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl={activeVideo.url}
        title={activeVideo.title}
        description={activeVideo.desc}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        onPlayVideo={handlePlayVideo}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={enquiryOpen} onClose={onCloseEnquiry} />
    </main>
  );
};
