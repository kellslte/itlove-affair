import { Navigation } from "../../components";
import { HeroSection, InfoSection, LoveSection, WishSection, PhotoGallerySection } from "./components";

const HomePage = () => {
  return (
    <section className="relative">
      <div className="sticky top-0 z-[100] bg-white">
        <Navigation />
      </div>
      <HeroSection />
      <InfoSection />
      <LoveSection />
      <WishSection />
      <PhotoGallerySection/>
    </section>
  );
};

export { HomePage };
