import React from "react";
import { Link } from "react-scroll";
import ignitra from "../assests/ignitra.jpg";
// import IMG2 from "../assests/img2.jpg";
// import IMG3 from "../assests/img3.jpg";
// import IMG4 from "../assests/img4.jpg";
import logo from "../assests/logo.png";
const Home = () => {
  return (
    <div name="home" className="bg-[#0d0e0e] relative">
      <img src={ignitra} className="w-screen h-screen brightness-50" alt="" />
      <div className="absolute top-[76.5%] text-white font-bold z-10  w-full text-center text-lg ">
        <Link to="about" smooth={true} duration={500} offset={-80}>
          <p className="backdrop-blur-sm underline underline-offset-8 flex sm:flex-row flex-col p-1 justify-center items-center mx-auto  bg-[#00001e] border p w-[17%] lg:gap-2 cursor-pointer">
            <img src={logo} alt="" className="h-10 w-10 animate-spin" />
            <p>Know More</p>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
