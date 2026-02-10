import { useState, useEffect } from "react";
import { axiosInstance } from "../../data/axiosInstance";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get("/current-user");
      setUser(response.data);
    })();
  }, []);

  return user;
};
