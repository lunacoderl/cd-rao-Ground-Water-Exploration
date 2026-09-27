import { SiteWorkItem } from '../types';

export const siteWorksData: SiteWorkItem[] = [
  {
    id: 'site-1',
    title: 'Residential Site',
    location: 'MVP Colony, Visakhapatnam',
    serviceType: 'Borewell Point Identification',
    badge: 'Borewell Point Identification',
    image: '/images/cd-rao-field.jpg',
    description: 'Borewell point survey conducted for a new multi-story residential apartment complex in MVP Colony Sector-9. Confined space required precision 3D scanning and micro-resistivity soundings to steer clear of underground drainage and utility pipelines.',
    pointsIdentified: '1 Primary Point + 1 Backup Point',
    estimatedDepth: '280 – 340 Feet',
    waterYield: '2.5 Inches High Yield',
    date: 'February 2026',
    clientType: 'Residential',
    additionalImages: [
      '/images/bore-point-found.jpg',
      '/images/equipment-kit.jpg',
      '/images/water-detector.jpg'
    ],
    videoUrl: '/videos/field-video-1.mp4'
  },
  {
    id: 'site-2',
    title: 'Agricultural Land',
    location: 'Anakapalle Rural',
    serviceType: 'Ground Water Survey',
    badge: 'Ground Water Survey',
    image: '/images/resistivity-survey.jpg',
    description: 'Comprehensive 8-acre sugarcane and mango plantation water exploration using Schlumberger electrical resistivity sounding. Mapped two major subsurface fracture zones intersecting at 380 feet with continuous year-round aquifer recharge.',
    pointsIdentified: '2 Agricultural Points Marked',
    estimatedDepth: '380 – 420 Feet',
    waterYield: '3.0 Inches Sustainable Discharge',
    date: 'January 2026',
    clientType: 'Agricultural',
    additionalImages: [
      '/images/cd-rao-field.jpg',
      '/images/official-brochure.jpg',
      '/images/3d-field-scan.jpg'
    ],
    videoUrl: '/videos/field-video-2.mp4'
  },
  {
    id: 'site-3',
    title: 'Commercial Project',
    location: 'Gajuwaka Industrial Zone',
    serviceType: 'Geophysical Survey',
    badge: 'Geophysical Survey',
    image: '/images/equipment-kit.jpg',
    description: 'Deep geological exploration and strata mapping for an engineering manufacturing unit requiring 20,000 liters per day. Vertical electrical soundings conducted up to 600 feet to evaluate water quality and eliminate coastal saline intrusion zones.',
    pointsIdentified: '1 High-Volume Industrial Point',
    estimatedDepth: '450 – 520 Feet',
    waterYield: '3.5 Inches Continuous Industrial Flow',
    date: 'December 2025',
    clientType: 'Commercial',
    additionalImages: [
      '/images/resistivity-survey.jpg',
      '/images/cd-rao-field.jpg',
      '/images/bore-point-found.jpg'
    ],
    videoUrl: '/videos/field-video-3.mp4'
  },
  {
    id: 'site-4',
    title: 'Village Site',
    location: 'Bheemunipatnam (Bheemili)',
    serviceType: '3D Earth Scanning',
    badge: '3D Earth Scanning',
    image: '/images/3d-field-scan.jpg',
    description: 'Community drinking water exploration for village layout in Bheemunipatnam coastal belt. Utilized high-frequency 3D ground scanner to locate freshwater aquifer pocket sheltered behind coastal sand dunes without brackish water mixing.',
    pointsIdentified: '1 Sweet Water Borewell Point',
    estimatedDepth: '180 – 240 Feet',
    waterYield: '2.0 Inches Potable Sweet Water',
    date: 'March 2026',
    clientType: 'Village',
    additionalImages: [
      '/images/water-detector.jpg',
      '/images/official-brochure.jpg',
      '/images/cd-rao-field.jpg'
    ],
    videoUrl: '/videos/field-video-4.mp4'
  }
];
