import {z} from "zod";


const phoneNumberRegExp = /^(\+\s?\d{1,3}\s?)?(\(\d{1,4}\)\s?)?[0-9\s]{9,}$/;

export const makeAWishSchema = z.object({
  fullname: z.string().min(1, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter your email address in the format: text@example.com" }),
  phonenumber: z.string().regex(phoneNumberRegExp, { message: 'Phone number entered is not valid' }),
  amount: z.number().nonnegative({message: "Amount must be a negative number"}).min(1, {message: "Amount must be at least 1"})
})

export const sendAWishSchema = z.object({
  name: z.string().min(1, {message: "Please, enter your full name"}),
  message: z.string().min(1, {message: "Please, leave a wish for us"})
})