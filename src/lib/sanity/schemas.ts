import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImage } from "./types";

// Conceptual Sanity schema definitions for agent's understanding and documentation.
// These would typically be defined in a Sanity Studio project's schema files.

/**
 * Reusable SEO object for various document types.
 *
 * @property {string} title - SEO Title (e.g., for <title> tag)
 * @property {string} description - SEO Meta Description
 * @property {string} canonicalUrl - Canonical URL
 * @property {SanityImage} ogImage - Open Graph image
 */
export interface SeoSchema {
  _type: "seo";
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: SanityImage;
}

/**
 * Schema for a generic Marketing Page.
 *
 * @property {string} title - Main title of the marketing page
 * @property {string} slug - Unique slug for the page URL
 * @property {SeoSchema} seo - SEO metadata for the page
 * @property {string} heroHeading - Main heading for the hero section
 * @property {string} heroSubheading - Subheading for the hero section
 * @property {SanityImage} heroImage - Hero image
 * @property {string} heroCtaText - Call-to-action text for the hero section
 * @property {string} heroCtaLink - Call-to-action link for the hero section
 * @property {PortableTextBlock[]} content - Main content of the page
 * @property {Array<any>} components - Array of references to reusable components/sections
 */
export interface MarketingPageSchema {
  _type: "marketingPage";
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  seo?: SeoSchema;
  heroHeading?: string;
  heroSubheading?: string;
  heroImage?: SanityImage;
  heroCtaText?: string;
  heroCtaLink?: string;
  content?: PortableTextBlock[];
  components?: Array<any>; // Placeholder for flexible components
}

/**
 * Schema for an individual FAQ item.
 *
 * @property {string} question - The FAQ question
 * @property {PortableTextBlock[]} answer - The FAQ answer
 * @property {string} category - Category for the FAQ (e.g., "General", "Billing")
 */
export interface FaqSchema {
  _type: "faq";
  question: string;
  answer: PortableTextBlock[];
  category?: string;
}

/**
 * Schema for a collection of FAQs.
 *
 * @property {string} title - Title for the FAQ section/page
 * @property {string} slug - Slug for the FAQ page
 * @property {SeoSchema} seo - SEO metadata for the FAQ page
 * @property {Array<any>} faqItems - Array of references to individual FAQ items
 */
export interface FaqPageSchema {
  _type: "faqPage";
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  seo?: SeoSchema;
  faqItems?: Array<FaqSchema>; // Can reference or embed FaqSchema
}
