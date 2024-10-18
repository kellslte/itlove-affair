import React from "react";
import clsx from "clsx";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  customClassName?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}

const Button: React.FC<BtnProps> = ({ text, customClassName, onClick, ...props }) => {
  const className = clsx("relative overflow-hidden cursor-pointer text-[#E0B807] bg-transparent flex justify-center items-center py-[0.75rem] px-5 border-2 border-[#E0B807] rounded-[2.5rem] group hover:text-white mxxss:px-3", customClassName)

  return (
    <button className={className} onClick={onClick} {...props}>
      {/* Text content with z-index */}
      <span className="relative z-10 uppercase mxs:text-xs">{text}</span>

      {/* Sliding background */}
      <span className="absolute inset-0 bg-[#E0B807] transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
    </button>
  );
};

export { Button };
