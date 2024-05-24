import axios from "axios";
import React from "react";
import UseAuth from "./../Auth/UseAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

const UseAxiosSecure = () => {
  const { logOuts } = UseAuth();
  const navigate = useNavigate();
  /* request interceptor to add authoraization header for every secure call to the api */
  axiosSecure.interceptors.request.use(
    function (config) {
    //  console.log("STOP BY INTERSEDCPT");
      const token = localStorage.getItem("access_token");
//console.log("requrest soppen by intercepots", token);
      config.headers.authorization = `Bearer ${token}`;

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  /*interceptors 401 and 403 status*/

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
//console.log("status error in the intercepot", error);
      const status = error.response.status;
      //.log(status);
      /* 401,401 logut on the user */
      if (status === 401 || status === 403) {
        await logOuts();
        navigate("/login");
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default UseAxiosSecure;
