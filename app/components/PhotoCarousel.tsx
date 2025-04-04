"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

interface Photo {
  id: number;
  src: string;
  title: string;
}

const photos: Photo[] = [
  { id: 1, src: "/img/1.jpg", title: "Momen Bahagia" },
  { id: 2, src: "/img/2.jpg", title: "Pesta Ulang Tahun" },
  { id: 3, src: "/img/3.jpg", title: "Kebersamaan" },
  { id: 4, src: "/img/4.jpg", title: "Pencapaian" },
  { id: 5, src: "/img/5.jpg", title: "Petualangan" },
  { id: 6, src: "/img/6.jpg", title: "Hari Spesial" },
  { id: 7, src: "/img/7.jpg", title: "Kenangan Indah" },
  { id: 8, src: "/img/8.jpg", title: "Momen Berharga" },
  { id: 9, src: "/img/9.jpg", title: "Kebahagiaan" },
  { id: 10, src: "/img/10.jpg", title: "Kesuksesan" },
  { id: 11, src: "/img/11.jpg", title: "Persahabatan" },
  { id: 12, src: "/img/12.jpg", title: "Keluarga" },
  { id: 13, src: "/img/13.jpg", title: "Cinta" },
  { id: 14, src: "/img/14.jpg", title: "Impian" },
  { id: 15, src: "/img/15.jpg", title: "Harapan" },
  { id: 16, src: "/img/16.jpg", title: "Kebersamaan" },
  { id: 17, src: "/img/17.jpg", title: "Kebahagiaan" },
  { id: 18, src: "/img/18.jpg", title: "Kesuksesan" },
  { id: 19, src: "/img/19.jpg", title: "Persahabatan" },
  { id: 20, src: "/img/20.jpg", title: "Keluarga" },
];

export default function PhotoCarousel() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["41.5%", "-41.5%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "#8b5cf6" : "#d946ef",
              opacity: 0.1,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="sticky top-0 flex h-[900px] items-center justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {photos.map((photo) => (
            <PhotoItem photo={photo} key={photo.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const PhotoItem = ({ photo }: { photo: Photo }) => {
  return (
    <div className="relative h-[900px] w-[600px] overflow-hidden">
      <Image
        src={photo.src}
        alt={photo.title}
        fill
        className="object-cover"
        sizes="600px"
        priority
        unoptimized
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-black/30 to-transparent">
        <h2 className="text-5xl font-black text-white uppercase drop-shadow-lg"></h2>
      </div>
    </div>
  );
};
