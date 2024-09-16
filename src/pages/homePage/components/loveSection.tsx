import { LeftTop, PstIfeomaImg, PstTochiImg } from "../../../assets";

const LoveSection = () => {
  return (
    <section className="relative bg-white px-24 py-24 flex flex-col justify-center items-center mxs:p-10">
      <div className="text-center mb-20 mmd:mb-10">
        <p className="text-3xl font-playwrite mmd:text-xl">Our Love Story</p>
      </div>

      <div className="w-full flex justify-between items-center gap-6 mb-8 mmd:flex-col">
        <div className="w-[50%] mmd:w-full">
          <img src={PstIfeomaImg} alt="Pastor Ifeoma's Picture" className="w-full h-[23.125rem] object-cover object-top rounded-3xl" />
        </div>

        <div className="w-[50%] flex flex-col gap-6 mmd:w-full">
          <p className="text-2xl mxs:text-lg">
            “My Pastor who has now become my love!! I really have now words to
            say. I know the rest of my life is about to be the best of my life
            because of my union to this man”
          </p>
          <p className="font-playwrite text-2xl">- Ifeoma</p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center gap-6 mt-8 mmd:flex-col-reverse">
        <div className="w-[50%] flex flex-col gap-6 mmd:w-full">
          <p className="text-2xl mxs:text-lg">
            “My Pastor who has now become my love!! I really have now words to
            say. I know the rest of my life is about to be the best of my life
            because of my union to this man”
          </p>
          <p className="font-playwrite text-2xl">- Tochi</p>
        </div>
        <div className="w-[50%] mmd:w-full">
          <img src={PstTochiImg} alt="Pastor Tochi's Picture" className="w-full h-[23.125rem] object-cover rounded-3xl" style={{objectPosition: "0% 5%"}}/>
        </div>
      </div>

      <div className="absolute z-50 top-0 left-0 ">
        <img src={LeftTop} alt="Flower Design" width={200} height={200} />
      </div>
    </section>
  );
};

export { LoveSection };
