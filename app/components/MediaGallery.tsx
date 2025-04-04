"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const mediaItems = [
  {
    type: "image",
    src: "/img/album/2020sekolah.png",
    thumbnail: "/img/album/2020sekolah.png",
    title: "Sekolahhhh",
    description: "Kebersamaan dengan Teman-Teman",
    year: "2020",
  },
  {
    type: "image",
    src: "/img/album/2021ipan.png",
    thumbnail: "/img/album/2021ipan.png",
    title: "Unboxing Paket Pertama",
    description: "Hihi",
    year: "2021",
  },
  {
    type: "image",
    src: "/img/album/2021temen.jpg",
    thumbnail: "/img/album/2021temen.jpg",
    title: "Nongskiii",
    description: "Nongskiii malem-malem",
    year: "2021",
  },
  {
    type: "image",
    src: "/img/album/2022kerja.jpg",
    thumbnail: "/img/album/2022kerja.jpg",
    title: "Pertama kali kerja dan ngerantauu",
    description: "Seru, sedih, & senang campur-campur",
    year: "2022",
  },
  {
    type: "image",
    src: "/img/album/2023curug.jpg",
    thumbnail: "/img/album/2023curug.jpg",
    title: "Curug",
    description: "Mencari keindahan alam",
    year: "2023",
  },
  {
    type: "image",
    src: "/img/album/2023penang.jpg",
    thumbnail: "/img/album/2023penang.jpg",
    title: "First time ke luar negeri",
    description: "Penangggggggg bareng mamaa",
    year: "2023",
  },
  {
    type: "image",
    src: "/img/album/2023kuliah.jpg",
    thumbnail: "/img/album/2023kuliah.jpg",
    title: "Kuliah",
    description: "Kuliah, kuliah, kuliah",
    year: "2023",
  },
  {
    type: "image",
    src: "/img/album/2024jogja.jpg",
    thumbnail: "/img/album/2024jogja.jpg",
    title: "Yogyakarta",
    description: "Yogyakarta cintakuuuuu<3",
    year: "2023",
  },
  {
    type: "image",
    src: "/img/album/2024wisuda.jpg",
    thumbnail: "/img/album/2024wisuda.jpg",
    title: "S.Psi",
    description: "Sherly S.Psi nih bos",
    year: "2024",
  },
  {
    type: "image",
    src: "/img/album/2024bca.jpg",
    thumbnail: "/img/album/2024bca.jpg",
    title: "Take a step",
    description: "Iseng-iseng lamar ah",
    year: "2024",
  },
  {
    type: "image",
    src: "/img/album/2024bca2.jpg",
    thumbnail: "/img/album/2024bca2.jpg",
    title: "BCA SENTUL TERBAIK",
    description: "estetik kali ahhhh",
    year: "2024",
  },
  {
    type: "image",
    src: "/img/album/2025ghibli.jpg",
    thumbnail: "/img/album/2025ghibli.jpg",
    title: "Ghibli",
    description: "Ke cafe tema ghibli",
    year: "2025",
  },
  {
    type: "image",
    src: "/img/album/2025mbe.jpg",
    thumbnail: "/img/album/2025mbe.jpg",
    title: "Foto bareng mbe",
    description: "Jalan-jalan ke Cimoryy",
    year: "2025",
  },
  {
    type: "image",
    src: "/img/album/2025akuarium.jpg",
    thumbnail: "/img/album/2025akuarium.jpg",
    title: "Jakarta Aquarium",
    description: "Banyak ikannnnnn",
    year: "2025",
  },
  {
    type: "image",
    src: "/img/album/2025imlek.jpg",
    thumbnail: "/img/album/2025imlek.jpg",
    title: "Imlek 2025",
    description: "Kionghiiiiiii",
    year: "2025",
  },
  {
    type: "image",
    src: "/img/album/2025tamansafari.jpg",
    thumbnail: "/img/album/2025tamansafari.jpg",
    title: "Taman Safari",
    description: "suka suka suka banyak hewan lucuu",
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
    <section className="relative min-h-screen py-20 overflow-hidden">
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

      <div className="relative z-10 max-w-6xl px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 text-4xl font-bold text-center text-purple-800 md:text-5xl"
        >
          Yakali ga Throwback Foto-foto dulu 📸
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12 text-lg text-center text-purple-600"
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                className="overflow-hidden shadow-lg bg-white/80 backdrop-blur-sm rounded-xl"
              >
                <div
                  className="relative cursor-pointer aspect-video"
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
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/80">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-purple-600"
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
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-purple-700">
                      {item.title}
                    </h3>
                    <span className="px-2 py-1 text-sm text-purple-700 bg-purple-100 rounded-full">
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
