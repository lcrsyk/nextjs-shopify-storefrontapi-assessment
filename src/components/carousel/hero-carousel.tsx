"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CustomNavigation from "./custom-navigation";
import Button from "../button";
import { FaAngleRight } from "react-icons/fa6";

import { Product } from "@/lib/shopify/types";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

type HeroCarouselProps = {
  items: Product[];
};

export default function HeroCarousel({ items }: HeroCarouselProps) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <Swiper
      className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl"
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
      modules={[Navigation]}
      onSlideChange={(swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
    >
      {items.map((product) => (
        <SwiperSlide key={product.id} className="!flex flex-col-reverse  md:!flex-row p-8 md:p-0 items-center gap-10 md:gap-16 lg:gap-48 h-auto">
          <div className="flex flex-col items-center gap-6 md:gap-2 lg:gap-5 pb-12 md:w-3/5 lg:w-3/5">
            <h2 className="w-full text-xl lg:text-2xl text-primary leading-none">{product.title}</h2>
            <p className="text-primary leading-normal hidden md:block">{product.description}</p>
            <div className="flex flex-col w-[250px] md:w-full lg:flex-row gap-5 lg:gap-5">
              <Button as="a" href={`/products/${product.handle}`} variant="primary" className="w-auto flex gap-6 items-center justify-center md:justify-start text-sm font-bold uppercase pl-8 pr-8 lg:pr-0  py-5 rounded-[10px] lg:w-full lg:pr-3s">
                <span>
                  Shop Now
                </span>
                <FaAngleRight />
              </Button>
              <Button as="a" href={`#`} className="flex gap-6 items-center justify-center md:justify-start text-sm font-bold uppercase pl-8 pr-8 lg:pr-0 py-5 rounded-[10px] border-0 text-black md:border-[1.5px] md:border-primary md:hover:bg-primary md:text-primary md:hover:text-white w-full md:pr-2s lg:pr-3s">
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
            className="md:w-2/4 lg:w-2/5 rounded-md"
          />
        </SwiperSlide>
      ))}
      <CustomNavigation className="flex justify-center md:absolute md:bottom-0 lg:bottom-0" isBeginning={isBeginning} isEnd={isEnd} />
    </Swiper>
  );
}
