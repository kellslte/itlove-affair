interface FooterProps {
  background: string
}

import { LeftTop } from "../assets";

const Footer:React.FC<FooterProps> = ({background}) => {
  return (
    <div className={`relative flex flex-col justify-center items-center gap-4 py-16 text-center text-white bg-${background}`}>
      <p className="text-[1rem] font-averta">#ITLoveAffair</p>
      <p className="text-[1rem] font-averta">©2024</p>

      <div className="absolute z-50 top-0 left-0 ">
        <img src={LeftTop} alt="Flower Design" width={250} height={250} />
      </div>
    </div>
  );
}
 
export {Footer};