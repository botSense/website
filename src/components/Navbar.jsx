import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillHome,
  AiFillProject,
} from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { GiArchiveRegister, GiNightVision } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar text-white flex gap-10 text-2xl justify-between items-center p-4 ">
      <div className="navbar__left cursor-pointer">
        <img src="" alt="company__logo" className="navbar__logo" />
      </div>
      <div className="hidden lg:flex navbar__middle">
        <ul className="flex gap-4 text-slate-400">
          <li className="text-white cursor-pointer">Home</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Registration</li>
          <li className="cursor-pointer">Vision</li>
          <li className="cursor-pointer">Certificates</li>
        </ul>
      </div>
      <div className="hidden lg:flex navbar__right cursor-pointer">
        <p>GET IN TOUCH</p>
      </div>
      <div
        className="lg:hidden flex navbar__right cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Nav Start */}
      <div
        className={
          toggle
            ? "mobile__nav absolute left-0 top-[10vh] bg-[whitesmoke] w-full h-screen"
            : "hidden"
        }
      >
        <ul className="flex flex-col gap-14 text-black h-full justify-center items-center text-5xl">
          <li className="cursor-pointer flex gap-2">
            <AiFillHome />
            <p>Home</p>
          </li>
          <li className="cursor-pointer flex gap-2">
            <AiFillProject />
            <p>Projects</p>
          </li>
          <li className="cursor-pointer flex gap-2">
            <FcAbout />
            <p>About</p>
          </li>
          <li className="cursor-pointer flex gap-2">
            <GiArchiveRegister />
            <p>Registration</p>
          </li>
          <li className="cursor-pointer flex gap-2">
            <GiNightVision />
            <p>Vision</p>
          </li>
          <li className="cursor-pointer flex gap-2">
            <GrCertificate />
            <p>Certificates</p>
          </li>
        </ul>
      </div>
      {/* Mobile Nav End  */}
    </div>
  );
};

export default Navbar;
