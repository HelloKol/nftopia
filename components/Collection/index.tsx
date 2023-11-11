"use client";
import React from "react";
import Link from "next/link";
import Swiper from "react-id-swiper";
import ImageTag from "@/components/ImageTag";

export default function Collection({}: {}) {
  const NFT = [
    {
      title: `Escape`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit eligendi magni`,
      imageUrl: `/static/images/hero-carousel.jpg`,
    },
    {
      title: `Fashion`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit eligendi magni`,
      imageUrl: `/static/images/hero-carousel-2.jpg`,
    },
    {
      title: `Virtual World`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit eligendi magni`,
      imageUrl: `/static/images/hero-carousel.jpg`,
    },
    {
      title: `Pixel Art`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit eligendi magni`,
      imageUrl: `/static/images/hero-carousel.jpg`,
    },
    {
      title: `Fashion`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit eligendi magni`,
      imageUrl: `/static/images/hero-carousel-2.jpg`,
    },
    {
      title: `Character`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit eligendi magni`,
      imageUrl: `/static/images/hero-carousel.jpg`,
    },
    {
      title: `Music`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit eligendi magni`,
      imageUrl: `/static/images/hero-carousel-2.jpg`,
    },
  ];
  const params = {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const renderCollection = () =>
    NFT.slice(0, 8).map((item, index) => {
      const { title, description, imageUrl } = item;

      return (
        <div
          key={index}
          className="relative h-[600px] overflow-hidden rounded-xl shadow-inner"
        >
          <ImageTag src={imageUrl} alt={title} />
          <div className="absolute bottom-4 px-10 text-center z-10">
            <p className="text-4xl">{title}</p>
            <article className="mt-4 mb-8">
              <p>{description}</p>
            </article>
            <Link
              href={"/"}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Read more
            </Link>
          </div>

          <div
            className="absolute bottom-0 h-full w-full"
            style={{
              background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.0) 70%)`,
            }}
          />
        </div>
      );
    });

  return (
    <section className="mt-56">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <h2 className="col-span-12 text-white text-6xl font-bold">
            Discover Top Items
          </h2>
          <div className="col-span-12">
            <Swiper {...params}>{renderCollection()}</Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
