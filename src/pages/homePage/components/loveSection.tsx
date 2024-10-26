import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LeftTop } from "../../../assets";

const LoveSection = () => {
  const photo1 = `https://res.cloudinary.com/tochukwu/image/upload/v1727831185/wedding/vintage-normal.webp`;
  const photo2 = `https://res.cloudinary.com/tochukwu/image/upload/v1727831559/wedding/vintage-cute.webp`;
  const photo3 = `https://res.cloudinary.com/tochukwu/image/upload/v1727831185/wedding/jve5bas0nj7jvf5dnfcn.webp`;
  const photo4 = `https://res.cloudinary.com/tochukwu/image/upload/v1727831185/wedding/main-close.webp`;
  const photo5 = `https://res.cloudinary.com/tochukwu/image/upload/v1727831558/wedding/vintage-goofy.webp`;

  const photos = [photo1, photo2, photo3, photo4, photo5];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through the photos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [photos]);

  // Animation variants for fading in and out
  const fadeVariant = {
    enter: { opacity: 0, scale: 0.95},
    center: { opacity: 1, scale: 1},
    exit: { opacity: 0, scale: 1.05},
  };

  return (
    <section className="relative bg-white px-24 py-24 flex flex-col justify-center items-center mxs:p-10">
      <div className="text-center mb-20 mmd:mb-10">
        <p className="text-3xl font-playwrite mmd:text-xl">Our Love Story</p>
      </div>

      <div className="w-full flex justify-between items-center gap-6 mt-8 mmd:flex-col-reverse">
        <div className="w-[50%] flex flex-col gap-6 mmd:w-full">
          <p className="text-2xl text-justify mxs:text-lg">
            “I first met Ifeoma when she came to write her exams in my school. I
            was in my penultimate year of university at the time, We quickly
            became good friends after she gained admission, bonding over many of
            our shared interests - At the time, neither of us imagined it would
            become anything more. But we were in each other’s lives, served God
            together etc… attended conferences together, accompanied me to
            different meetings. Years later, after we both had left school, we
            were more than assured we are made for each other (this is not
            without diverse life’s twists and turns years before), and here we
            are today… in love with each other and finally getting married…”
          </p>
          <p className="text-3xl font-medium">- Tochi & Ifeoma</p>
        </div>

        <div className="w-[50%] mmd:w-full relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={photos[currentIndex]} // Only render the current image
              alt="Pastors' Picture"
              className="w-full h-[30rem] object-cover rounded-3xl"
              style={{ objectPosition: "0% 5%",  }}
              initial="enter"
              animate="center"
              exit="exit"
              variants={fadeVariant}
              transition={{ duration: 0.8, ease: [0.445, 0.050, 0.550, 0.950] }} 
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute z-50 top-0 left-0 ">
        <img src={LeftTop} alt="Flower Design" width={250} height={250} />
      </div>
    </section>
  );
};

export { LoveSection };
