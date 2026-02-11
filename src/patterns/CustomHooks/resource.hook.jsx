import { useState, useEffect } from "react";
import { axiosInstance } from "../../data/axiosInstance";

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return resource;
};
