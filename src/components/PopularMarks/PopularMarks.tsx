import SectionTitle from "../SectionTitle/SectionTitle";
import PopularMarksCard from "../PopularMarksCard/PopularMarksCard";
import { marksData } from "./marksData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";


const PopularMarks = () => {
  return (
    <div className="section marks container">
      <SectionTitle title="Поиск по модели" />
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 4
          }
        }}
      >
        {marksData?.map((mark) => (
          <SwiperSlide key={mark.title}>
            <PopularMarksCard key={mark.title} {...mark} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularMarks;
