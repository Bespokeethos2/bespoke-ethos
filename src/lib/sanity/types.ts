import type { PortableTextBlock } from "@portabletext/types";

export interface SanityAuthor {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface SanityImage {
  url?: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  blurDataURL?: string;
  alt?: string;
}

export interface SanityChangelogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  image?: SanityImage;
  authors: SanityAuthor[];
  body?: PortableTextBlock[];
  ogImage?: SanityImage;
  nextPost?: { title?: string; slug?: string };
}

export interface SanityChangelogHeader {
  title: string;
  subtitle?: string;
  socialLinksTitle?: string;
  socialLinks: Array<{
    id?: string;
    url?: string;
    label?: string;
    iconUrl?: string;
  }>;
}

export interface SanitySEO {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: SanityImage;
}

export interface SanityMarketingPage {
  title: string;
  slug: string;
  seo?: SanitySEO;
  heroHeading?: string;
  heroSubheading?: string;
  heroImage?: SanityImage;
  heroCtaText?: string;
  heroCtaLink?: string;
  content?: PortableTextBlock[];
  components?: Array<any>;
}

export interface SanityFAQ {
  question: string;
  answer: PortableTextBlock[];
  category?: string;
}

export interface SanityFAQPage {
  title: string;
  slug: string;
  seo?: SanitySEO;
  faqItems?: SanityFAQ[];
}
