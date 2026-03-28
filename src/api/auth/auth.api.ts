import axiosClient from "../axios.client";

const prefixPath = "auth";

export const signinApi = (data: any) => {
  return axiosClient.post(`${prefixPath}/signin`, JSON.stringify(data));
};

export const signupApi = (data: any) => {
  return axiosClient.post(`${prefixPath}/signup`, data);
};
