import { FcReading } from "react-icons/fc";

const Banner = () => {
  return (
    <div className="carousel w-full">
      {/* slide 1 */}
      <div id="slide1" className="carousel-item  relative w-full h-[500px]">
        <img
          src="https://i.ibb.co/DpfNMY8/banner-1.jpg"
          className="w-full rounded-b-lg"
        />

        <div className="absolute h-full flex items-center left-0 rounded-b-lg right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          {/* text area */}
          <div className="text-white space-y-5 text-center w-full">
            <h2 className="text-6xl text-white font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43BFC7] to-[#12E193]">
                Al-Moun
              </span>
              Library
            </h2>
            <h3 className="text-xl font-semibold">
              Where Every Book is a New Adventure
            </h3>
            <p className="">
              Dive into captivating stories, gain knowledge, and let your
              imagination flourish. <br />
              Start your reading journey with us today
            </p>

            <div>
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <span className="flex text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-pink-400 to-[#560319]">
                  Lets Read{" "}
                  <FcReading className="text-2xl mt-[2px] ml-2"></FcReading>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* next and prev area */}
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-[500px]">
        <img
          src="https://i.ibb.co/qY9pWpP/banner-2.jpg"
          className="w-full rounded-b-lg"
        />

        <div className="absolute h-full flex items-center left-0 rounded-b-lg right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-5 text-center  w-full  ">
            <h2 className="text-6xl text-white font-bold">
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43BFC7] to-[#12E193]">
                Al-Moun
              </span>{" "}
              Library
            </h2>
            <h3 className="text-xl">Where Every Book is a New Adventure</h3>
            <p className="">
              Dive into captivating stories, gain knowledge, and let your
              imagination flourish. <br />
              Start your reading journey with us today.
            </p>

            <div>
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <span className="flex text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-pink-400 to-[#560319]">
                  Lets Read{" "}
                  <FcReading className="text-2xl mt-[2px] ml-2"></FcReading>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-[500px]">
        <img
          src="https://i.ibb.co/6g2zWHN/banner-4.jpg"
          className="w-full rounded-b-lg"
        />

        <div className="absolute h-full flex items-center left-0 rounded-b-lg right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-5 text-center w-full">
            <h2 className="text-6xl text-white font-bold">
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43BFC7] to-[#12E193]">
                Al-Moun
              </span>{" "}
              Library
            </h2>
            <h3 className="text-xl">Where Every Book is a New Adventure</h3>
            <p className="">
              Dive into captivating stories, gain knowledge, and let your
              imagination flourish. <br />
              Start your reading journey with us today.
            </p>

            <div>
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <span className="flex text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-pink-400 to-[#560319]">
                  Lets Read{" "}
                  <FcReading className="text-2xl mt-[2px] ml-2"></FcReading>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* slide 4 */}
      <div id="slide4" className="carousel-item relative w-full h-[500px]">
        <img
          src="https://i.ibb.co/5v3Gv9J/banner-3.jpg"
          className="w-full rounded-b-lg"
        />

        <div className="absolute h-full flex items-center left-0 rounded-b-lg right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-5 text-center w-full  ">
            <h2 className="text-6xl text-white font-bold">
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43BFC7] to-[#12E193]">
                Al-Moun
              </span>{" "}
              Library
            </h2>
            <h3 className="text-xl">Where Every Book is a New Adventure</h3>
            <p className="">
              Dive into captivating stories, gain knowledge, and let your
              imagination flourish. <br />
              Start your reading journey with us today.
            </p>

            <div>
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <span className="flex text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-pink-400 to-[#560319]">
                  Lets Read{" "}
                  <FcReading className="text-2xl mt-[2px] ml-2"></FcReading>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
