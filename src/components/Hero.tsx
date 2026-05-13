"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.4, 0, 1] as [number, number, number, number],
    },
  }),
};

function FloatingOrb({
  size,
  x,
  y,
  delay,
}: {
  size: number;
  x: string;
  y: string;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-orange-500 pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        filter: `blur(${size * 0.6}px)`,
        opacity: 0.12,
      }}
      animate={{
        y: [0, -40, 0, 30, 0],
        x: [0, 20, -10, 15, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration: 12 + delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function NetworkLines() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      style={{ opacity: 0.06 }}
    >
      <motion.line
        x1="0%"
        y1="30%"
        x2="100%"
        y2="30%"
        stroke="#f97316"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
      />
      <motion.line
        x1="0%"
        y1="60%"
        x2="100%"
        y2="55%"
        stroke="#f97316"
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3.5, delay: 1, ease: "easeInOut" }}
      />
      <motion.line
        x1="10%"
        y1="80%"
        x2="90%"
        y2="78%"
        stroke="#f97316"
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
      />
      <motion.line
        x1="20%"
        y1="0%"
        x2="25%"
        y2="100%"
        stroke="#f97316"
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 4, delay: 0.8, ease: "easeInOut" }}
      />
      <motion.line
        x1="75%"
        y1="0%"
        x2="70%"
        y2="100%"
        stroke="#f97316"
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 4, delay: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(249,115,22,0.06) 0%, transparent 60%)",
        }}
      />

      <NetworkLines />

      {/* Floating orbs */}
      <FloatingOrb size={400} x="10%" y="15%" delay={0} />
      <FloatingOrb size={300} x="70%" y="60%" delay={2} />
      <FloatingOrb size={200} x="50%" y="10%" delay={4} />
      <FloatingOrb size={250} x="85%" y="20%" delay={1} />
      <FloatingOrb size={350} x="25%" y="70%" delay={3} />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-1.5 text-sm text-orange-400 backdrop-blur-sm"
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
          className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl"
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
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
        >
          PartWeb helps workshops instantly find spare parts from verified
          vendors while enabling vendors to manage inventory through AI-powered
          voice workflows.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249,115,22,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-600"
          >
            I&apos;m a Workshop
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(249,115,22,1)", color: "#fff" }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer rounded-full border border-orange-500 bg-transparent px-8 py-4 text-base font-semibold text-orange-500 transition-colors"
          >
            I&apos;m a Vendor
          </motion.button>
        </motion.div>

        {/* Marquee */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12 overflow-hidden"
        >
          <div className="flex w-max animate-marquee gap-12 text-sm text-gray-500">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-2 whitespace-nowrap">
                <span className="h-1 w-1 rounded-full bg-orange-500/50" />
                Built for real aftermarket businesses.
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
