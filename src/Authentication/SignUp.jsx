import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProviders";

const auth = getAuth();

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { userCreate } = useContext(AuthContext);
  const handleCreateAccount = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, name);

    setError("");
    setSuccess("");
    if (password.length < 6) {
      setError("");

      toast.error("Password must be at least 6 characters long", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError();
      toast.info("Password must contain at least one uppercase letter", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      setError();
      toast.error("Password must contain at least one special character", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    userCreate(email, password)
      .then((result) => {
        //
        // const user={email}
        // fetch('', {
        //   method: 'POST',
        //   headers:{
        //     'content-type' : 'application/json'
        //   },
        //   body: JSON.stringify(user)
        // })
        // .then(res=>res.json())
        //     .then(data=>{
        //       console.log(data)
        //     })
        //

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        setSuccess();

        toast.success("Account created successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="text-black bg-white-400 p-16">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-4xl text-blue-500 ">
              Its easy to Create an Account !!!
            </h1>
            <p className="text-slate-800 font-medium">
              Already Have an Account? please
              <Link to={"/login"}>
                <button className="btn btn-link">Login</button>
              </Link>
            </p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleCreateAccount}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered border-2 border-purple-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    required
                    type="photo"
                    name="photo"
                    placeholder="photoURL"
                    className="input input-bordered border-2 border-purple-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered border-2 border-purple-500"
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
                    className="input input-bordered border-2 border-purple-500"
                  />
                  <span
                    className="absolute mt-12 mr-8 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className="form-control mt-6">
                  {/* bg-gradient-to-r from-sky-900 via-indigo-900 to-purple-900 */}
                  <button className=" btn btn-primary text-red-400 text-2xl font-serif rounded bg-gradient-to-r from-sky-900 via-indigo-900 to-purple-900">
                    Sign Up
                  </button>
                </div>
              </form>
              <ToastContainer></ToastContainer>
              {error && <p>{error}</p>}
              {success && <p>{success}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
