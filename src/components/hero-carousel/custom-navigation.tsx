import { useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../button";

export default function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <div className="flex gap-5 absolute lg:bottom-10 z-50">
      <Button
        className="px-2 py-1 rounded-[99px] uppercase"
        variant="bordered"
        onClick={() => swiper.slidePrev()} // Use useSwiper to navigate
      >
        <FaArrowLeft />
      </Button>
      <Button
        className="px-2 py-1 rounded-[99px] uppercase"
        variant="bordered"
        onClick={() => swiper.slideNext()} // Use useSwiper to navigate
      >
        <FaArrowRight />
      </Button>
    </div>
  );
}
