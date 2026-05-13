"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FORM_URL = "https://forms.gle/Xu89Yx1pPpwfCtAk8";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.4, 0, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 text-center">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-50 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-orange-600"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
          </span>
          Real-Time Automotive Procurement
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-gray-900"
        >
          India&apos;s Real-Time{" "}
          <span className="text-orange-500">Spare Parts</span> Network.
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-600"
        >
          PartWeb helps workshops instantly find spare parts from verified
          vendors while enabling vendors to increase their reach and manage
          inventory through AI-powered voice workflows.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-7 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row"
        >
          <motion.a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto rounded-full bg-orange-500 px-7 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-orange-600 text-center"
          >
            I&apos;m a Workshop
          </motion.a>

          <motion.a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto rounded-full border border-orange-500 bg-white px-7 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-orange-500 transition-colors hover:bg-orange-50 text-center"
          >
            I&apos;m a Vendor
          </motion.a>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative mt-12 sm:mt-16 flex items-center justify-center"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
              className="relative z-10 -mr-4 sm:-mr-6 rotate-[-4deg]"
            >
              <Image
                src="/mockups/top1.png"
                alt="PartWeb workshop app"
                width={260}
                height={520}
                unoptimized
                className="w-36 sm:w-48 md:w-56 lg:w-64 h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
              className="relative z-20 -ml-4 sm:-ml-6 rotate-[4deg]"
            >
              <Image
                src="/mockups/top2.png"
                alt="PartWeb vendor app"
                width={260}
                height={520}
                unoptimized
                className="w-36 sm:w-48 md:w-56 lg:w-64 h-auto"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 sm:mt-16 overflow-hidden"
        >
          <div className="flex w-max animate-marquee gap-8 sm:gap-12 text-xs sm:text-sm text-gray-400">
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
    </section>
  );
}
