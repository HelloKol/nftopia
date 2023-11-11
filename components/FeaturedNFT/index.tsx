"use client";
import React, { useState } from "react";
import ImageTag from "@/components/ImageTag";

export default function HeroSection({}: {}) {
  const [currentCategory, setCurrentCategory] = useState("All");
  const CATEGORIES = [
    `All`,
    `Game`,
    `3D Abstract`,
    `Virtual World`,
    `Pixel Art`,
    `Fashion`,
    `Character`,
    `Music`,
  ];
  const NFT = [
    { title: `Escape`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `3D Abstract`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Virtual World`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Pixel Art`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Fashion`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Character`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Music`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Character`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Virtual World`, imageUrl: `/static/images/hero-carousel.jpg` },
  ];

  const renderCategories = () =>
    CATEGORIES.map((item, index) => {
      const isActive = item === currentCategory;
      const className = isActive
        ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-gray-700 dark:border-gray-700"
        : "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";

      return (
        <button
          key={index}
          type="button"
          className={className}
          onClick={() => setCurrentCategory(item)}
        >
          {item}
        </button>
      );
    });

  const renderNftCards = () =>
    NFT.slice(0, 8).map((item, index) => {
      const { title, imageUrl } = item;

      return (
        <div
          key={index}
          className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3 mb-10"
        >
          <div className="w-full h-72 md:h-80 xl:h-96 overflow-hidden rounded-3xl">
            <ImageTag src={imageUrl} alt={title} />
          </div>
          <p className="text-2xl mt-2">{title}</p>
          <button className="text-sm text-gray-500">Buy now</button>
          <div className="w-full flex items-center justify-between">
            <p className="text-lg text-cyan-400">12.29 ETH</p>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 outline outline-4 outline-[#050405] rounded-full overflow-hidden">
                <ImageTag src="/static/images/hero-carousel.jpg" alt="" />
              </div>
              <div className="w-8 h-8 outline outline-4 outline-[#050405] z-[1] rounded-full overflow-hidden">
                <ImageTag src="/static/images/hero-carousel-2.jpg" alt="" />
              </div>
              <div className="w-8 h-8 outline outline-4 outline-[#050405] z-[2] rounded-full overflow-hidden">
                <ImageTag src="/static/images/hero-carousel.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <section className="mt-56">
      <div className="container mx-auto p-4 py-6 lg:py-8">
        <div className="grid grid-cols-12">
          <h2 className="col-span-12 text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured NFTs
          </h2>
          <div className="col-span-12 mt-6">{renderCategories()}</div>
          <div className="col-span-12 mt-10 grid grid-cols-12 sm:gap-4 md:gap-6">
            {renderNftCards()}
          </div>
        </div>
      </div>
    </section>
  );
}
