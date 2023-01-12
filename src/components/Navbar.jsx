import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  function handleToggleClick() {
    setToggle(!Toggle);
  }

  return (
    <div className=" z-10 fixed w-full h-[80px] bg-[#0d0e0e] flex  items-center justify-between text-gray-300">
      <div>
        <img src="" alt="logo" style={{ width: "125px", height: "135px" }} />
      </div>

      {/* Start: Navigation Menu Links */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
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
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="registration" smooth={true} duration={500}>
            Registration
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
            to="registration"
            smooth={true}
            duration={500}
          >
            Registration
          </Link>
        </li>
      </ul>
      {/* End: Mobile Navigation Menu Links */}
    </div>
  );
};

export default Navbar;
