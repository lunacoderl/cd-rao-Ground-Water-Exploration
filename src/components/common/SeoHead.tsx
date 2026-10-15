import React, { useEffect } from 'react';
import { siteSeo } from '../../siteSeo';

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  noIndex?: boolean;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title = siteSeo.defaultTitle,
  description = siteSeo.defaultDescription,
  canonicalPath = '/',
  noIndex = false,
}) => {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');

    // 4. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const fullUrl = cleanPath === '/' ? `${siteSeo.baseUrl}/` : `${siteSeo.baseUrl}${cleanPath}`;
    canonicalLink.setAttribute('href', fullUrl);

    // 5. OpenGraph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', fullUrl);
    }
  }, [title, description, canonicalPath, noIndex]);

  return null;
};
