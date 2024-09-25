import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import CarouselItem, { CarouselItemProps } from "../CarouselItem";

const categoryList: CarouselItemProps[] = [
  {
    image: "/aam.png",
    title: "AgileTeknik Agility Model",
  },
  {
    image: "/agile_manifesto.png",
    title: "Agile Manifesto",
  },
  {
    image: "/class_diagram.png",
    title: "Class Diagram",
  },
  {
    image: "/flutter.png",
    title: "Flutter 101",
  },
  {
    image: "/flutter_intermediate.png",
    title: "Flutter Intermediate",
  },
  {
    image: "/7habits.png",
    title: "7 Habits of Highly Effective People",
  },
  {
    image: "/umum.png",
    title: "General Knowledge",
  },
];

export default function Categories() {
  return (
    <div className="flex-1">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper z-0"
      >
        {...categoryList.map((category) => (
          <SwiperSlide className="pl-5 pr-5">
            <CarouselItem {...category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
