import React from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  customClassname?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  
  name,
  placeholder,
  rows = 6,
  customClassname,
  label,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errMessage = errors[name]?.message;

  const textareaClass = clsx(
    "resize-none w-full p-4 outline-0 border transition ease-in-out duration-150 rounded-xl focus:outline-2 focus:outline-lcc-yellow",
    customClassname
  );

  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={name}
        className="text-pastor-blue text-base font-[600] mb-2"
      >
        {label}
      </label>
      <textarea
        id={name}
        className={textareaClass}
        placeholder={placeholder}
        rows={rows}
        {...register(name, {required: true})}
        {...props}
      ></textarea>
      {errMessage && typeof errMessage === "string" && (
        <div className="text-red-500 text-xs">{errMessage}</div>
      )}
    </div>
  );
};

export { Textarea };
