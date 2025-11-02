import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Guru Homes - Your Trusted Partner in Dubai Real Estate",
  description = "Connecting investors and homeowners with the finest properties across the UAE.",
  keywords = "real estate, luxury homes, Dubai real estate, Guru Homes, Afnan Ahmed Siddique, premium developments",
  image = "/images/logo.png",
  url = "",
  type = "website",
  siteName = "Guru Homes",
  author = "Guru Homes",
  publishedTime = "",
  modifiedTime = "",
  section = "",
  tags = []
}) => {
  const fullUrl = url ? `https://guruhomes.ae/${url}` : "https://guruhomes.ae/";
  const fullImageUrl = image.startsWith('http') ? image : `https://guruhomes.ae${image}`;

  // Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Guru Homes",
    "alternateName": "Guru Builders & Developers",
    "url": "https://www.guruhomes.ae/",
    "logo": "https://www.guruhomes.ae/images/logo.png",
    "description": "Connecting investors and homeowners with the finest properties across the UAE.",
    "founder": {
      "@type": "Person",
      "name": "Afnan Ahmed Siddique"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK",
      "addressRegion": "Islamabad"
    },
    "sameAs": [
      "https://www.facebook.com/guruhomes",
      "https://www.instagram.com/guruhomes",
      "https://www.linkedin.com/company/guruhomes"
    ]
  };

  // Structured Data for WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Guru Homes",
    "url": "https://guruhomes.ae/",
    "description": "Official website of Guru Homes - Your Trusted Partner in Dubai Real Estate",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://guruhomes.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific Open Graph tags */}
      {type === "article" && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@guruhomes" />
      <meta name="twitter:creator" content="@guruhomes" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
