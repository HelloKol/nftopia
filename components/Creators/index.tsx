"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import ImageTag from "@/components/ImageTag";

export default function Creators({}: {}) {
  const NFT = [
    { title: `Escape`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `3D Abstract`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Virtual World`, imageUrl: `/static/images/hero-carousel-2.jpg` },
    { title: `Pixel Art`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Fashion`, imageUrl: `/static/images/hero-carousel-2.jpg` },
    { title: `Character`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Music`, imageUrl: `/static/images/hero-carousel-2.jpg` },
    { title: `Character`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Virtual World`, imageUrl: `/static/images/hero-carousel-2.jpg` },
  ];

  const renderNftCards = () =>
    NFT.slice(0, 8).map((item, index) => {
      const { title, imageUrl } = item;

      return (
        <div
          key={index}
          className="px-4 py-2 flex items-center gap-4 border border-gray-700 rounded-full"
        >
          <div className="w-8 h-8 overflow-hidden rounded-full">
            <ImageTag src={imageUrl} alt={title} />
          </div>
          <p className="text-md">{title}</p>
        </div>
      );
    });

  return (
    <section className="mt-56">
      <div className="container mx-auto  p-4 py-6 lg:py-8">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          Our Trending Creators
        </h2>
      </div>

      <div className="container mx-auto">
        <Marquee className="" autoFill={true} pauseOnHover={true} speed={15}>
          <div className="flex gap-6">{renderNftCards()}</div>
        </Marquee>
        <Marquee
          className="mt-4"
          direction="right"
          autoFill={true}
          pauseOnHover={true}
          speed={15}
        >
          <div className="flex gap-6">{renderNftCards()}</div>
        </Marquee>
        <Marquee
          className="mt-4"
          autoFill={true}
          pauseOnHover={true}
          speed={15}
        >
          <div className="flex gap-6">{renderNftCards()}</div>
        </Marquee>
      </div>
    </section>
  );
}
