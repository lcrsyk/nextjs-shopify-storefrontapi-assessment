"use client";
import { useState, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CustomNavigation from "../carousel/custom-navigation";
import ProductCard from "../product/product-card";
import { Product } from "@/lib/shopify/types";

type ProductGridCarouselProps = {
  rows: number;
  cols: number;
  products: Product[];
};

export default function ProductGridCarousel({
  rows,
  cols,
  products,
}: ProductGridCarouselProps) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const slideCount = Math.ceil(products.length / (rows * cols));
  return (
    <Swiper
      className="max-w-7xl"
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
      modules={[Navigation]}
      onSlideChange={(swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
    >
      {Array(slideCount).fill(null).map((slide, index) => {
        return (
          <SwiperSlide key={index} className="!grid grid-cols-2 grid-rows-4 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-x-5 gap-y-12 items-center h-auto px-4 md:px-16 xl:px-32 py-2">
            {products
              .slice(index * rows * cols, (index + 1) * rows * cols)
              .map((product) => {
                return <Suspense fallback={null}><ProductCard key={product.id} product={product} /></Suspense>;
              })}
          </SwiperSlide>
        );
      })}
      <CustomNavigation className="relative justify-center mt-20 mb-96" isBeginning={isBeginning} isEnd={isEnd}/>
    </Swiper>
  );
}
