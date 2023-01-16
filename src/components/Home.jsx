import React from "react";
import { Link } from "react-scroll";
// import ignitra from "../assests/ignitra.jpg";
import botsense from "../assests/botsense.jpeg";
// import IMG2 from "../assests/img2.jpg";
// import IMG3 from "../assests/img3.jpg";
// import IMG4 from "../assests/img4.jpg";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <Fade>
      <div name="home" className="md:h-full h-[50vh] w-full relative">
        <img src={botsense} className="h-full w-screen brightness-50 " alt="" />
        <div className="animate-pulse hover:bg-[whitesmoke] hover:text-[#7e664d] absolute top-[70%] sm:top-[60%] sm:left-[12%] ml-2 text-white font-bold z-10  text-2xl ">
          <Link to="internship" smooth={true} duration={2000} offset={-80}>
            <p className=" flex  p-5 justify-center items-center border w-full  cursor-pointer">
              <p>Enroll Now</p>
            </p>
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default Home;
