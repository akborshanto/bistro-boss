import React from "react";
import UseTitle from "../../../HOOK/TitelHook/UseTitle";
import UseMenu from "./../../../HOOK/useMenu/UseMenu";
import { Swal } from "sweetalert2";
import UseAxiosSecure from "../../../HOOK/AXIOS/UseAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refaloading, refetch] = UseMenu();
  const axiosSecure = UseAxiosSecure();

  /* handle delete */
  const handleDelete = async (id) => {
    console.log(id);

    const menuDelet = await axiosSecure.delete(`/reciepe/${id}`).then((res) => {
      console.log(res);

      if (res.data.deletedCount > 0) {
        //    console.log(menuDelet)
        refetch();
      }
    });
  };
  return (
    <div>
      <UseTitle heading="MANAGE ITEMS" statement="Hurry Up"></UseTitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Reciepe</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((menu, idx) => {
              //console.log(menu);
              const { _id, image, price, recipe, name, category } = menu || {};
              return (
                <tr key={Math.random()}>
                  <th>
                    <label>{idx + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={image} alt={name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{category}</div>
                        <div className="text-sm opacity-50">{price}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {name}
                    <br />
                    <span className="badge badge-ghost badge-sm" title={recipe}>
                      {recipe?.substring(0, 30)}
                    </span>
                  </td>
                  <td>
                  <Link to={`/dashboard/updateItems/${_id}`}>
UPDAT EITEMS
                  </Link>
                  </td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs "
                      onClick={() => handleDelete(_id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}

            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
