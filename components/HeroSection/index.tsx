import React from "react";
import ImageTag from "@/components/ImageTag";

export default function HeroSection({}: {}) {
  return (
    <section className="">
      <div className="relative h-screen bg-black">
        <div className="w-full h-full  opacity-60">
          <ImageTag
            src={"/static/images/hero-carousel-3.jpg"}
            alt={"hero section image"}
            objectFit={"cover"}
            quality={100}
            priority={true}
          />
        </div>
        <div className="container mx-auto absolute flex items-center justify-center inset-0 z-10">
          <div className="grid grid-cols-12">
            <p className="col-span-12 text-cyan-400 text-center text-sm font-bold">
              The NFT marketplace with everything you need
            </p>

            <h1 className="hero-title mt-4 col-span-12 lg:col-start-3 lg:col-end-11 2xl:col-start-3 2xl:col-end-11 text-white text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl text-center font-bold">
              Biggest Collection of NFTs Online
            </h1>

            <p className="col-span-12 mt-6 sm:mt-4 text-gray-400 text-center text-lg font-bold">
              +40.000 amazing NFTs from the most popular artists right now
            </p>

            <div className="col-span-12 mt-10 sm:mt-8 2xl:mt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-4 2xl:px-6 2xl:py-4 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Export Sea of NFTs
              </button>

              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-4 2xl:px-6 2xl:py-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Join our Waiting List
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
