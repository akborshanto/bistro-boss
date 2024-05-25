import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import UseAxiosSecure from "../../../../HOOK/AXIOS/UseAxiosSecure";
import UseAxiosPublic from "../../../../HOOK/AXIOS/AxiosPublic";
const IMG_HOISTIN = import.meta.env.VITE_IMAGE_BB;
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${IMG_HOISTIN}`;
const UpdateItem = () => {
  const axiosSecure = UseAxiosSecure();
  const axiosPublic=UseAxiosPublic()
  const { _id, name, image, recipe, category, price } = useLoaderData();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {

    //   console.log("data", data);
    //upload the image bb and get url
    const imageFile = { image: data.image[0] };
    //console.log(imageFile);
    const res = await axiosPublic.post(image_hoisting_api, imageFile, {
      headers: {
        "Content-type": "multipart/form-data",
      },





      
    });
/* data informatation */

if(res.data.success){

const menuItem={

name:data.name,
recipe:data.recipe,
price:parseFloat(data.price),
category:data.category,
image:res.data.data.display_url



}
//console.log(menuItem)

/* user axios secure */

const menuRes= await axiosSecure.patch(`/recipes/${_id}`,menuItem)


if(menuRes.modifiedCount >0){

  //show alert succ
 alert("succesfuul")
}
console.log(menuRes)


}

  };
  
  // console.log(data)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* name */}

        <label className="">Recipe Name</label>

        <input
          defaultValue={name}
          type="text"
          {...register("name", { required: true })}
          className="input input-bordered flex items-center gap-2"
          placeholder="name....."
        />

        {/* category  and price */}
        <div className="flex flex-col lg:flex-row  justify-between">
          <select
            defaultValue={recipe}
            {...register("category")}
            className="select select-primary w-full max-w-xs"
          >
            <option selected value="null">
              Select a Category
            </option>
            <option value="Salad">Salad</option>
            <option value="Soup">Soup</option>
            <option value="Pizza">Pizza</option>
            <option value="Dessert">Dessert</option>
            <option value="Drink">Drink</option>
          </select>
          {/* price */}

          <label className="input input-bordered flex items-center gap-2">
            Price
          </label>
          <input
            defaultValue={price}
            type="number"
            className="grow"
            placeholder="price"
            {...register("price", { required: true })}
          />
        </div>

        {/* text area */}

        <textarea
          className="textarea textarea-primary"
          placeholder="Text area"
          defaultValue={recipe}
          {...register("recipe", { required: true })}
        ></textarea>

        <label className="input input-bordered flex items-center gap-2">
          File Upload
        </label>

        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          {...register("image", { required: true })}
        />

        <button className=" btn btn-success ">Add Item</button>
      </form>
    </div>
  );
};

export default UpdateItem;
