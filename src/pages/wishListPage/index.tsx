import { useEffect, useState } from "react";
import { Navigation } from "../../components";
import { WishItem } from "./components";
import { Modal } from "../../ui";
import { Car, Gen, Fridge, Wash } from "../../assets";
import { fetchGifts } from "../../api/api";

const WishListPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWishItem, setSelectedWishItem] = useState<{
    title: string;
    id: string;
  } | null>(null);
  const [data, setData] = useState<any>();

  const openModal = (wishItem: { title: string, id: string }) => {
    setSelectedWishItem(wishItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWishItem(null);
  };

  const wishItems = [
    {
      image: Car,
      title: "Toyota Camry 2023",
      amount: "15,000,000",
    },
    {
      image: Gen,
      title: "Firman Generator",
      amount: "550,000",
    },
    {
      image: Fridge,
      title: "Double Door LG Fridge",
      amount: "345,000",
    },
    {
      image: Wash,
      title: "LG Washing Machine",
      amount: "180,000",
    },
  ];

  useEffect(() => {
    const getGifts = async () => {
     try {
      const { data } = await fetchGifts();
      console.log(data);
      setData(data)
     } catch (error) {
      console.log(error)
     }
    };
     
    getGifts();
  }, []);

  const giftItems = data?.data?.gifts;
  console.log(giftItems)

  return (
    <section>
      <section className="relative">
        <div className="sticky top-0 z-[100] bg-white/30 backdrop-blur-lg">
          <Navigation />
        </div>
        <section className="px-24 py-4 mlg:px-14 mxs:px-10">
          <div>
            <p className="text-center font-[600] text-[2rem]">
              Our Wedding Wishlist
            </p>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-6 mlg:grid-cols-3 mmd:grid-cols-2 mxs:grid-cols-1">
            {giftItems?.map((wishItem: any, i: number) => (
              <WishItem
                key={i}
                title={wishItem.name}
                // image={wishItem.image}
                id={wishItem._id}
                donationComplete={wishItem.donationComplete}
                amountDonated={wishItem.amountDonated}
                amountLeft={wishItem.amountLeft}
                amount={wishItem.price}
                onClick={openModal}
              />
            ))}
          </div>
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
    </section>
  );
};

export { WishListPage };
