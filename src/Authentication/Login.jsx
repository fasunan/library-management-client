import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProviders";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [logError, setLogError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const { userLogin, userGoogleLogin } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        setSuccess("");
        toast.success("Login successful", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      })
      .catch((error) => {
        console.error(error);
        setLogError(error.message);
      });
  };
  const handleGoogleLogIn = () => {
    userGoogleLogin()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-black p-16">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-5xl text-blue-400 mb-10">Login please</h1>
            <p className="text-slate-800 font-medium ">
              Do not Have an Account? please
              <Link to={"/signUp"}>
                <button className="btn btn-link">Create Account</button>
              </Link>
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered border-2 border-pink-600"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered border-2 border-pink-600"
                  />
                  <span
                    className="absolute mt-12 mr-8 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary  text-red-500 text-2xl font-serif rounded bg-gradient-to-r from-sky-900 via-indigo-900 to-purple-900 ">
                    Login
                  </button>
                </div>
              </form>

              {logError && <p>{logError}</p>}
              {success && <p>{success}</p>}
              <div></div>
              <p className="text-pink-600">Or you can log in with </p>
              <div className="gap-4 font-serif flex text-base">
                <button onClick={handleGoogleLogIn} className="btn w-full">
                  {" "}
                  <FcGoogle className="text-lg"></FcGoogle>Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
