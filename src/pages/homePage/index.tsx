import { Navigation } from "../../components";
import {
  HeroSection,
  InfoSection,
  LoveSection,
  WishSection,
  PhotoGallerySection,
  TestimonialSection,
} from "./components";

const HomePage = () => {
  return (
    <section className="relative">
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
    </section>
  );
};

export { HomePage };
