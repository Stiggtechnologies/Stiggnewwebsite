import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noIndex?: boolean;
  jsonLd?: object | object[];
}

const SITE_NAME = 'Stigg Security';
const BASE_URL = 'https://www.stigg.ca';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  jsonLd,
}) => {
  const fullTitle = title.includes('Stigg Security')
    ? title
    : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_CA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

// ── Shared structured data ────────────────────────────────────

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SecurityBusiness',
  name: 'Stigg Security Inc.',
  url: 'https://www.stigg.ca',
  logo: 'https://www.stigg.ca/logo.png',
  image: 'https://www.stigg.ca/og-image.jpg',
  description:
    'Alberta-licensed professional security company providing security guards, alarm monitoring, camera systems, mobile patrols, and risk consulting across Alberta since 2010.',
  foundingDate: '2010',
  areaServed: [
    { '@type': 'City', name: 'Fort McMurray', containedInPlace: { '@type': 'Province', name: 'Alberta' } },
    { '@type': 'City', name: 'Calgary', containedInPlace: { '@type': 'Province', name: 'Alberta' } },
    { '@type': 'City', name: 'High River', containedInPlace: { '@type': 'Province', name: 'Alberta' } },
    { '@type': 'Province', name: 'Alberta' },
  ],
  location: [
    {
      '@type': 'Place',
      name: 'Stigg Security — High River',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '121 8 Ave SE',
        addressLocality: 'High River',
        addressRegion: 'AB',
        postalCode: 'T1V 1R8',
        addressCountry: 'CA',
      },
    },
    {
      '@type': 'Place',
      name: 'Stigg Security — Fort McMurray',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '160 Woodpecker',
        addressLocality: 'Fort McMurray',
        addressRegion: 'AB',
        postalCode: 'T9K 0L4',
        addressCountry: 'CA',
      },
    },
  ],
  telephone: '+15872102167',
  email: 'info@stigg.ca',
  sameAs: ['https://www.linkedin.com/company/stigg-security'],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Alberta Security License' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'WCB Certified Alberta' },
  ],
  memberOf: {
    '@type': 'Organization',
    name: 'Alberta Security Industry Association',
  },
};

export const HOMEPAGE_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What security services does Stigg Security provide in Alberta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stigg Security provides a full range of professional security services across Alberta including licensed security guards, mobile security patrols, alarm monitoring, CCTV and camera systems, risk assessment, risk consulting, private investigation, security technology, and cash solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Stigg Security licensed in Alberta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All Stigg Security personnel are fully licensed under Alberta provincial regulations and are members of the Alberta Security Industry Association. We are also WCB certified.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas of Alberta does Stigg Security serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stigg Security serves clients across all of Alberta including Fort McMurray, Calgary, High River, and surrounding regions. We specialize in industrial and oilsands security in Northern Alberta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Stigg Security provide industrial site security in Fort McMurray?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are experienced in providing security for industrial sites, oilsands operations, and construction projects in the Fort McMurray region. Our teams are trained for the unique demands of Northern Alberta industrial environments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I request a security guard or consultation from Stigg Security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact Stigg Security by calling (587) 210-2167, emailing info@stigg.ca, or using the contact form on our website at stigg.ca/contact. We respond within 24 hours.',
      },
    },
  ],
};
