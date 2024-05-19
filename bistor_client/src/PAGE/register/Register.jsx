import React from "react";
import UseAuth from "../../HOOK/Auth/UseAuth";
import { useForm } from "react-hook-form";

const Register = () => {
  /* react hhook form */
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{


  } ;

  const { user, createUser } = UseAuth();

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
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
