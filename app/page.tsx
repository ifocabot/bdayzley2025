"use client";

import React from "react";
import Hero from "./components/Hero";
import Story from "./components/Story";
import MediaGallery from "./components/MediaGallery";
import Wishes from "./components/Wishes";
import Prayers from "./components/Prayers";
import PhotoCarousel from "./components/PhotoCarousel";
import Cake from "./components/Gift";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Story />
      <PhotoCarousel />
      <MediaGallery />
      <Wishes />
      <Prayers />
      <Cake />
      <Footer />
    </main>
  );
}
