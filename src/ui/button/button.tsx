import React from "react";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<BtnProps> = ({ text, ...props }) => {
  return (
    <button className="relative overflow-hidden cursor-pointer text-[#E0B807] bg-transparent flex justify-center items-center py-[0.75rem] px-5 border-2 border-[#E0B807] rounded-[2.5rem] group hover:text-white" {...props}>
      {/* Text content with z-index */}
      <span className="relative z-10 uppercase">{text}</span>

      {/* Sliding background */}
      <span className="absolute inset-0 bg-[#E0B807] transform translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
    </button>
  );
};

export { Button };
