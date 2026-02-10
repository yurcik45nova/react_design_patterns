import { useEffect, useState } from "react";
import { axiosInstance } from "../../data/axiosInstance";

export const includeUpdatableUser = (Component, userId) => {
  return (props) => {
    const [initialUser, setInitialUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axiosInstance.get(`/users/${userId}`);
        setInitialUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = (updates) => {
      setUser({ ...user, ...updates });
    };

    const onPostUser = async () => {
      const response = await axiosInstance.post(`/users/${userId}`, { user });
      setInitialUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(initialUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    );
  };
};
