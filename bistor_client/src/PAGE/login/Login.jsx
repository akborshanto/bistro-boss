import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import UseAuth from "../../HOOK/Auth/UseAuth";
import UseAxiosPublic from "../../HOOK/AXIOS/AxiosPublic";
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { user, gogoleLogin, signIn } = UseAuth();
  // const ref=useRef(null)//e.target.value same
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";
  /* axios public */
  const axiosPublic = UseAxiosPublic();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   // console.log(password, email);
    signIn(email, password).then((res) => {
      /* email backhand */
      /* user info google  */


      // navigate(from, { replace: true });
    });
  };
  /* login with googl */

  /* catthtcha  */
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  /* handleUserCaptcha */
  const handleUserCaptcha = (e) => {
    const user_Captcha = e.target.value;
   // console.log(user_Captcha);
    if (validateCaptcha(user_Captcha)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleGoogle = () => {
    gogoleLogin()
    
    .then((res) => {

      const userInfo = {
        email: res?.user?.email,
        name: res?.user?.displayName,
      };
      navigate("/");
      /* axios */
      axiosPublic.post('/users', userInfo)
      .then((res) => {
 

        //console.log(res);
      });


      navigate("/login", { state: { from: location } });
    });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Link to="/register">
              <h1>REGISTYER</h1>
            </Link>

            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
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
                  required
                  name="password"
                />

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Captha</span>
                  </label>
                  <LoadCanvasTemplate />
                  <input
                    onBlur={handleUserCaptcha}
                    type="text"
                    placeholder=" type the text captha above..."
                    className="input input-bordered"
                    required
                    name=" captha"
                  />
                </div>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={disabled}>
                  Login
                </button>
              </div>
            </form>
            <button className="btn btn-primary" onClick={handleGoogle}>
              eGooglLogin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
