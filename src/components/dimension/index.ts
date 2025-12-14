/**
 * Dimension Template Components
 * 
 * Adapted from HTML5 UP's Dimension template for Bespoke Ethos.
 * Modern React/Next.js implementation with TypeScript and Tailwind CSS.
 * 
 * Usage:
 * ```tsx
 * import { DimensionLanding, DimensionContactForm } from '@/components/dimension';
 * 
 * export default function LandingPage() {
 *   const articles = [
 *     { id: 'intro', title: 'Intro', content: <p>Welcome...</p> },
 *     { id: 'work', title: 'Work', content: <p>Our work...</p> },
 *     { id: 'about', title: 'About', content: <p>About us...</p> },
 *     { id: 'contact', title: 'Contact', content: <DimensionContactForm /> },
 *   ];
 * 
 *   return (
 *     <DimensionLanding
 *       title="Bespoke Ethos"
 *       subtitle="AI consulting for small businesses"
 *       articles={articles}
 *       backgroundImage="/bg.jpg"
 *     />
 *   );
 * }
 * ```
 */

export { DimensionLanding, default as DimensionLandingDefault } from './DimensionLanding';
export { DimensionContactForm, default as DimensionContactFormDefault } from './DimensionContactForm';
