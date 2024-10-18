import { useState } from "react";
import { Button } from "../../../ui";
import { Link } from "react-router-dom";
import { MoneyModal } from "../../../ui/modal/money-modal";

const WishSection = () => {
  // const [selectedOption, setSelectedOption] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const openModal = () => {
    setIsModalOpen(true);
    scrollTop()
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className=" w-full h-auto bg-ifeoma-green flex items-center justify-center py-24 mxxs:px-4">
      <div className="relative w-[50%] flex items-center justify-center flex-col mmd:w-[70%] mxxs:w-[100%]">
        <div>
          <p className="text-[2rem] font-semibold text-white text-center mxxss:text-2xl">
            Looking to be part of our big day?
          </p>
        </div>

        <div>
          <p className="text-white text-center text-xl font-light mt-6 mb-4 mxxss:text-lg">
            Your presence means the world to us and is all we ask for. If you’d
            still like to contribute to our big day, you can view our wishlist
            here.
          </p>
        </div>

        <div className="flex space-x-4">
          <Link to="/wishlist">
            <Button text="See our wishlist" />
          </Link>
          <div className="bg-[#E0B807] rounded-full" onClick={openModal}>
            <Button
              text="Send Cash"
              customClassName="text-white bg-[#E0B807]"
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <MoneyModal isOpen={isModalOpen} onClose={closeModal} title={"Cash"} />
      )}
    </section>
  );
};

export { WishSection };
