import { Gal5, Gal6, Gal7, Gal8, Gal9 } from "../../../assets";
import Marquee from "react-fast-marquee";

const PhotoGallerySection = () => {
  // const firstArr = [Gal1, Gal2, Gal3, Gal4, Gal5, Gal6, Gal7, Gal8, Gal9];
  const photos = [Gal9, Gal8, Gal7, Gal6, Gal5,];

  return (
    <section className="bg-white py-24">
      <div>
        <p className="font-playwrite text-center text-2xl">Our Photo gallery</p>
      </div>
      <div className="mt-16 flex flex-col gap-8">
        <div>
        <Marquee pauseOnHover = {false} speed={10} direction="right">
          {photos.map((photo, index) => (
            <img src={photo} alt="Gallery" key={index} className="max-w-auto h-80 rounded-lg mr-8 object-cover mmd:max-w-48 mxs:h-64"/>
          ))}
        </Marquee>
        </div>
      </div>
    </section>
  );
};

export { PhotoGallerySection };
