import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {FreeMode, Pagination } from "swiper";


import class1 from '../../../src/assets/img/class/class1.jpg'
import class2 from '../../../src/assets/img/class/class2.jpg'
import class3 from '../../../src/assets/img/class/class3.jpg'
import class4 from '../../../src/assets/img/class/class4.jpg'
import class5 from '../../../src/assets/img/class/class5.jpg'
import class6 from '../../../src/assets/img/class/class6.jpg'
import SectionTitle from "../../components/SectionTitle/SectionTitle";



const Gallery = () => {
    return (
        <section>
      <SectionTitle subHeading={'welcome to our'} heading={'Photo Gallery'}>
       
      </SectionTitle>
         <div className="hidden lg:block">
         <Swiper
        slidesPerView={"3"}
       
        centeredSlides={true}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-10"
      >
       <SwiperSlide>
          <img src={class1} alt="" className="h-[270px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class2} alt="" className="h-[270px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class3} alt="" className="h-[270px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class4} alt="" className="h-[270px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class5} alt="" className="h-[270px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class6} alt="" className="h-[270px]"/>
        </SwiperSlide>
      </Swiper>
         </div>
         <div className="lg:hidden">
         <Swiper
        slidesPerView={"1"}
       
        centeredSlides={true}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-10"
      >
       <SwiperSlide>
          <img src={class1} alt="" className="h-[270px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class2} alt="" className="h-[270px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class3} alt="" className="h-[270px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class4} alt="" className="h-[270px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class5} alt="" className="h-[270px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={class6} alt="" className="h-[270px]"/>
        </SwiperSlide>
      </Swiper>
         </div>
        </section>
       
    );
};

export default Gallery;