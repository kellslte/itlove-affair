import { CountdownTimer } from "../../../components";
import { RightBottom, MainImage } from "../../../assets";

const HeroSection = () => {
  const targetDate = "2024-10-26T00:00:00";

  return (
    <section className="w-screen h-screen flex flex-col relative overflow-visible">
      <div className="flex-grow px-24 flex flex-col items-center mlg:px-14 mxs:px-10">
        <div className="mb-6 mlg:mt-6 mmd:mt-8 msm:mt-10 mxs:mt-12">
          <p className="font-playwrite text-4xl mxxss:text-2xl">
            Ifeoma & Tochi
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 ">
          <p className="mxxss:text-sm mxxxs:text-xs mxs:text-center">
            OCTOBER 26, 2024
          </p>
          <div className="w-1 h-1 bg-pastor-blue rounded-full"></div>
          <p className="mxxss:text-sm mxxxs:text-xs mxs:text-center">
            ENUGU, NIGERIA
          </p>
        </div>
        <div className="my-6 flex justify-center items-center gap-1 mxxss:flex-col">
          <CountdownTimer targetDate={targetDate} />
          <p className="text-lg"> TO GO!</p>
        </div>
        <div className="w-full h-full">
          <img
            src={MainImage}
            alt="Pastors' Image"
            className="max-h-[33%] w-full object-cover rounded-3xl mlg:max-h-[45%] msm:max-h-[55%] mxs:max-h-[80%] mxxxs:max-h-[100%]:"
            style={{ objectPosition: "0% 30%" }}
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-50">
        <img
          src={RightBottom}
          alt="Flower Design at the Right Bottom"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};

export { HeroSection };
