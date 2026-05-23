"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="solutions" className="relative py-24 md:py-32 scroll-mt-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Solutions"
          title="What we build for founders"
          description="From first prototype to App Store launch—full-stack AI mobile product development."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group glass rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] border border-white/8 hover:border-white/12 transition-all duration-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-600/20 border border-white/10 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-shadow">
                  <Icon size={22} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
