import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAxiosSecure, { axiosSecure } from "../AXIOS/UseAxiosSecure";
import UseAuth from "../Auth/UseAuth";

const UseCart = () => {
  const useAxiosSecure = UseAxiosSecure();
const {user}=UseAuth()
  const {refetch, data: cart = [] } = useQuery({
    queryKey: ["cart",user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
     // console.log(res);
      return res.data
    },
  });

  return [cart,refetch];
};

export default UseCart;
