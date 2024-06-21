import React from "react";
// import { Link } from 'react-scroll';
// import ignitra from "../assests/ignitra.jpg";
import botsense from "../assests/botsense-internship.jpeg";
// import IMG2 from "../assests/img2.jpg";
// import IMG3 from "../assests/img3.jpg";
// import IMG4 from "../assests/img4.jpg";
import {Fade} from "react-awesome-reveal";

const Home = () => {
  return (
    <Fade>
      <div name='home' className='md:h-full h-[50vh] w-full relative'>
        <img src={botsense} className='h-vh w-screen brightness-50 ' alt='' />
      </div>
    </Fade>
  );
};

export default Home;
