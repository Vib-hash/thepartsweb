"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const voiceCommands = [
  "5 Alto bumpers aaye hain 850 ke.",
  "2 radiators sold today.",
  "What was today's margin?",
];

const inventoryRows = [
  { part: "Alto Bumper (Front)", qty: 5, price: "₹850" },
  { part: "Radiator — Hyundai i20", qty: 12, price: "₹2,400" },
  { part: "Brake Pad Set — Swift", qty: 8, price: "₹600" },
];

function WaveformBar({ index }: { index: number }) {
  return (
    <motion.div
      className="w-1 rounded-full bg-orange-500"
      animate={{
        height: [12, 28, 8, 24, 14, 30, 10, 20, 12],
      }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.1,
      }}
    />
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-64 sm:w-72">
      <div className="rounded-3xl border-2 border-neutral-700 bg-neutral-900 p-3 shadow-2xl">
        {/* Notch */}
        <div className="mx-auto mb-4 h-5 w-20 rounded-full bg-neutral-800" />

        {/* Screen content */}
        <div className="rounded-2xl bg-neutral-950 px-4 py-6">
          <div className="mb-4 text-center text-xs font-medium tracking-wider text-neutral-500 uppercase">
            PartWeb Voice AI
          </div>

          {/* Waveform */}
          <div className="mx-auto flex h-12 w-full items-center justify-center gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <WaveformBar key={i} index={i} />
            ))}
          </div>

          {/* Mic indicator */}
          <motion.div
            className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500"
            animate={{ boxShadow: ["0 0 0px rgba(249,115,22,0.3)", "0 0 30px rgba(249,115,22,0.6)", "0 0 0px rgba(249,115,22,0.3)"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5z" />
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
            </svg>
          </motion.div>

          <p className="mt-3 text-center text-xs text-neutral-500">Listening…</p>
        </div>

        {/* Home bar */}
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-neutral-700" />
      </div>
    </div>
  );
}

function SpeechBubble({ text, index, inView }: { text: string; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ delay: 0.3 + index * 0.4, duration: 0.5, ease: [0.25, 0.4, 0, 1] }}
      className="relative rounded-2xl rounded-bl-sm border border-neutral-700 bg-neutral-800 px-5 py-3.5 shadow-lg"
    >
      <p className="text-sm leading-relaxed text-neutral-200">&ldquo;{text}&rdquo;</p>
      <div className="absolute -bottom-1 left-3 h-3 w-3 rotate-45 border-b border-r border-neutral-700 bg-neutral-800" />
    </motion.div>
  );
}

function InventoryTable({ inView }: { inView: boolean }) {
  const [highlightedRow, setHighlightedRow] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        setHighlightedRow(current);
        current++;
        if (current >= inventoryRows.length) clearInterval(interval);
      }, 700);
      return () => clearInterval(interval);
    }, 1800);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="mt-8 w-full"
    >
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-orange-400">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        AI Output — Inventory Updated
      </div>
      <div className="overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-700 text-neutral-400">
              <th className="px-4 py-3 font-medium">Part</th>
              <th className="px-4 py-3 font-medium">Qty</th>
              <th className="px-4 py-3 font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            {inventoryRows.map((row, i) => (
              <motion.tr
                key={i}
                className="border-b border-neutral-800 last:border-0"
                animate={
                  highlightedRow >= i
                    ? { backgroundColor: ["rgba(249,115,22,0.15)", "rgba(249,115,22,0.05)"] }
                    : {}
                }
                transition={{ duration: 1 }}
              >
                <td className="px-4 py-3 text-neutral-200">{row.part}</td>
                <td className="px-4 py-3">
                  <span className={highlightedRow >= i ? "font-semibold text-orange-400" : "text-neutral-300"}>
                    {row.qty}
                  </span>
                </td>
                <td className="px-4 py-3 text-neutral-300">{row.price}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default function VoiceShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(249,115,22,0.04) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Just Speak.{" "}
          <span className="text-orange-500">Your Inventory Updates Itself.</span>
        </motion.h2>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <PhoneMockup />
          </motion.div>

          {/* Right — Commands + Table */}
          <div className="flex flex-col gap-5">
            <p className="mb-2 text-xs font-medium tracking-wider text-neutral-500 uppercase">
              Example Voice Commands
            </p>
            {voiceCommands.map((cmd, i) => (
              <SpeechBubble key={i} text={cmd} index={i} inView={inView} />
            ))}
            <InventoryTable inView={inView} />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mt-12 text-center text-sm italic text-gray-500"
        >
          Built for noisy aftermarket environments and mixed Hindi-English workflows.
        </motion.p>
      </div>
    </section>
  );
}
