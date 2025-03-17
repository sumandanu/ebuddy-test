"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const useAxiosWithAuth = () => {
  const { data: session, update }: any = useSession();

  // Create an Axios instance
  const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        if (session?.accessToken) {
          config.headers.Authorization = `Bearer ${session.accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          // Refresh the token
          await update();
          // Retry the original request
          return axiosInstance(originalRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [session, update]);

  return axiosInstance;
};

export default useAxiosWithAuth;
