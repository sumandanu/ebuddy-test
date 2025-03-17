import axiosInstance from "../hooks/axiosInstance";
import useAxiosWithAuth from "../hooks/useAxiosWithAuth";

export const loginUser = async (email: string, password: string) => {
  try {
    return await axiosInstance.post(`/v1/auth/signin`, {
      email,
      password,
    });
  } catch (err: any) {
    const errorMessage = err.response?.data?.message || "Failed to login";
    throw new Error(errorMessage);
  }
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axiosInstance.post(`/auth/register`, {
      name,
      email,
      password,
    });
    // const data = response.data;
    return response;
  } catch (err: any) {
    const errorMessage = err.response?.data?.message || "Failed to login";
    throw new Error(errorMessage);
  }
};

export const getProfile = async () => {
  const axiosWithAuth = useAxiosWithAuth();
  try {
    return await axiosWithAuth.get(`/v1/auth/me`);
  } catch (err: any) {
    const errorMessage = err.response?.data?.message || "Failed to login";
    throw new Error(errorMessage);
  }
};
