import axios from "axios";

export const baseUrl = process.env.REACT_APP_API_URL;

export const donateCash = async (donation: any) => {
  return await axios({
    method: "POST",
    url: `${baseUrl}/donate/cash`,
    data: donation,
  });
};

export const fetchGifts = async () => {
  return await axios({
    method: "GET",
    url: `${baseUrl}/gifts`,
  });
};

export const donateGift = async (donation: any, id: string) => {
  return await axios({
    method: "POST",
    url: `${baseUrl}/donate/${id}/gifts`,
    data: {
      ...donation,
      callback_url: `${window.location.origin}/donate/success`,
    },
  });
};

export const updateTransactionDetails = async (reference: string) => {
  return await axios({
    method: "GET",
    url: `${baseUrl}/donate/transaction/${reference}/confirm`,
  });
}