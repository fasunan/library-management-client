import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebook, FaFacebookMessenger } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-neutral-content mt-10">
  <aside>
    <img className="w-20 rounded-sm" src="https://i.ibb.co/fDZSx7R/4851043.jpg" alt="" />
    <p className="font-bold">
     Welcome to AL MAUN LIBRARY <br/>Explore, Borrow, and Enjoy the World of Books!
    </p>
    <p>We believe in the magic of books and their ability to transport you to different worlds, <br /> broaden your horizons, and provide a sense of escape and adventure.</p> <br />
    <p>Copyright © 2023 - All right reserved</p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4 text-4xl">
      <a className='text-red-600'><AiFillYoutube></AiFillYoutube></a> 
      <a className='text-blue-600'><FaFacebook></FaFacebook></a> 
      <a className='text-rose-600'><FaFacebookMessenger></FaFacebookMessenger></a> 
      
    </div>
  </nav>
</footer>
    );
};

export default Footer;