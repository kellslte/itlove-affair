import { useEffect, useState } from "react";
import { Navigation } from "../../components";
import { WishItem } from "./components";
import { Modal, Loader, WishModal } from "../../ui";
import { motion } from "framer-motion";
import { fetchGifts } from "../../api/api";

const WishListPage = () => {
  const [isWishModalOpen, setIsWishModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedWishItem, setSelectedWishItem] = useState<{
    title: string;
    id: string;
  } | null>(null);
  const [data, setData] = useState<any>();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const openWishModal = () => {
    setIsWishModalOpen(true)
    scrollTop()
  }

  const closeWishModal = () => {
    setIsWishModalOpen(false);
  };

  const openModal = (wishItem: { title: string; id: string }) => {
    setSelectedWishItem(wishItem);
    setIsModalOpen(true);
    scrollTop()
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWishItem(null);
  };

  useEffect(() => {
    const getGifts = async () => {
      setLoading(true);
      try {
        const { data } = await fetchGifts();
        
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getGifts();
  }, []);

  const giftItems = data?.data?.gifts;
  

  return (
    <motion.section
      className=""
      initial={{ x: 2500 }}
      animate={{ x: 1 }}
      exit={{ x: 2500 }}
      transition={{ duration: 0.3 }}
    >
      <section className="">
        <div className="sticky top-0 z-[100] bg-white/30 backdrop-blur-lg">
          <Navigation openModal={openWishModal} />
        </div>
        <section className="bg-[#FFF2DE] min-h-screen px-24 py-4 mlg:px-14 mxs:px-10">
          <div>
            <p className="text-center text-tochi-brown font-[600] text-[2rem]">
              Our Wedding Wishlist
            </p>
          </div>
          {loading ? (
            <div className="w-full h-full flex justify-center items-center">
              <div className="mt-[10rem]">
                <Loader />
              </div>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-4 gap-6 mlg:grid-cols-3 mmd:grid-cols-2 mxs:grid-cols-1">
              {giftItems?.map((wishItem: any, i: number) => (
                <WishItem
                  key={i}
                  title={wishItem.name}
                  url={wishItem.url}
                  id={wishItem._id}
                  donationComplete={wishItem.donationComplete}
                  amountDonated={wishItem.amountDonated}
                  amountLeft={wishItem.amountLeft}
                  amount={wishItem.price}
                  onClick={openModal}
                />
              ))}
            </div>
          )}
        </section>
        <div className="relative flex flex-col justify-center items-center gap-4 pt-8 pb-4 text-center text-tochi-brown">
          <p className="text-[1rem] font-averta">#ITLoveAffair</p>
          <p className="text-[1rem] font-averta">©2024</p>
        </div>
      </section>

      {selectedWishItem && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedWishItem.title}
          id={selectedWishItem.id}
        />
      )}
      <WishModal onClose={closeWishModal} isOpen = {isWishModalOpen}/>
    </motion.section>
  );
};

export { WishListPage };