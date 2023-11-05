import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Main;
