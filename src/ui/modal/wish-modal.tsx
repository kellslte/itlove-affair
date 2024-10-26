import React, { useState, useEffect } from "react";
import { Input } from "../input/input";
import { Textarea } from "../input/textarea";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendAWishSchema } from "./components/makeAWishSchema";
import { sendWishes } from "../../api/api";
import { isAxiosError } from "axios";
import { toast } from "sonner";

interface WishModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const WishModal: React.FC<WishModalProps> = ({ onClose, isOpen }) => {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const methods = useForm<z.infer<typeof sendAWishSchema>>({
    resolver: zodResolver(sendAWishSchema),
    mode: "onChange",
  });

  const { handleSubmit, formState, reset } = methods;
  const { isValid } = formState;

  const sendWish = async (data: z.infer<typeof sendAWishSchema>) => {
    setSubmitting(true);
    try {
      const response = await sendWishes(data);

      if (response.status === 201) {
        setTimeout(() => {
          setSubmitting(false);
          reset();
          onClose();
          toast.success("Thank you for celebrating with us!");
        }, 2000);
      }
    } catch (err: any) {
      if (isAxiosError(err)) {
        setSubmitting(false);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Disable scroll when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll when the modal is closed
      document.body.style.overflow = "";
    }

    // Cleanup to ensure scrolling is re-enabled if the modal unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[500] transition duration-150 ease-in-out bg-black bg-opacity-50 pt-[10rem] mxs:pt-[5rem]">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg mx-auto py-5 px-7">
        <div className="flex flex-col">
          <div className="w-full flex justify-between">
            <h3 className="text-xl font-semibold">Send Us a Wish</h3>
            <button
              onClick={onClose}
              className="relative w-6 h-6 flex justify-center items-center"
            >
              <span className="absolute w-4 h-0.5 bg-pastor-blue transform rotate-45"></span>
              <span className="absolute w-4 h-0.5 bg-pastor-blue transform -rotate-45"></span>
            </button>
          </div>
          <p>
            Have any message for us? Drop your wishes- we’ll love to hear from
            you.
          </p>
        </div>

        <div className="mt-6">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(sendWish)}>
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                name="name"
                type="text"
              />
              <Textarea
                placeholder="Enter your wish here"
                label="Write your wish here"
                name="message"
              />
              <button
                disabled={!isValid || submitting}
                className={`${
                  !isValid || submitting ? "bg-[#e0b80780]" : "bg-[#E0B807]"
                } w-full p-4 rounded-[2.5rem] text-white font-[500] text-xl`}
              >
                {submitting === false ? "Send Message" : "Sending..."}
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export { WishModal };
