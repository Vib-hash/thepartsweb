"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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

function GlowOrb({
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
        filter: `blur(${size * 0.7}px)`,
        opacity: 0.08,
      }}
      animate={{
        y: [0, -30, 0, 20, 0],
        x: [0, 15, -10, 12, 0],
        scale: [1, 1.08, 0.94, 1.04, 1],
      }}
      transition={{
        duration: 14 + delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32 md:py-44"
      style={{
        background:
          "linear-gradient(to bottom, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)",
      }}
    >
      <GlowOrb size={350} x="5%" y="20%" delay={0} />
      <GlowOrb size={280} x="75%" y="10%" delay={2} />
      <GlowOrb size={220} x="60%" y="65%" delay={3.5} />
      <GlowOrb size={300} x="20%" y="70%" delay={1.5} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          India&apos;s Automotive Procurement Layer Is Coming Online.
        </motion.h2>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
        >
          Join the next generation of workshops and spare parts vendors building
          faster automotive operations.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(249,115,22,0.45)",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-block cursor-pointer rounded-full bg-orange-500 px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Request Early Access
          </motion.a>

          <motion.a
            href="#"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(249,115,22,1)",
              color: "#fff",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-block cursor-pointer rounded-full border border-orange-500 bg-transparent px-10 py-4 text-base font-semibold text-orange-500 transition-colors"
          >
            Become a Vendor Partner
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
