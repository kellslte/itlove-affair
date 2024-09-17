import { Button } from "../../../ui";

const WishSection = () => {
  return (
    <section className="w-full h-auto bg-ifeoma-green flex items-center justify-center py-24 mxxs:px-4">
      <div className="w-[50%] flex items-center justify-center flex-col gap-8 mmd:w-[70%] mxxs:w-[100%]">
        <div>
          <p className="text-[2rem] font-semibold text-white text-center mxxss:text-2xl">
            Want to contribute to our wedding and our marriage?
          </p>
        </div>

        <div>
          <p className="text-white text-center text-xl font-light mxxss:text-lg">
            Your presence means the world to us and is all we ask for. If you’d
            still like to contribute to our big day, you can view our wishlist
            here.
          </p>
        </div>

        <Button text="See our wishlist" />
      </div>
    </section>
  );
};

export { WishSection };
