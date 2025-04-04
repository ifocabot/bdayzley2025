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
    <section className="min-h-screen py-20 relative overflow-hidden">
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
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800"
        >
          Cerita & Kenangan 📖
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-300/50" />

          {/* Timeline events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } gap-8`}
              >
                {/* Year circle */}
                <div className="w-24 h-24 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">
                  {event.year}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{event.emoji}</span>
                    <h3 className="text-2xl font-bold text-purple-700">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
