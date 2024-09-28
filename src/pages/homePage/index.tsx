import { Navigation } from "../../components";
import { HeroSection, InfoSection, LoveSection, WishSection, PhotoGallerySection, TestimonialSection } from "./components";

const HomePage = () => {
  return (
    <section className="relative">
      <div className="sticky top-0 z-[100] bg-white/30 backdrop-blur-lg">
        <Navigation />
      </div>
      <HeroSection />
      <InfoSection />
      <LoveSection />
      <WishSection />
      <PhotoGallerySection/>
      <TestimonialSection/>
    </section>
  );
};

export { HomePage };
