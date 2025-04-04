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
  { id: 1, src: "https://picsum.photos/600/900", title: "Momen Bahagia" },
  { id: 2, src: "https://picsum.photos/600/900", title: "Pesta Ulang Tahun" },
  { id: 3, src: "https://picsum.photos/600/900", title: "Kebersamaan" },
  { id: 4, src: "https://picsum.photos/600/900", title: "Pencapaian" },
  { id: 5, src: "https://picsum.photos/600/900", title: "Petualangan" },
  { id: 6, src: "https://picsum.photos/600/900", title: "Hari Spesial" },
  { id: 7, src: "https://picsum.photos/600/900", title: "Kenangan Indah" },
  { id: 8, src: "https://picsum.photos/600/900", title: "Momen Berharga" },
  { id: 9, src: "https://picsum.photos/600/900", title: "Kebahagiaan" },
  { id: 10, src: "https://picsum.photos/600/900", title: "Kesuksesan" },
  { id: 11, src: "https://picsum.photos/600/900", title: "Persahabatan" },
  { id: 12, src: "https://picsum.photos/600/900", title: "Keluarga" },
  { id: 13, src: "https://picsum.photos/600/900", title: "Cinta" },
  { id: 14, src: "https://picsum.photos/600/900", title: "Impian" },
  { id: 15, src: "https://picsum.photos/600/900", title: "Harapan" },
  { id: 16, src: "https://picsum.photos/600/900", title: "Kebersamaan" },
  { id: 17, src: "https://picsum.photos/600/900", title: "Kebahagiaan" },
  { id: 18, src: "https://picsum.photos/600/900", title: "Kesuksesan" },
  { id: 19, src: "https://picsum.photos/600/900", title: "Persahabatan" },
  { id: 20, src: "https://picsum.photos/600/900", title: "Keluarga" },
];

export default function PhotoCarousel() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-gradient-to-b from-purple-50 to-white"
    >
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
        <h2 className="text-5xl font-black uppercase text-white drop-shadow-lg">
          {photo.title}
        </h2>
      </div>
    </div>
  );
};
