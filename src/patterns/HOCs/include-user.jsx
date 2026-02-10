import { useState, useEffect } from "react";
import { axiosInstance } from "../../data/axiosInstance";

export const includeUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axiosInstance.get(`/users/${userId}`);
        setUser(response.data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
};
