import { selector } from "recoil";
import axios from "axios";

export const userBalance = selector({
  key: "userBalance",
  get: async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User is not authenticated. Token is missing.");
      }

      const response = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error("Error fetching user balance:", err);
      throw err;
    }
  },
});
