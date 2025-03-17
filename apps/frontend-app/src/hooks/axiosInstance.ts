import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api`,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

// Interceptors Response
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    console.error("Axios Error:", error);
    return Promise.reject(error); // Reject instead of returning the error
  }
);

export default axiosInstance;
