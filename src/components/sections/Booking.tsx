"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CalendarEmbed } from "@/components/booking/CalendarEmbed";
import { CalendarPlaceholder } from "@/components/booking/CalendarPlaceholder";
import { getCalendarConfig } from "@/lib/calendar-config";

export function Booking() {
  const calendarConfig = getCalendarConfig();

  return (
    <section id="contact" className="relative py-24 md:py-32 scroll-mt-section">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/15 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Book your intro call"
          description="Pick a time that works. We'll discuss your product, timeline and how Mapica can help."
        />

        <motion.div
          className="glass-strong rounded-3xl overflow-hidden border border-white/10 glow-border max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {calendarConfig ? (
            <CalendarEmbed config={calendarConfig} />
          ) : (
            <CalendarPlaceholder />
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
