import { useEffect, useState } from "react";
import { Navigation } from "../../components";
import { WishItem } from "./components";
import { Modal, Loader } from "../../ui";
import { motion } from "framer-motion";
import { fetchGifts } from "../../api/api";

const WishListPage = () => {
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
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getGifts();
  }, []);

  const giftItems = data?.data?.gifts;
  console.log(giftItems);

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
          <Navigation />
        </div>
        <section className="bg-[#FFF2DE] min-h-screen px-24 py-4 mlg:px-14 mxs:px-10">
          <div>
            <p className="text-center font-[600] text-[2rem]">
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
                  image={wishItem.image}
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
      </section>

      {selectedWishItem && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedWishItem.title}
          id={selectedWishItem.id}
        />
      )}
    </motion.section>
  );
};

export { WishListPage };
