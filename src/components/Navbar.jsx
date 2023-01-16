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
    <div className="container-fluid mx-auto  flex justify-between items-center text-white h-20 sticky top-0 bg-black shadow-md shadow-gray-900 z-30 ">
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-100}
        className="flex items-center h-10 cursor-pointer"
      >
        <img src={logo} alt="logo" className="h-20 w-20 animate-pulse" />
        <p className=" text-white animate-pulse">botSense</p>
      </Link>

      {/* Start: Navigation Menu Links */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-100}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="vision" smooth={true} duration={500}>
            Vision
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} offset={-50}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="internship" smooth={true} duration={500}>
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
            offset={-100}
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
            offset={-100}
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
