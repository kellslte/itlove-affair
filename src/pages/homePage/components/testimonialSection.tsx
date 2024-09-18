import { useState } from "react";
import { RightTop, LeftBottom } from "../../../assets";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TestimonialSection = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const slides = [
    {
      testimony: "God's endless blessings and goodness. Wishing Pastor Tochi and Pastor Ifeoma a beautiful and happy married life. Congratulations!",
      author: "Obianuju",
    },
    {
      testimony: "Hold on, my pastors are getting married? I thought they were just great at teamwork during church events! Pastor Tochi Sir and Pastor Ifeoma Ma, I’m so excited for you both. Wishing you a marriage full of love, joy and everything beautiful. Congratulations!",
      author: "Edozie",
    },
    {
      testimony: "Even in death. We won!",
      author: "Jubilee",
    },
  ];

  return (
    <section className="relative bg-ifeoma-green px-56 py-20">
      <div className="relative">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={60}
          onSwiper={(swiper) => setSwiperInstance(swiper)} 
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  className={`${
                    isActive
                      ? "bg-white "
                      : "invisible"
                  } flex justify-center items-center flex-col gap-6 rounded-lg p-4 h-[20rem]`}
                >
                  <p className="text-center font-light text-2xl w-[60%]">{slide.testimony}</p>
                  <p className="text-center font-medium text-2xl">~{slide.author}~</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="w-full absolute top-[50%] translate-y-[-50%] z-[50] flex items-center justify-between gap-2 mt-4">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute -left-8 bg-lcc-yellow p-4 w-16 h-16 rounded-full border-white border-2"
          >
            Prev
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="absolute -right-8 bg-lcc-yellow p-4 w-16 h-16 rounded-full border-white border-2"
          >
            Next
          </button>
        </div>
      </div>

      <div className="absolute z-50 top-0 right-0">
        <img src={RightTop} alt="Flower Design" width={200} height={200} />
      </div>
      <div className="absolute z-50 bottom-0 left-0">
        <img src={LeftBottom} alt="Flower Design" width={200} height={200} />
      </div>
    </section>
  );
};

export { TestimonialSection };
