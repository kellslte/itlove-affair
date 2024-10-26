import jsPDF from "jspdf";
import { Button } from "../../../ui";
import {
  FirstProgramPage,
  SecondProgramPage,
  ThirdProgramPage,
} from "../../../assets";
import { GoDownload } from "react-icons/go";
import clsx from "clsx";

const ProgramSection = () => {
  const images = [FirstProgramPage, SecondProgramPage, ThirdProgramPage];

  const photo1 = `https://res.cloudinary.com/tochukwu/image/upload/v1727831559/wedding/vintage-cute.webp`;
  const photo2 = `https://res.cloudinary.com/tochukwu/image/upload/v1727831185/wedding/jve5bas0nj7jvf5dnfcn.webp`;
  const photo3 = `https://res.cloudinary.com/tochukwu/image/upload/v1727831185/wedding/main-close.webp`;
  const photo4 = `https://res.cloudinary.com/tochukwu/image/upload/v1727831558/wedding/vintage-goofy.webp`;

  const gridImages = [
    {
      imageUrl: photo1,
      customClassName: "row-span-2 col-span-1 rounded h-full ",
      position: "object-center",
    },
    {
      imageUrl: photo2,
      customClassName: "row-span-1",
      position: "object-center",
    },
    {
      imageUrl: photo3,
      customClassName: "row-span-2",
      position: "object-top",
    },
    {
      imageUrl: photo4,
      customClassName: "row-span-1",
      position: "object-center",
    },
  ];

  const generatePDF = async () => {
    const pdf = new jsPDF();
    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.src = images[i];
      await new Promise<void>((resolve) => {
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0);
          const imgData = canvas.toDataURL("image/png");

          if (i > 0) pdf.addPage(); // Add a new page for each image
          pdf.addImage(imgData, "PNG", 10, 10, 190, 0); // Scale to fit page width
          resolve();
        };
      });
    }
    pdf.save("ITLoveAffair-programme.pdf");
  };

  return (
    <section className="w-full my-10 flex justify-between items-center gap-4 mmd:flex-col mmd:gap-8">
      <div className="w-1/2 mmd:w-full">
        <div className="mb-4 text-tochi-brown">
          <p className="text-2xl font-semibold">
            Download the Wedding Programme
          </p>
          <p className="text-base  mmd:text-justify">
            Join us in celebrating each beautiful moment of this special day!
            Download the programme of events to follow along and share in every
            heartfelt moment planned for the ceremony.
          </p>
        </div>
        <div className="mmd:flex justify-center items-center">
          <Button
            text="Download Programme"
            onClick={generatePDF}
            icon={
              <GoDownload className="fill-[#E0B807] group-hover:fill-white" />
            }
          />
        </div>
      </div>
      <div className="w-1/2 grid gap-3 grid-cols-2 grid-rows-3 h-[500px] mmd:w-full">
        {gridImages.map((gridImage, index) => (
          <div className={gridImage.customClassName} key={index}>
            <img
              src={gridImage.imageUrl}
              alt="IT Image"
              className={clsx(
                "w-full h-full object-cover rounded-full",
                gridImage.position
              )}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { ProgramSection };
