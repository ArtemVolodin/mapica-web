"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    scrollToSection(href.replace("#", ""));
    setMobileOpen(false);
  };

  const isActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500",
              scrolled
                ? "glass-strong glow-border shadow-lg shadow-black/20"
                : "bg-transparent"
            )}
          >
            <Logo />

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "px-4 py-2 text-sm rounded-lg transition-colors",
                    isActive(link.href)
                      ? "text-white bg-white/10"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Button size="md" onClick={() => scrollToSection("contact")}>
                Book Intro Call
              </Button>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-4 right-4 glass-strong rounded-2xl p-6 border border-white/10 max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 rounded-xl transition-colors",
                      isActive(link.href)
                        ? "text-white bg-white/10"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => handleNavClick("#contact")}
                  >
                    Book Intro Call
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
