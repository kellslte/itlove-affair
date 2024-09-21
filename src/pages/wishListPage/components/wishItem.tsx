import { Button } from "../../../ui";

interface WishItemsProps{
  image: string;
  title: string;
  amount: string;
  onClick: (wishItem: {title: string}) => void;
}

const WishItem: React.FC<WishItemsProps> = ({image, title, amount, onClick}) => {

  const handleClick = () => {
    onClick({ title});
  };

  return (
    <div className="h-auto w-auto p-4 border-[#EAECF0] border rounded-lg">
      <div className="w-full h-64 bg-[#F5F6F8] rounded-lg">
        <img src={image} alt="Image of Wish Item" className="w-full h-full object-contain object-center" />
      </div>

      <div className="text-[#475467] my-4">
        <p className="text-base font-[500]">{title}</p>
        <p className="text-2xl font-[600]">₦{amount}</p>
      </div>

      <Button text="Send money" customClassName="py-[0.3rem] w-full" onClick={handleClick}/>
    </div>
  );
};

export { WishItem };
