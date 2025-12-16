"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoItemProps {
  title: string;
  description: string;
  serviceDescription?: string; // Brief 6-10 word service summary
  icon: React.ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const BentoItem = ({ title, description, serviceDescription, icon, className, imageSrc, imageAlt }: BentoItemProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/60 bg-white/60 p-5 sm:p-6 shadow-lg backdrop-blur-md transition-all hover:shadow-xl hover:border-orange-200/60",
      className
    )}
  >
    {imageSrc && (
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt || ""}
          fill
          className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-white/30" />
      </div>
    )}

    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
    
    <div className="relative z-20">
      <div className="mb-3 sm:mb-4 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-100 group-hover:text-orange-700 transition-colors shadow-sm">
        {icon}
      </div>
      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-heading">{title}</h3>
      {serviceDescription && (
        <p className="text-xs font-medium text-orange-600 mb-3 uppercase tracking-wide">{serviceDescription}</p>
      )}
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export function CapabilitiesBento() {
  return (
    <>
      <div className="mb-10 sm:mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-hero-accent text-slate-900 mb-3 sm:mb-4">
          The work that keeps you up at night. <br className="hidden sm:block" /> Handled.
        </h2>
        <p className="text-base sm:text-lg text-slate-600">
          Approvals on everything. No black boxes. Just relief.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[minmax(200px,auto)]">
        {/* Large Item 1 */}
        <BentoItem
          className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-white to-orange-50/30"
          title="Personalized Outreach"
          serviceDescription="AI-powered email campaigns with human approval"
          description="Email sequences that feel written by a human because they are based on your actual voice. We build systems that research the prospect, draft the note, and wait for your nod before sending. No robotic spam."
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
          imageSrc="/assets/generated/human-review-desktop.png"
          imageAlt="Human review interface showing a green approval button"
        />

        {/* Tall Item */}
        <BentoItem
          className="md:row-span-2 bg-slate-50/50"
          title="Stop Chasing Ghosts"
          serviceDescription="Intelligent lead qualification and scheduling"
          description="AI sifts through inquiries and schedules only the qualified leads who are ready to buy. You wake up to booked calls, not 'just looking' emails."
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>}
        />

        {/* Standard Items */}
        <BentoItem
          title="Drafted Replies"
          serviceDescription="Auto-draft responses for review"
          description="AI drafts the response, you click send. Maintain control without the typing."
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>}
        />
        <BentoItem
          title="Smart Scheduling"
          serviceDescription="Automated conflict-free calendar coordination"
          description="Booking that actually syncs. No double-booking or email tag."
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>}
        />
        <BentoItem
          title="Workflow Rescue"
          serviceDescription="Repair broken integrations and workflows"
          description="Broken Zaps? Data leaks? We fix the duct-tape and build robust connections."
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>}
        />
      </div>
    </>
  );
}
