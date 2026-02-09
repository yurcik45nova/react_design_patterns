import axios from "axios"

export const axiosInstance =  axios.create({
      baseURL: "http://localhost:9090",
      timeout: 15000,
      headers: {
        "Content-Type": "application/json",
      },
    })