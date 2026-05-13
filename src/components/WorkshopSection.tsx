"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Live Procurement Requests",
    description:
      "Raise requests with VIN, photos, category and part details.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 3v1" />
        <path d="M12 20v1" />
        <path d="M3 12h1" />
        <path d="M20 12h1" />
      </svg>
    ),
  },
  {
    title: "Real-Time Vendor Responses",
    description: "Compare pricing, availability and ETA instantly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Smart Vendor Matching",
    description:
      "AI intelligently routes requests only to relevant vendors.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0 1.32 4.24 2.5 2.5 0 0 0 3.62 2.2 2.5 2.5 0 0 0 4-1.56V12" />
        <path d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1-1.32 4.24 2.5 2.5 0 0 1-3.62 2.2 2.5 2.5 0 0 1-4-1.56V12" />
        <path d="M15.7 14.4L12 12V4.5" />
      </svg>
    ),
  },
  {
    title: "Delivery or Pickup",
    description:
      "Choose delivery partner integration or direct store pickup.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.684-.949V6a1 1 0 0 1 1-1h1.382a1 1 0 0 1 .894.553l1.448 2.894A1 1 0 0 0 19.882 9H21a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: "Designed for Daily Operations",
    description:
      "Fast workflows built for real workshop environments.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WorkshopSection() {
  return (
    <section id="workshops" className="relative bg-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Visual Classifier Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-orange-500 rounded-full shadow-lg shadow-orange-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <span className="text-white font-bold text-sm tracking-wider uppercase">
              For Workshops
            </span>
          </div>
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Stop Calling 20 Vendors for One Part.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Raise a request once and receive live responses from relevant spare
            parts vendors in minutes.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="max-w-sm w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                         group relative bg-white border border-gray-200 rounded-xl p-6
                         border-l-4 border-l-orange-500 shadow-sm
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* App Mockup Showcase */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center gap-6 sm:gap-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative -rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <div className="rounded-[2rem] bg-gray-900 p-2 shadow-2xl">
                <div className="rounded-[1.5rem] overflow-hidden bg-white">
                  <Image
                    src="/mockups/workshop-requests.png"
                    alt="Your Requests screen"
                    width={240}
                    height={480}
                    unoptimized
                    className="w-48 sm:w-56 md:w-64 h-auto"
                  />
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Your Requests
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <div className="rounded-[2rem] bg-gray-900 p-2 shadow-2xl">
                <div className="rounded-[1.5rem] overflow-hidden bg-white">
                  <Image
                    src="/mockups/workshop-request-details.png"
                    alt="Request Details screen"
                    width={240}
                    height={480}
                    unoptimized
                    className="w-48 sm:w-56 md:w-64 h-auto"
                  />
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Request Details
              </p>
            </motion.div>
          </motion.div>

          {/* Orange glow behind mockups */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <div className="w-96 h-96 rounded-full bg-orange-400/10 blur-3xl" />
          </div>
        </div>

        {/* CTA Sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Find Parts Faster. Reduce Vehicle Downtime.
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#join-workshop"
              className="px-8 py-3.5 bg-orange-500 text-white font-semibold rounded-full
                         hover:bg-orange-600 transition-colors duration-200
                         shadow-lg shadow-orange-500/25"
            >
              Join as Workshop
            </a>
            <a
              href="#watch-demo"
              className="px-8 py-3.5 border-2 border-orange-500 text-orange-500 font-semibold rounded-full
                         hover:bg-orange-50 transition-colors duration-200"
            >
              Watch Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
