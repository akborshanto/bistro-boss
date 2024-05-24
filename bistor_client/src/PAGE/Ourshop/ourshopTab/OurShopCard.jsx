import React, { useContext, useState } from "react";
import UseMenu from "../../../HOOK/useMenu/UseMenu";
import UseAuth from "./../../../HOOK/Auth/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axions from "axios";
import UseAxiosSecure from "../../../HOOK/AXIOS/UseAxiosSecure";
import UseCart from "../../../HOOK/TENSTACKQUERY/UseCart";
const OurShopCard = ({ item }) => {
  /* axios post method from axios post AXISOSECURE CONTEXt */
  const axiosSecure = UseAxiosSecure();
  const from = location.state?.form?.pathname || "/login";
  //recipei/apppliance,provision,device,wrincle,loophole= khabar toireir pronani,koshol
  //const axios = require('axios');
/* refetch data from database */
const [,refetch]=UseCart()
  const { recipe, image, category, price, name } = item;
  const { user } = UseAuth();
  const navigate = useNavigate();
  const loacation = useLocation();
  const handleAddToCard = (e) => {
    if (user && user?.email) {
      const cardItem = {
        recipe,
        image,
        category,
        price,
        name,

        email: user?.email,
      };

      /*post the data by axios */
      axiosSecure
        .post("/ourShopCart", cardItem)

        .then((res) => {
          if (res?.data.insertedId) {
            //console.log(res.data);
            Swal.fire({
              title: `Name:${name} SUCCESSFULL ADD THE DATA`,
              showClass: {
                popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
              },
              hideClass: {
                popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
              },
            });

/* refetch data to udated food  cart increase item cart count */
refetch()



          }
        });
    } else {
      Swal.fire({
        title: "Are you sure AdD to the CaRD?",
        text: "You won't be able to ADD to THE CARD !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please Login",
      }).then((result) => {
        if (result.isConfirmed) {
          /* navigate problem */
          navigate(from, { replace: true });
          Swal.fire({
            title: "ADDEDD",
            text: "Your card has been Addedd.",
            icon: "success",
          });
        }
      });
    }
  };

  const { loading } = UseMenu();

  return (
    <div>
      {loading ? (
        <h1>LOADING..................</h1>
      ) : (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions">
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCard(item)}
              >
                Add To Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurShopCard;
