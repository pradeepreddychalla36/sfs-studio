import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEO({ 
  title = "sfsstudio | Premium Cinematic Wedding Photography Hyderabad", 
  description = "Hyderabad's most elite cinematic photography studio specializing in luxury wedding storytelling and emotional legacies.",
  keywords = "wedding photography hyderabad, cinematic wedding films, sfs studio, best pre wedding photographer hyderabad, best photographer in hyderabad"
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    
    // Update Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://sfsstudio.com${location.pathname}`);

  }, [title, description, keywords, location.pathname]);

  return null;
}
