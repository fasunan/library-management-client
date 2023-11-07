import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Main;
