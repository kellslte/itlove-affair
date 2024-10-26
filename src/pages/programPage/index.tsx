import { useState } from "react";
import { Navigation } from "../../components";
import { motion } from "framer-motion";
import { WishModal } from "../../ui";
import { ProgramSection, LinkSection, VendorSection } from "./components";

const ProgramPage = () => {
  const [isWishModalOpen, setIsWishModalOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openModal = () => {
    setIsWishModalOpen(true);
    scrollTop();
  };

  const closeModal = () => {
    setIsWishModalOpen(false);
  };

  return (
    <motion.section
      initial={{ x: 2500 }}
      animate={{ x: 1 }}
      exit={{ x: 2500 }}
      transition={{ duration: 0.3 }}
    >
      <div className="sticky top-0 z-[100] bg-white/30 backdrop-blur-lg">
        <Navigation openModal={openModal} />
      </div>
      <section className="px-24 py-4 mlg:px-14 mxs:px-10">
        <div>
          <p className="text-center text-tochi-brown font-[600] text-[2rem]">Programme Page</p>
        </div>
        <ProgramSection />
        <LinkSection />
        <VendorSection />
        <div className="relative flex flex-col justify-center items-center gap-4 pt-8 pb-4 text-center text-tochi-brown">
          <p className="text-[1rem] font-averta">#ITLoveAffair</p>
          <p className="text-[1rem] font-averta">©2024</p>
        </div>
      </section>
      <WishModal onClose={closeModal} isOpen={isWishModalOpen} />
    </motion.section>
  );
};

export { ProgramPage };
