import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const Vision = () => {
  return (
    <div
      name="vision"
      className="w-full h-screen flex flex-col justify-center items-center text-center p-2 gap-5 text-gray-300"
    >
      <Zoom>
        <h1 className="text-gray-300 text-4xl font-bold inline border-b-4 border-yellow-600">
          Vision
        </h1>
      </Zoom>
      <Fade>
        <p>
          botSense will be the first choice solution partner in the technology
          sector providing advisory and digital solutions to businesses
          throughout the mid and large enterprises. We are proud to evaluate
          your use cases and make digital solutions to improve and automate
          operational processes by creating value from data and relationships
          between objects. We will become an integral part of our client’s
          success, collaborating with them to achieve their strategic objectives
          whilst creating long lasting business value through the delivery and
          management of their technology.
        </p>
      </Fade>
    </div>
  );
};

export default Vision;
