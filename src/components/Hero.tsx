"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.13,
      duration: 0.6,
      ease: [0.25, 0.4, 0, 1] as [number, number, number, number],
    },
  }),
};

const mockupSlide = {
  hidden: (dir: "left" | "bottom") => ({
    opacity: 0,
    x: dir === "left" ? -40 : 0,
    y: dir === "bottom" ? 40 : 0,
  }),
  visible: (dir: "left" | "bottom") => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.4, 0, 1] as [number, number, number, number] },
  }),
};

function Mockups({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className ?? ""}`}>
      {/* Orange glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex items-center justify-center">
        {/* First mockup — tilted left */}
        <motion.div
          variants={mockupSlide}
          initial="hidden"
          animate="visible"
          custom="left"
          className="relative z-10 -mr-6 rotate-[-5deg]"
        >
          <Image
            src="/mockups/top1.png"
            alt="PartWeb workshop app mockup"
            width={220}
            height={450}
            unoptimized
            className="rounded-2xl shadow-2xl w-40 sm:w-48 md:w-52 lg:w-56 h-auto"
          />
        </motion.div>

        {/* Second mockup — tilted right, overlapping */}
        <motion.div
          variants={mockupSlide}
          initial="hidden"
          animate="visible"
          custom="left"
          transition={{ delay: 0.18 }}
          className="relative z-20 -ml-6 rotate-[5deg]"
        >
          <Image
            src="/mockups/top2.png"
            alt="PartWeb vendor app mockup"
            width={220}
            height={450}
            unoptimized
            className="rounded-2xl shadow-2xl w-40 sm:w-48 md:w-52 lg:w-56 h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle top orange gradient wash */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Light dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Split layout container ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-16 flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-14">
        {/* ── LEFT: Mockups (desktop) ── */}
        <div className="hidden md:flex w-[45%] shrink-0 items-center justify-center">
          <Mockups />
        </div>

        {/* ── RIGHT: Text + CTAs ── */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-50 px-4 py-1.5 text-sm text-orange-600"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            Real-Time Automotive Procurement
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900"
          >
            India&apos;s Real-Time{" "}
            <span className="text-orange-500">Spare Parts</span> Network.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-gray-600 mx-auto md:mx-0"
          >
            PartWeb helps workshops instantly find spare parts from verified
            vendors while enabling vendors to increase their reach and manage
            inventory through AI-powered voice workflows.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col items-center md:items-start gap-4 sm:flex-row sm:justify-center md:justify-start"
          >
            <motion.a
              href="#workshops"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-orange-500 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-orange-600"
            >
              I&apos;m a Workshop
            </motion.a>

            <motion.a
              href="#vendors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-orange-500 bg-white px-8 py-3.5 text-base font-semibold text-orange-500 transition-colors hover:bg-orange-50"
            >
              I&apos;m a Vendor
            </motion.a>
          </motion.div>

          {/* Marquee */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 overflow-hidden"
          >
            <div className="flex w-max animate-marquee gap-12 text-sm text-gray-400">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <span className="h-1 w-1 rounded-full bg-orange-500/40" />
                  Built for real aftermarket businesses.
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── MOBILE: Mockups below text ── */}
        <div className="flex md:hidden w-full items-center justify-center">
          <Mockups className="scale-90" />
        </div>
      </div>
    </section>
  );
}
