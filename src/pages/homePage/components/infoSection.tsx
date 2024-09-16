import { Link } from "react-router-dom";
import { RightTop, LeftBottom } from "../../../assets";

const InfoSection = () => {
  return (
    <section className="w-full min-h-[30vh] relative bg-lcc-yellow px-24 py-24 flex justify-between items-center text-tochi-brown font-playwrite mlg:flex-col mmd:px-12 mxs:px-10">
      <div className="w-[40%] flex flex-col justify-center items-center text-center mlg:w-full mxxss:w-[80%]">
        <div>
          <p className="text-xl mb-8 mxs:text-sm">When</p>
          <p className="text-[2rem] mb-4 mxs:text-2xl mxxss:text-sm">Saturday, October 26, 2024</p>
          <p className="text-2xl mb-36 mlg:mb-6 mxs:text-xl mxxss:text-sm">11am (WAT)</p>
        </div>

        <Link
          to="#"
          className="font-averta text-2xl underline underline-offset-4 justify-self-end mxxss:text-sm hover:no-underline "
        >
          Get full details
        </Link>
      </div>
      <div className="bg-tochi-brown mlg:w-[80%] mlg:h-[0.0625rem] mlg:my-20 mxs:w-full mxs:my-10"></div>
      <div className="w-[40%] flex flex-col justify-center items-center text-center mlg:w-full mxxss:w-[80%]">
        <div>
          <p className="text-xl mb-8 mxs:text-sm">Where</p>
          <p className="text-[2rem] mb-4 mxs:text-sm">Destiny Event Centre</p>
          <p className="text-2xl mb-24 mlg:mb-6 mxs:text-xl mxxss:text-sm">
            45c Nza Street by New Haven, Linked Road, Independence Layout, Enugu
          </p>
        </div>

        <Link
          to="#"
          className="font-averta text-2xl underline underline-offset-4 justify-self-end mxxss:text-sm hover:no-underline"
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