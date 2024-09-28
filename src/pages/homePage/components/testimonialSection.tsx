import { useState } from "react";
import { RightTop, LeftBottom } from "../../../assets";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TestimonialSection = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const slides = [
    {
      testimony: "God's endless blessings and goodness. Wishing Pastor Tochi and Pastor Ifeoma a beautiful and happy married life. Congratulations!",
      author: "Obianuju Afamefuna",
    },
    {
      testimony: "Hold on, my pastors are getting married? Pastor Tochi Sir and Pastor Ifeoma Ma, I’m so excited for you both. Wishing you a marriage full of love, joy and everything beautiful. Congratulations!",
      author: "Edozie Onyeanusi",
    },
    {
      testimony: "May your union be blessed with love, joy, abundance and unwavering faith in each other, and may you continue to inspire all of us with the strength of your commitment. Here is to a lifetime of happiness together.",
      author: "Jubilee Edeh",
    },
  ];

  return (
    <section className="relative bg-ifeoma-green px-56 py-20 mmlg:px-40 mmd:px-24 msm:px-16 mxs:px-10">
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
                  <p className="text-center font-light text-2xl w-[60%] mxl:w-[80%] mlg:text-xl mmd:text-lg msm:text-base mxs:text-sm mxs:w-full">{slide.testimony}</p>
                  <p className="text-center font-medium text-2xl mlg:text-xl mmd:text-lg">~{slide.author}~</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="w-full absolute top-[50%] translate-y-[-50%] z-[50] flex items-center justify-between gap-2 mt-4">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="flex justify-center items-center absolute -left-8 p-4 w-16 h-16 rounded-full border-white border-2 bg-white/30 backdrop-blur-lg transition-all duration-1000 ease-in-out hover:shadow-[0_8px_32px_rgba(31,38,135,0.37)] mxs:w-14 mxs:h-14"
          >
            
            <FiArrowLeft color="white" size={80}/>
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="flex justify-center items-center absolute -right-8 p-4 w-16 h-16 rounded-full border-white border-2 bg-white/30 backdrop-blur-lg transition-all duration-1000 ease-in-out hover:shadow-[0_8px_32px_rgba(31,38,135,0.37)] mxs:w-14 mxs:h-14"
          >
            <FiArrowRight color="white" size={80}/>
          </button>
        </div>
      </div>

      <div className="absolute z-50 top-0 right-0">
        <img src={RightTop} alt="Flower Design" width={250} height={250} />
      </div>
      <div className="absolute z-50 bottom-0 left-0">
        <img src={LeftBottom} alt="Flower Design" width={250} height={250} />
      </div>
    </section>
  );
};

export { TestimonialSection };
