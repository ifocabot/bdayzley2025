"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2000",
    title: "Awal Perjalanan",
    description: "Lahir ke dunia dengan penuh kebahagiaan dan harapan.",
    emoji: "👶",
  },
  {
    year: "2005",
    title: "Masa Kecil yang Ceria",
    description:
      "Bermain dengan teman-teman dan belajar hal-hal baru setiap hari.",
    emoji: "🎮",
  },
  {
    year: "2010",
    title: "Pertumbuhan dan Perkembangan",
    description: "Mulai sekolah dasar dan menemukan passion dalam hidup.",
    emoji: "📚",
  },
  {
    year: "2015",
    title: "Masa Remaja",
    description:
      "Mengalami berbagai pengalaman berharga dan membentuk karakter.",
    emoji: "🌟",
  },
  {
    year: "2020",
    title: "Pencapaian dan Tantangan",
    description:
      "Menghadapi berbagai tantangan dan meraih pencapaian yang membanggakan.",
    emoji: "🏆",
  },
  {
    year: "2025",
    title: "Hari Ini",
    description:
      "Merayakan ulang tahun dengan penuh syukur dan harapan untuk masa depan.",
    emoji: "🎂",
  },
];

export default function Story() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgb(237, 233, 254), rgb(243, 232, 255), rgb(245, 243, 255))",
            "linear-gradient(to bottom right, rgb(243, 232, 255), rgb(237, 233, 254), rgb(245, 243, 255))",
            "linear-gradient(to bottom right, rgb(245, 243, 255), rgb(243, 232, 255), rgb(237, 233, 254))",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isClient &&
          [...Array(10)].map((_, i) => (
            <motion.div
              key={`bg-circle-${i}`}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-4xl font-bold text-center text-purple-800 md:text-5xl"
        >
          Cerita & Kenangan 📖
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute w-1 h-full transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-violet-300/50 via-purple-300/50 to-fuchsia-300/50"
          />

          {/* Timeline events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } gap-8`}
              >
                {/* Year circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="z-10 flex items-center justify-center w-24 h-24 text-xl font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-violet-500 to-fuchsia-500"
                >
                  {event.year}
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 max-w-md p-6 shadow-lg bg-white/80 backdrop-blur-sm rounded-xl"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-3"
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className="text-3xl"
                    >
                      {event.emoji}
                    </motion.span>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                      {event.title}
                    </h3>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-700"
                  >
                    {event.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
