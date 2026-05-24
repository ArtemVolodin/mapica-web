"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CalendarEmbed } from "@/components/booking/CalendarEmbed";
import { CalendarLoadingShell } from "@/components/booking/CalendarLoadingShell";
import { CalendarPlaceholder } from "@/components/booking/CalendarPlaceholder";
import { getCalendarConfig } from "@/lib/calendar-config";

export function Booking() {
  const calendarConfig = getCalendarConfig();
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoadCalendar, setShouldLoadCalendar] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !calendarConfig) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadCalendar(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [calendarConfig]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 scroll-mt-section"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/15 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Book your intro call"
          description="Pick a time that works. We'll discuss your product, timeline and how Mapica can help."
        />

        <motion.div
          className="premium-card rounded-3xl overflow-hidden border border-white/10 glow-border max-w-4xl mx-auto bg-[#030308] shadow-2xl shadow-blue-500/10"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: "0 0 60px -15px rgba(59,130,246,0.25)" }}
        >
          <div className="premium-card-shine" />
          {!calendarConfig ? (
            <CalendarPlaceholder />
          ) : shouldLoadCalendar ? (
            <CalendarEmbed config={calendarConfig} />
          ) : (
            <CalendarLoadingShell />
          )}
        </motion.div>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Questions before booking?{" "}
          <a
            href="mailto:hello@mapica.io"
            className="text-blue-400/90 hover:text-blue-300 transition-colors"
          >
            hello@mapica.io
          </a>
        </p>
      </div>
    </section>
  );
}
