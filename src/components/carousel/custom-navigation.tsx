import { useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../button";

type CustomNavigationProps = {
  className: string
  isBeginning: boolean
  isEnd: boolean
}

export default function CustomNavigation({className, isBeginning, isEnd}: CustomNavigationProps) {
  const swiper = useSwiper();

  return (
    <div className={`flex gap-2 z-50 ${className}`}>
      <Button
        className={`px-2 py-1 rounded-[99px] uppercase disabled:text-gray-500 disabled:border-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent`}
        variant="bordered"
        isDisable={isBeginning}
        onClick={() => swiper.slidePrev()} // Use useSwiper to navigate
      >
        <FaArrowLeft />
      </Button>
      <Button
        className="px-2 py-1 rounded-[99px] uppercase disabled:text-gray-500 disabled:border-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        variant="bordered"
        isDisable={isEnd}
        onClick={() => swiper.slideNext()} // Use useSwiper to navigate
      >
        <FaArrowRight />
      </Button>
    </div>
  );
}
