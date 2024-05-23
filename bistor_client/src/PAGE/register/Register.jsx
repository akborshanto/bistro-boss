import React from "react";
import UseAuth from "../../HOOK/Auth/UseAuth";
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../HOOK/AXIOS/AxiosPublic";

const Register = () => {
/* axios public */
const axiosPublic=UseAxiosPublic()

  const { user, createUser,updateProfileUser} = UseAuth();
const navigate=useNavigate()
  /* react hhook form */
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{


createUser(data.email,data.password,data.name,data.photoURL)
.then(result=>{
  console.log(result.user)

  updateProfileUser(data.name,data.photoURL)
  .then(result=>{

/* user info */
const userInfo={
  name:data.name,
  email:data.email
}

/* axios post */
axiosPublic.post('/users',userInfo)
.then(res=>{
if(res.data.insertedId >0){
  console.log("data added")
  
}


})

    Swal.fire({
      title: "SUCCEFULLY UPDATED ?",
      width: 600,
      padding: "3em",
      color:"blue",
      background: "#fb5200 url(/images/trees.png)",
      backdrop: `
        rgba(30,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    });
navigate("/")
//console.log(result)
  })
/*  */

navigate("/")
})



 } 





console.log(user)

  

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email, password);
  //   /* CREATE A USER BY FIREBASE */
  //   createUser(email, password)
  //     .then((res) => {
  //       console.log(res.user);
  //     })
  //     .then((err) => {
  //       console.log(err);
  //     });
  //   }
  return (

    <div>
<Helmet>
<title>Register</title>
</Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">REGISTER NOW</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>

          {errors.name && <h1 className="text-red-500 font-bold">Name is required..</h1>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
          
                  name="name"
                  {...register("name",{required:true})} 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PHOTO</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
          
                  name="photo"
                  {...register("photoURL",{required:true})} 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
           
                  name="email"
                  {...register("email",{required:true})}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
              
                  name="password"
                  {...register("password",{required:true})} 
                />
              </div>
              <div className="form-control mt-6">
              <input type="submit" className="btn btn-info"></input>
              </div>
       <Link to='/login'>
       <h3>ALERAY AN ACCOUNT</h3>
       </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
