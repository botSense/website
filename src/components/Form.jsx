/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Form = () => {
  return (
    <div
      name="registration"
      className="w-full h-[75vh] bg-[#0d0e0e] text-gray-300 flex justify-center items-center"
    >
      <iframe
        className="w-full sm:w-[90%] h-full"
        src="https://docs.google.com/forms/d/e/1FAIpQLScxi3wVMNZItvzEIDW7TeujCmxuuiZjkYwAA_-9Es1V9yd1lw/viewform?embedded=true"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Form;