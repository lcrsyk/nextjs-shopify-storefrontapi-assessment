"use client";

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
      className="max-w-7xl"
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
      modules={[Navigation]}
    >
      {items.map((product) => (
        <SwiperSlide key={product.id} className="!flex items-center gap-56 h-auto">
          <div className="flex flex-col gap-5 pb-12 lg:w-3/5">
            <h2 className="text-2xl text-primary leading-none">{product.title}</h2>
            <p className="text-primary leading-normal">{product.description}</p>
            <div className="flex gap-5">
              <Button as="a" href={`/products/${product.handle}`} variant="primary" className="flex gap-6 items-center text-sm font-bold uppercase pl-8 pr-16 py-5 rounded-[10px]">
                <span>
                  Shop Now
                </span>
                <FaAngleRight />
              </Button>
              <Button as="a" href={`#`} variant="bordered" className="flex gap-6 items-center text-sm font-bold uppercase pl-8 pr-16 py-5 rounded-[10px]">
                <span>
                  Take the quiz
                </span>
                <FaAngleRight />
              </Button>
            </div>
          </div>
          <img
            src={product.featuredImage?.url || product.images[0]?.url}
            alt={product.featuredImage?.altText}
            className="lg:w-2/5 rounded-md"
          />
        </SwiperSlide>
      ))}
      <CustomNavigation className="absolute lg:bottom-10"/>
    </Swiper>
  );
}
