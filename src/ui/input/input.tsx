import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}


const Input: FC<InputProps> = (props) => {
  const {name, label, ...rest } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(errors)


  return(
    <div className="flex flex-col">
      <label htmlFor={name} className="text-pastor-blue text-base font-[600] mb-2">{label}</label>
      <input type="text" id={name} {...rest} {...register(name, {required: true})} className="block w-full rounded-full bg-[#F9FAFB] border-2 border-[#EAECF0] p-4 focus:outline-lcc-yellow placeholder:text-[#98A2B3]" />
    </div>

  )
}

export {Input};