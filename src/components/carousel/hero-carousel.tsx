"use client";

import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import CustomNavigation from "./custom-navigation";
import Button from "../button";
import { FaAngleRight } from "react-icons/fa6";

import { Product } from "@/lib/shopify/types";
import "swiper/css";
import "swiper/css/navigation";

type HeroCarouselProps = {
  items: Product[];
};

export default function HeroCarousel({ items }: HeroCarouselProps) {
  return (
    <Swiper
      className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl"
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
      modules={[Navigation]}
    >
      {items.map((product) => (
        <SwiperSlide key={product.id} className="!flex flex-col-reverse  md:!flex-row p-8 md:p-0 items-center gap-10 md:gap-16 lg:gap-48 h-auto">
          <div className="flex flex-col items-center gap-6 lg:gap-5 pb-12 md:min-w-3/5 lg:w-3/5">
            <h2 className="text-xl lg:text-2xl text-primary leading-none">{product.title}</h2>
            <p className="text-primary leading-normal hidden md:block">{product.description}</p>
            <div className="flex flex-col w-[250px] md:w-full lg:flex-row gap-5 lg:gap-5">
              <Button as="a" href={`/products/${product.handle}`} variant="primary" className="w-auto md:w-2/3 flex gap-6 items-center text-sm font-bold uppercase pl-8 pr-16 py-5 rounded-[10px] lg:w-full lg:pr-3s">
                <span>
                  Shop Now
                </span>
                <FaAngleRight />
              </Button>
              <Button as="a" href={`#`} variant="bordered" className="flex gap-6 justify-center items-center text-sm font-bold uppercase pl-8 pr-16 py-5 rounded-[10px] border-0 text-black md:border-[1.5px] md:border-primary md:hover:bg-primary md:text-primary md:hover:text-white md:w-2/3 lg:w-full lg:pr-3">
                <span>
                  Take the quiz
                </span>
                <FaAngleRight className="md:block hidden"/>
              </Button>
            </div>
          </div>
          <Image
            src={product.featuredImage?.url || product.images[0]?.url}
            alt={product.featuredImage?.altText}
            width={product.featuredImage?.width}
            height={product.featuredImage?.height}
            className="md:w-1/4 lg:w-2/5 rounded-md"
          />
        </SwiperSlide>
      ))}
      <CustomNavigation className="flex justify-center md:absolute md:bottom-2 lg:bottom-10"/>
    </Swiper>
  );
}
