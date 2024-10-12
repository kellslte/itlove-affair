import axios from "axios";

export const baseUrl = `https://wedding-gifts-api.onrender.com/api/v1`;

export const donateCash = async (donation: any) => {
    return await axios({
      method: "POST",
      url: `${baseUrl}/donate/cash`,
      data: donation,
    });
  };