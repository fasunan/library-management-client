import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import { CiDark } from 'react-icons/ci';

const Home = () => {
  const [theme, setTheme] = useState("light");
  const bookCategory = useLoaderData();


  // forDark theme
  useEffect(() => {
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}, [theme]);

const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");

};

  return (
    <div className="dark:bg-black">
      <div>
        <Banner></Banner>
      </div>
      <div className="-mt-14 absolute ml-8 ">
                <button onClick={handleChangeTheme} className="btn btn-sm border-none rounded-3xl bg-transparent text-purple-400">
                    Dark Mode <CiDark className="text-lg"></CiDark>
                </button>
            </div>

      <h2 className="text-5xl font-bold my-10 text-center text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-[#560319]">
        All Books By Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookCategory &&
          bookCategory?.map((category) => (
            <div key={category._id}>
              <div className="card w-96 image-full ">
                <figure>
                  <img src={category.image} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center my-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#43BFC7] to-[#12E193]">
                    {category.category}
                  </h2>
                  <div className="card-actions justify-center">
                    <Link to={`/${category.category}`}>
                      <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Explore Category
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
