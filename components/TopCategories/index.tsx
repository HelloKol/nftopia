import React from "react";
import ImageTag from "@/components/ImageTag";

export default function TopCategories({}: {}) {
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
    { title: `Escape`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `3D Abstract`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Virtual World`, imageUrl: `/static/images/hero-carousel-2.jpg` },
    { title: `Pixel Art`, imageUrl: `/static/images/hero-carousel.jpg` },
    { title: `Fashion`, imageUrl: `/static/images/hero-carousel-2.jpg` },
  ];

  const renderTopCategories = () =>
    NFT.slice(0, 12).map((item, index) => {
      const { title, imageUrl } = item;
      const withBorder = index < 8;

      return (
        <div
          key={index}
          className={`col-span-3 py-8 flex items-center gap-4 ${
            withBorder ? "border-b-[2px] border-b-gray-800" : ""
          } select-none`}
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
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <h2 className="col-span-12 text-white text-6xl font-bold">
            Our Top Categories
          </h2>
          <div className="grid grid-cols-12 gap-x-8 col-span-12">
            {renderTopCategories()}
          </div>
        </div>
      </div>
    </section>
  );
}
