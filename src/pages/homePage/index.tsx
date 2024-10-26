import { useState } from "react";
import { Navigation, Footer } from "../../components";
import {
  HeroSection,
  InfoSection,
  LoveSection,
  WishSection,
  PhotoGallerySection,
  TestimonialSection,
} from "./components";
import { motion } from "framer-motion";
import { WishModal } from "../../ui";

const HomePage = () => {
  const [isWishModalOpen, setIsWishModalOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const openModal = () => {
    setIsWishModalOpen(true)
    scrollTop()
  };

  const closeModal = () => {
    setIsWishModalOpen(false);
  };

  return (
    <motion.section
      className=""
      initial={{ x: 2500 }}
      animate={{ x: 1 }}
      exit={{ x: 2500 }}
      transition={{ duration: 0.3 }}
    >
      <div className="sticky top-0 z-[100] bg-[#FFF2DE/20] backdrop-blur-md">
        <Navigation openModal = {openModal}/>
      </div>
      <HeroSection />
      <div className="relative z-[80]">
        <InfoSection />
      </div>
      <LoveSection />
      <WishSection />
      <PhotoGallerySection />
      <TestimonialSection />
      <Footer background="ifeoma-green" />
      <WishModal onClose={closeModal} isOpen={isWishModalOpen} />
    </motion.section>
  );
};

export { HomePage };
