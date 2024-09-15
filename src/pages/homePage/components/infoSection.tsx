import { Link } from "react-router-dom";
import { RightTop, LeftBottom } from "../../../assets";

const InfoSection = () => {
  return (
    <section className="w-full min-h-[30vh] relative bg-lcc-yellow px-24 py-24 flex justify-between items-center text-tochi-brown font-playwrite mlg:flex-col">
      <div className="w-[40%] flex flex-col justify-center items-center text-center mlg:w-full">
        <div>
          <p className="text-xl mb-8">When</p>
          <p className="text-[2rem] mb-4">Saturday, October 26, 2024</p>
          <p className="text-2xl mb-36 mlg:mb-6">11am (WAT)</p>
        </div>

        <Link
          to="#"
          className="font-averta text-2xl underline underline-offset-4 justify-self-end"
        >
          Get full details
        </Link>
      </div>
      <div className="bg-tochi-brown mlg:w-full mlg:h-0.5 mlg:my-4"></div>
      <div className="w-[40%] flex flex-col justify-center items-center text-center mlg:w-full">
        <div>
          <p className="text-xl mb-8">Where</p>
          <p className="text-[2rem] mb-4">Destiny Event Centre</p>
          <p className="text-2xl mb-24 mlg:mb-6">
            45c Nza Street by New Haven, Linked Road, Independence Layout, Enugu
          </p>
        </div>

        <Link
          to="#"
          className="font-averta text-2xl underline underline-offset-4 justify-self-end"
        >
          Get full details
        </Link>
      </div>

      <div className="absolute z-50 top-0 right-0 ">
        <img src={RightTop} alt="Flower Design" width={200} height={200} />
      </div>

      <div className="absolute z-50 bottom-0 left-0 ">
        <img src={LeftBottom} alt="Flower Design" width={200} height={200} />
      </div>
    </section>
  );
};

export { InfoSection };
