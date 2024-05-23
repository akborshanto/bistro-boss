import React from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../HOOK/AXIOS/UseAxiosSecure";
import Swal from "sweetalert2";

const AllUser = () => {
  /* axios secure */
  const axiosSecure = UseAxiosSecure();

  /* tenstach query */
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      //console.log(res.data)
      return res.data;
    },
  });

  /* handleMakeAdmin */
  const handleMakeAdmin = (user) => {
    /* axios secure */
    console.log(user._id);
    axiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });


      }
    });
  };

  /* handle deletae */
  const handleDelete = (user) => {
    // console.log(id)
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // })
      /* delete the data out of specifiq cart */

          /* delete the data out of specifiq cart */

          axiosSecure.delete(`/user/${user._id}`)
  
            .then((result) => {
              console.log(result.data)
              if (result.data.deletedCount > 0) {
          
                refetch();
              }

        });
    // .then((result) => {
    //   /* delete the data out of specifiq cart */

    //     .then((result) => {
    //       if (result.data.deletedCount > 0) {
    //         Swal.fire({
    //           title: "Deleted!",
    //           text: "Your file has been deleted.",
    //           icon: "success",
    //         });

    //         refetch();
    //       }
    //     });
    // });

    //axiosSecure.delete(`/user/:${id}`);
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <h1>ALL USER{users.length}</h1>
        <h1>TOTAL USER:</h1>
      </div>

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
              <th>Name</th>
              <th>email</th>
              <th>Users</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users?.map((user, idx) => {
              const { email, name, _id } = user;
              return (
                <tr key={Math.random()}>
                  <th>
                    <h3>{idx + 1}</h3>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {email}
                    <br />
                  </td>

                  {user?.role === "admin" ? (
                    "ADMIN"
                  ) : (
                    <td>
                      <button onClick={() => handleMakeAdmin(user)}>
                        Users
                      </button>
                    </td>
                  )}

                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDelete(user)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
