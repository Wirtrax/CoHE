import React, { useState, useRef, useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideContent from "./SlideContent";

function HistoryEventsSlider() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const { activeIndex, categories } = useAppSelector(
    (state) => state.historyEvent
  );
  const [showPrevButton, setShowPrevButton] = useState(false);

  const activeCategory = categories[activeIndex];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== 0) {
      swiperRef.current.slideTo(0);
    }
  }, [activeIndex]);

  const handleSwiper = (swiper: SwiperCore) => {
    swiperRef.current = swiper;
    setShowPrevButton(false);
  };
  const handleSlideChange = (swiper: SwiperCore) => {
    setShowPrevButton(swiper.activeIndex > 0);
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && showPrevButton) {
      swiperRef.current.slidePrev();
    }
  };

  if (!activeCategory) {
    return <div>Нет данных</div>;
  }
  return (
    <div className="historySlider">
      <button
        className={`historySlider__button  custom-prev ${
          showPrevButton ? "visible" : "hidden"
        }`}
        onClick={handlePrev}
        aria-label="Предыдущий слайд"
      ></button>
      <Swiper
        modules={[Navigation, Mousewheel, Pagination]}
        spaceBetween={80}
        slidesPerView='auto'
        centeredSlides={false}
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
      
        mousewheel={{ forceToAxis: true }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20, 
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
      >
        {activeCategory.events.map((event, index) => (
          <SwiperSlide key={index} className="historySlider__slide">
            <SlideContent title={event.year} descriprion={event.desc} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="historySlider__button custom-next"
        onClick={handleNext}
        aria-label="Следующий слайд"
      ></button>
    </div>
  );
}

export default HistoryEventsSlider;
