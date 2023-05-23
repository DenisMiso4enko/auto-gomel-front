import React from "react";
import noImage from "../../../public/no-img.png";
import { PATHDOMAIN } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImagesGallery = ({ imagesUrl, product }: any) => {
  const [activeThumb, setActiveThumb] = useState();


  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
      >
        {imagesUrl.map((item: string, index: number) => (
          <SwiperSlide key={index}>
            <img src={`${PATHDOMAIN}${item}`} alt={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {
          imagesUrl.map((item: string, index: number) => (
            <SwiperSlide key={index}>
              <div className="product-images-slider-thumbs-wrapper">
                <img src={`${PATHDOMAIN}${item}`} alt={product} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
};

export default ImagesGallery;


/*
{!imagesUrl?.length ? (
  <img src={noImage} alt={product}/>
) : (
  <img src={`${PATHDOMAIN}${imagesUrl[0]}`} alt={product}/>
)}*/
