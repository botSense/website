import React from "react";
import { Zoom } from "react-awesome-reveal";

const Footer = () => {
  return (
    <Zoom>
      <div className="w-full h-full text-center">
        <p className="text-gray-500 p-5">
          ©2023 The botsense Company. All rights reserved. Designed by{" "}
          <a
            href="https://dhanushkumarshetty.com"
            target="blank"
            className="underline underline-offset-8 hover:text-yellow-600"
          >
            dewebdev Creations
          </a>
        </p>
      </div>
    </Zoom>
  );
};

export default Footer;
