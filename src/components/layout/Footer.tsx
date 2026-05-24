"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/5 bg-[#020206]">
      <div className="footer-glow-line mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-2">
            <motion.div
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Logo variant="footer" />
            </motion.div>
            <p className="mt-5 text-sm text-zinc-500 max-w-xs leading-relaxed">
              AI-native mobile product studio. Small teams, incredible products.
            </p>
            <a
              href="https://mapica.io"
              className="mt-4 inline-block text-sm text-blue-400/90 hover:text-blue-300 transition-colors"
            >
              mapica.io
            </a>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((item) => (
                <li key={item}>
                  <a
                    href="#solutions"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-5">
              Stack
            </h4>
            <ul className="space-y-3">
              {footerLinks.stack.map((item) => (
                <li key={item}>
                  <a
                    href="#stack"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-blue-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Mapica. All rights reserved.
          </p>
          <div className="text-xs text-zinc-600 text-center sm:text-right space-y-0.5">
            <p>Paris, France</p>
            <p className="text-zinc-500">Building globally</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
