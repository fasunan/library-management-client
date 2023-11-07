import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProviders";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOutUser().then().catch();
  };
  const links = (
    <>
      <li>
        {" "}
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        {" "}
        <NavLink to={"/addBook"}>Add Book</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/showAllBooks"}>All Books</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/BorrowedBooks"}>Borrowed Books</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-neutral-content">
        <div className="flex ml-4">
          <img
            className="w-14 rounded-md"
            src="https://i.ibb.co/fDZSx7R/4851043.jpg"
            alt=""
          />
          <span>
            <h2 className="text-base font-bold ml-2">Al-Moun Library</h2>
          </span>
        </div>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-success lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold  text-rose-700">
            {links}
          </ul>
        </div>
        <div className="navbar-end mr-5">
          <p>{user?.displayName}</p>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>

          {user ? (
            <button
              onClick={handleLogOut}
              className="h-9 w-16 rounded bg-gradient-to-r from-rose-500 to-green-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
            >
              Sign Out
            </button>
          ) : (
            <Link to={"/login"}>
              <button className=" h-9 w-16 rounded bg-gradient-to-r from-rose-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
                LogIn
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
