"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const mediaItems = [
  {
    type: "image",
    src: "/birthday1.jpg",
    thumbnail: "/birthday1.jpg",
    title: "Momen Bahagia",
    description: "Kebersamaan dengan keluarga tercinta",
    year: "2020",
  },
  {
    type: "image",
    src: "/birthday2.jpg",
    thumbnail: "/birthday2.jpg",
    title: "Pesta Ulang Tahun",
    description: "Merayakan bersama teman-teman",
    year: "2021",
  },
  {
    type: "image",
    src: "/birthday3.jpg",
    thumbnail: "/birthday3.jpg",
    title: "Kebersamaan",
    description: "Momen indah yang tak terlupakan",
    year: "2022",
  },
  {
    type: "image",
    src: "/birthday4.jpg",
    thumbnail: "/birthday4.jpg",
    title: "Pencapaian",
    description: "Meraih mimpi dan cita-cita",
    year: "2023",
  },
  {
    type: "image",
    src: "/birthday5.jpg",
    thumbnail: "/birthday5.jpg",
    title: "Petualangan",
    description: "Menjelajahi tempat-tempat baru",
    year: "2024",
  },
  {
    type: "image",
    src: "/birthday6.jpg",
    thumbnail: "/birthday6.jpg",
    title: "Hari Spesial",
    description: "Merayakan momen berharga",
    year: "2025",
  },
];

export default function MediaGallery() {
  const [index, setIndex] = useState(-1);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const slides = mediaItems
    .filter((item) => activeFilter === "all" || item.type === activeFilter)
    .map((item) => ({ src: item.src }));

  const years = Array.from(new Set(mediaItems.map((item) => item.year)));

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isClient &&
          [...Array(15)].map((_, i) => (
            <motion.div
              key={`bg-star-${i}`}
              className="absolute text-yellow-400"
              style={{
                fontSize: Math.random() * 20 + 10,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              ✨
            </motion.div>
          ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-purple-800"
        >
          Album Foto & Video 📸
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg text-purple-600 mb-12 max-w-2xl mx-auto"
        >
          Kenangan indah yang telah kita lewati bersama. Setiap foto dan video
          menyimpan cerita yang tak terlupakan.
        </motion.p>

        {/* Year filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full ${
              activeFilter === "all"
                ? "bg-purple-600 text-white"
                : "bg-white/80 text-purple-700 hover:bg-purple-100"
            } transition-colors`}
          >
            Semua
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveFilter(year)}
              className={`px-4 py-2 rounded-full ${
                activeFilter === year
                  ? "bg-purple-600 text-white"
                  : "bg-white/80 text-purple-700 hover:bg-purple-100"
              } transition-colors`}
            >
              {year}
            </button>
          ))}
        </motion.div>

        {/* Media grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems
            .filter(
              (item) => activeFilter === "all" || item.year === activeFilter
            )
            .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
              >
                <div
                  className="relative aspect-video cursor-pointer"
                  onClick={() => setIndex(index)}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-purple-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-purple-700">
                      {item.title}
                    </h3>
                    <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
        </div>

        {isClient && (
          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        )}
      </div>
    </section>
  );
}
