import { Link } from "react-router-dom";
import { GoLink } from "react-icons/go";

const LinkSection = () => {
  return (
    <section className="w-full min-h-[30vh] relative bg-[inherit] px-24 pt-24 pb-12 flex justify-between items-start text-tochi-brown mlg:flex-col mmd:px-12 mxs:px-0 mxs:pt-4">
      <div className="w-[40%] flex flex-col justify-center items-center text-center mlg:w-full">
        <div>
          <p className="text-2xl font-semibold">
            Stream our ceremony
          </p>
          <p className="text-sm mb-6 font-light mlg:mb-6 mxs:text-[0.7rem] mxs:leading-normal">
            Though you can't be here in person, we're thrilled to have you with
            us in spirit. Join our wedding ceremony live by clicking the link
            below to stream and share in the joy of our big day from wherever
            you are.
          </p>
          <Link
            className="flex justify-center items-center gap-4 text-[2rem] mb-4 font-normal hover:underline underline-offset-4 mxs:text-2xl mxxss:text-sm"
            to="https://us04web.zoom.us/j/77418850645?pwd=VY4oqJ1YwunfTBeHabOEJa381lw73T.1"
            target="_blank"
          >
            Stream here
            <GoLink />
          </Link>
        </div>
      </div>
      <div className="bg-tochi-brown mlg:w-full mlg:h-[0.0625rem] mlg:my-12 mxs:w-full mxs:my-6"></div>
      <div className="w-[40%] flex flex-col justify-center items-center text-center mlg:w-full">
        <div>
          <p className="text-2xl font-semibold">Share in our joy</p>
          <p className="text-sm mb-6 font-light mlg:mb-6 mxs:text-[0.7rem] mxs:leading-normal">
            We want to see the day through your eyes! If you took any
            pictures during our ceremony, please share them in our
            photo album either by scanning the QR code below or
            clicking on the link. Your memories will help us cherish this day
            even more.
          </p>
          <div className="flex justify-center items-center">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?color=974C15&amp;bgcolor=FFF2DE&amp;data=https%3A%2F%2Fphotos.app.goo.gl%2FSh5CaKxz1KSz7q156&amp;qzone=2&amp;margin=0&amp;size=300x300&amp;ecc=L"
              alt="QR code to share images"
            />
          </div>
          <p className="my-10">OR</p>
          <Link
            className="flex justify-center items-center gap-4 text-[2rem] mb-4 font-normal hover:underline underline-offset-4 mxs:text-2xl mxxss:text-sm"
            to="https://photos.app.goo.gl/Sh5CaKxz1KSz7q156"
            target="_blank"
          >
            Share here
            <GoLink />
          </Link>
        </div>
      </div>
    </section>
  );
};

export { LinkSection };
