import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../assests/logo.png";
const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  function handleToggleClick() {
    setToggle(!Toggle);
  }

  return (
    <div className=" z-10 fixed w-full h-[80px] bg-[#0d0e0e] flex  items-center justify-between text-gray-300">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="flex items-center h-10 cursor-pointer"
      >
        <img src={logo} alt="logo" className="h-20 w-20" />
        <p className=" text-white">botSense</p>
      </Link>

      {/* Start: Navigation Menu Links */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-150}>
            About
          </Link>
        </li>
        <li>
          <Link to="vision" smooth={true} duration={500} offset={-150}>
            Vision
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} offset={-150}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-30}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="internship" smooth={true} duration={500} offset={-100}>
            Internship
          </Link>
        </li>
      </ul>
      {/* End: Navigation Menu Links */}

      <div onClick={handleToggleClick} className="md:hidden px-3 z-10 text-3xl">
        {Toggle ? <FaTimes /> : <FaBars />}
      </div>

      {/* Start: Mobile Navigation Menu Links */}
      <ul
        className={
          Toggle
            ? "bg-[#0d0e0e] top-0 left-0 absolute w-full h-screen flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleToggleClick}
            to="home"
            smooth={true}
            duration={500}
            offset={-300}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleToggleClick}
            to="about"
            smooth={true}
            duration={500}
            offset={-150}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleToggleClick}
            to="vision"
            smooth={true}
            duration={500}
            offset={-150}
          >
            Vision
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleToggleClick}
            to="work"
            smooth={true}
            duration={500}
            offset={-150}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleToggleClick}
            to="contact"
            smooth={true}
            duration={500}
            offset={-30}
          >
            Contact
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleToggleClick}
            to="internship"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Internship
          </Link>
        </li>
      </ul>
      {/* End: Mobile Navigation Menu Links */}
    </div>
  );
};

export default Navbar;
