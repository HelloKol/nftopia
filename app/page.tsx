"use client";
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedNFT from "@/components/FeaturedNFT";
import Creators from "@/components/Creators";
import Collection from "@/components/Collection";
import TopCategories from "@/components/TopCategories";
import Newsletter from "@/components/Newsletter";

export default function Home(): JSX.Element {
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      document.body.classList.add("show-scrollbar");
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove("show-scrollbar");
      }, 1000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedNFT />
      <Creators />
      {/*  <Collection />
      <TopCategories />
      <Newsletter /> */}
    </main>
  );
}
