import React from "react";
import ImageTag from "@/components/ImageTag";

export default function Newsletter({}: {}) {
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
    <section className="mt-56 mb-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <h2 className="col-span-12 text-white text-6xl text-center font-bold">
            Subscribe To Get Latest Update
          </h2>
          <p className="col-span-12 text-center text-gray-500">
            Make financial transactions remotely using a mobile phone
          </p>
          <div className="col-start-5 col-end-9 flex items-center gap-4">
            <input
              type="text"
              id="first_name"
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:focus:ring-gray-700 dark:border-gray-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
