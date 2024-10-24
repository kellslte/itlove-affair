import { useState } from "react";
import { RightTop, LeftBottom } from "../../../assets";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import 'swiper/css/effect-fade';

const TestimonialSection = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const slides = [
    {
      testimony:
        "Pastor Tochi & Pastor Ifeoma are absolutely meant for each other. You have worked together for the Lord all the years I've known you and I'm sure you'll have a happy & blissful home for the Lord. Congratulations!",
      author: "Pastor Mezie Odionye",
    },
    {
      testimony:
        "My pastors! I absolutely love this union. Knowing both of you is loving you. There's never been a better match. May the love that has brought you together, blossom till the very end.",
      author: "Adaeze Omaliko",
    },
    {
      testimony:
        "Time and chance, a commonality to us all.<br/> Time came,<br/> Chance came,<br/> He took both, sorry he took her. 😌<br/> Truly a great fortune, you have found in each other. May your euphoria last a lifetime",
      author: `Chinedu "Montee" Nwachukwu`,
    },
    {
      testimony:
        "My dear pastors.<br/> Excited much that you have both found your home.😊<br/>  Wishing you a lifetime of happiness, laughter, and joy together.<br/>  Cheers 🥂",
      author: "Ifeanyi Alichi",
    },
    {
      testimony:
        "Congratulations on your beautiful union Pastor Sir and Pastor Ma! May your marriage be filled with God's love, joy, and endless blessings. Amen",
      author: "Amaranna Ogbonna",
    },
    {
      testimony:
        "God's endless blessings and goodness. Wishing Pastor Tochi and Pastor Ifeoma a beautiful and happy married life. Congratulations!",
      author: "Obianuju Afamefuna",
    },
    {
      testimony:
        "Hold on, my pastors are getting married? Pastor Sir and Pastor Ma, I’m so excited for you both. Wishing you a marriage full of love, joy and everything beautiful. Congratulations!",
      author: "Edozie Onyeanusi",
    },
    {
      testimony:
        "May your union be blessed with love, joy, abundance and unwavering faith in each other, and may you continue to inspire all of us with the strength of your commitment. Here is to a lifetime of happiness together.",
      author: "Jubilee Edeh",
    },
    {
      testimony:
        "I am overjoyed to celebrate with you as you begin this journey together. Your love and commitment to each other and to God are inspiring examples for us all. Your marriage will serve as a model of a Godly home. Congratulations, Pastor Sir and Ma!",
      author: "Christiana Bini-Okoh",
    },
    {
      testimony: `This wedding has me super excited!!!!<br/> I'm "extremmmmmely" happy for Pastor Tochi and Pastor Ifeoma.🤭 <br/> Cheers to building a beautiful, godly home.<br/> Congratulations!`,
      author: "Chinonye Abonyi",
    },
    {
      testimony: `I’m beyond excited to witness this beautiful union! A huge congratulations to Pastor Tochi and Pastor Ifeoma on this incredible journey. May your marriage be filled with love, joy, and countless blessings as you build a strong and godly home together.`,
      author: "Perpetual Ozofor",
    },
    {
      testimony:
        "Wow! The holy matrimony of God’s holy servants! What more better tells the beautiful story of “A MATCH MADE FROM HEAVEN!”. Indeed, it’s a big congratulations you Pastor Tochi sir and Pastor Ifeoma ma! Plenty love from me!",
      author: "Chinedu Iheukwumere",
    },
    {
      testimony:
        "Our dear Pastors, united in faith and love;<br/> Guiding others while walking hand in hand.<br/> In each other's eyes, you've found your home.<br/> A bond so deep, it's carved in stone.<br/> In this wonderful union, we see reflected the divine love you've always preached about.",
      author: "Somto Ilorah",
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
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          speed={1300}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  className={`${
                    isActive ? "bg-white " : "invisible"
                  } flex justify-center items-center flex-col gap-6 rounded-lg p-4 h-[20rem]`}
                >
                  <p className="text-center font-light text-2xl w-[70%] mxl:w-[80%] mlg:text-xl mmd:text-lg msm:text-base mxs:text-sm mxs:w-full" dangerouslySetInnerHTML={{__html: slide.testimony}}>
                  </p>
                  <p className="text-center font-medium text-2xl mlg:text-xl mmd:text-lg">
                    ~{slide.author}~
                  </p>
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
            <FiArrowLeft color="white" size={80} />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="flex justify-center items-center absolute -right-8 p-4 w-16 h-16 rounded-full border-white border-2 bg-white/30 backdrop-blur-lg transition-all duration-1000 ease-in-out hover:shadow-[0_8px_32px_rgba(31,38,135,0.37)] mxs:w-14 mxs:h-14"
          >
            <FiArrowRight color="white" size={80} />
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
