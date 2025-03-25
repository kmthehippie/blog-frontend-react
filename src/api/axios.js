import axios from "axios";

const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

export default axios.create({
  baseURL: baseUrl,
});

// This is for requesting into authorized routes
export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
