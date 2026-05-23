"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, Clock, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { timeSlots } from "@/lib/data";
import { cn } from "@/lib/utils";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export function Booking() {
  const todayStart = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const [viewDate, setViewDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectIdea: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const availableDays = useMemo(() => {
    const set = new Set<number>();
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const dow = date.getDay();
      if (dow !== 0 && dow !== 6 && date >= todayStart) {
        set.add(d);
      }
    }
    return set;
  }, [year, month, daysInMonth, todayStart]);

  const prevMonth = () =>
    setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () =>
    setViewDate(new Date(year, month + 1, 1));

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email";
    }
    if (!selectedDay) next.date = "Select a date";
    if (!selectedSlot) next.time = "Select a time slot";
    if (!form.projectIdea.trim()) next.projectIdea = "Tell us about your project";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

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
          className="glass-strong rounded-3xl overflow-hidden border border-white/10 glow-border max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="p-12 md:p-16 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Request received</h3>
                <p className="mt-3 text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thanks. Your request has been received. We will contact you soon.
                </p>
                <div className="mt-6 mx-auto max-w-sm glass rounded-2xl p-4 border border-white/10 text-left text-sm">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">
                    Confirmation
                  </p>
                  <p className="text-white font-medium">{form.name}</p>
                  <p className="text-zinc-400">{form.email}</p>
                  {selectedDay && selectedSlot && (
                    <p className="text-blue-400/90 mt-2">
                      {MONTHS[month]} {selectedDay} · {selectedSlot}
                    </p>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="grid lg:grid-cols-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Calendar */}
                <div className="lg:col-span-2 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="flex items-center gap-2 mb-6">
                    <Calendar size={18} className="text-blue-400" />
                    <span className="text-sm font-medium text-white">Select a date</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={prevMonth}
                      className="p-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
                      aria-label="Previous month"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <span className="text-sm font-medium text-white">
                      {MONTHS[month]} {year}
                    </span>
                    <button
                      type="button"
                      onClick={nextMonth}
                      className="p-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
                      aria-label="Next month"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {DAYS.map((d) => (
                      <div
                        key={d}
                        className="text-center text-[10px] font-medium text-zinc-600 py-1"
                      >
                        {d}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const isAvailable = availableDays.has(day);
                      const isSelected = selectedDay === day;
                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={!isAvailable}
                          onClick={() => {
                            setSelectedDay(day);
                            setSelectedSlot(null);
                          }}
                          className={cn(
                            "aspect-square rounded-lg text-sm flex items-center justify-center transition-all",
                            isAvailable &&
                              "hover:bg-blue-500/20 text-zinc-300 hover:text-white cursor-pointer",
                            !isAvailable && "text-zinc-700 cursor-not-allowed",
                            isSelected &&
                              "bg-gradient-to-br from-blue-600 to-violet-600 text-white font-medium shadow-lg shadow-blue-500/30"
                          )}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {selectedDay && (
                    <motion.div
                      className="mt-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Clock size={16} className="text-violet-400" />
                        <span className="text-xs font-medium text-zinc-400">
                          Available times
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={cn(
                              "px-3 py-2 rounded-lg text-xs font-medium transition-all",
                              selectedSlot === slot
                                ? "bg-blue-500/30 text-white border border-blue-400/50"
                                : "glass text-zinc-400 hover:text-white hover:border-white/15"
                            )}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="lg:col-span-3 p-6 md:p-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-zinc-500 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, name: e.target.value }));
                          if (errors.name) setErrors((e) => ({ ...e, name: "" }));
                        }}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl glass border text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-all text-sm",
                          errors.name
                            ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30"
                            : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/30"
                        )}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-500 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, email: e.target.value }));
                          if (errors.email) setErrors((e) => ({ ...e, email: "" }));
                        }}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl glass border text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-all text-sm",
                          errors.email
                            ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30"
                            : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/30"
                        )}
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-500 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, company: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                      placeholder="Company or startup name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-500 mb-2">
                      Project idea
                    </label>
                    <textarea
                      rows={4}
                      value={form.projectIdea}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, projectIdea: e.target.value }));
                        if (errors.projectIdea)
                          setErrors((e) => ({ ...e, projectIdea: "" }));
                      }}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl glass border text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-all text-sm resize-none",
                        errors.projectIdea
                          ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/30"
                          : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/30"
                      )}
                      placeholder="Tell us about your product idea..."
                    />
                    {errors.projectIdea && (
                      <p className="mt-1 text-xs text-red-400">{errors.projectIdea}</p>
                    )}
                  </div>
                  {(errors.date || errors.time) && (
                    <p className="text-xs text-red-400">
                      {errors.date || errors.time}
                    </p>
                  )}
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Book Intro Call
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
