import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/birthday1.jpg",
  "/birthday2.jpg",
  "/birthday3.jpg",
  "/birthday4.jpg",
  "/birthday5.jpg",
  "/birthday6.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const slides = images.map((src) => ({ src }));

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-800"
        >
          Kenangan Indah 📸
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setIndex(index)}
            >
              <Image
                src={src}
                alt={`Birthday photo ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </section>
  );
}
