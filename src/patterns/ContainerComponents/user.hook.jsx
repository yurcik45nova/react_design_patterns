import { useState, useEffect } from "react";
import { axiosInstance } from "../../data/axiosInstance";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(`/users/${userId }`);
      setUser(response.data);
    })();
  }, [userId]);

  return user;
};
