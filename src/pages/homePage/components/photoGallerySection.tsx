import Marquee from "react-fast-marquee";

const PhotoGallerySection = () => {
  const photos = [
    "https://res.cloudinary.com/tochukwu/image/upload/v1729479575/wedding/court-1.webp",
    "https://res.cloudinary.com/tochukwu/image/upload/v1727831558/wedding/vintage-goofy.webp",
    "https://res.cloudinary.com/tochukwu/image/upload/v1729479575/wedding/court-2.webp",
    "https://res.cloudinary.com/tochukwu/image/upload/v1727831185/wedding/jve5bas0nj7jvf5dnfcn.webp",
    "https://res.cloudinary.com/tochukwu/image/upload/v1729479575/wedding/court-3.webp",
    "https://res.cloudinary.com/tochukwu/image/upload/v1727831185/wedding/main-close.webp",
    "https://res.cloudinary.com/tochukwu/image/upload/v1729479575/wedding/court-4.webp",
  ];

  return (
    <section className="bg-white py-24">
      <div>
        <p className="font-playwrite text-center text-2xl">Our Photo gallery</p>
      </div>
      <div className="mt-16 flex flex-col gap-8">
        <div>
          <Marquee pauseOnHover={false} speed={20} direction="right">
            {photos.map((photo, index) => (
              <img
                src={photo}
                alt="Gallery"
                key={index}
                className="max-w-auto h-80 rounded-lg mr-8 object-cover mmd:max-w-48 mxs:h-64"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export { PhotoGallerySection };
