import InvestorAuthoritiesCard from "./card";
// import required modules
import { EffectCards, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import './swipe.css'

export default function SwiperSlider() {
  return (
    <div style={{ height: '400px' }}> {/* Add a container with height */}
      <Swiper
        direction={'vertical'}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        className="mySwiper"
        style={{ height: '100%' }} // Ensure swiper takes full height
        slidesPerView={1}
        mousewheel={true} // Enable mousewheel for vertical scrolling
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        cardsEffect={{
          perSlideOffset: 8, // Offset of each card
          perSlideRotate: 2, // Rotation of each card
          rotate: true,
          slideShadows: false, // Disable shadows between cards
        }}
      >
        <SwiperSlide><InvestorAuthoritiesCard/></SwiperSlide>
        <SwiperSlide><InvestorAuthoritiesCard/></SwiperSlide>
        <SwiperSlide><InvestorAuthoritiesCard/></SwiperSlide>
        <SwiperSlide><InvestorAuthoritiesCard/></SwiperSlide>
        <SwiperSlide><InvestorAuthoritiesCard/></SwiperSlide>
        <SwiperSlide><InvestorAuthoritiesCard/></SwiperSlide>
        <SwiperSlide><InvestorAuthoritiesCard/></SwiperSlide>
        <SwiperSlide><InvestorAuthoritiesCard/></SwiperSlide>
        <SwiperSlide><InvestorAuthoritiesCard/></SwiperSlide>
      </Swiper>
    </div>
  );
}