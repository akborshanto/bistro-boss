import React from "react";
import UseCart from "../../../HOOK/TENSTACKQUERY/UseCart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../HOOK/AXIOS/UseAxiosSecure";

const Cart = () => {
  const [cart, refetch] = UseCart();
  const axiosSecure = UseAxiosSecure();
  const totalPrice = cart.reduce((total, currentValue, idx, arr) => {
    return total + currentValue.price;
  }, 0);

  /*  i will delete specifiq/appointed,Earmarked a cart Out of database */
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    
    .then((result) => {
      /* delete the data out of specifiq cart */
      axiosSecure
        .delete(`/carts/${id}`)

        .then((result) => {
          if (result.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            refetch();
          }
        });
    });
  };

  // console.log(totalPrice)
  // console.log(cart)
  return (
    <div className="">
      <div>
        <h1>CART ITEM: {cart.length}</h1>
        <h1>{totalPrice}</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((singleCart) => {
            //  console.log(singleCart);
              const { category, image, price, name, email, recipe, _id } =
                singleCart || {};
              return (
                <tr key={Math.random()}>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={image} alt={name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{category}</div>
                        <div className="text-sm opacity-50" title={recipe}>
                          {recipe.substring(0, 30) + "...."}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {name}
                    <br />
                  </td>
                  <td>{price}</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDelete(_id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Cart;
