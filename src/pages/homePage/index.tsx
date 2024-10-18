import { Navigation } from "../../components";
import {
  HeroSection,
  InfoSection,
  LoveSection,
  WishSection,
  PhotoGallerySection,
  TestimonialSection,
} from "./components";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.section
      className=""
      initial={{ x: 2500 }}
      animate={{ x: 1 }}
      exit={{ x: 2500}}
      transition={{duration: 0.3}}
    >
      <div className="sticky top-0 z-[100] bg-[#FFF2DE/20] backdrop-blur-md">
        <Navigation />
      </div>
      <HeroSection />
      <div className="relative z-[80]">
        <InfoSection />
      </div>
      <LoveSection />
      <WishSection />
      <PhotoGallerySection />
      <TestimonialSection />
    </motion.section>
  );
};

export { HomePage };
