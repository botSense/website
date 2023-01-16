/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Form = () => {
  return (
    <div
      name="internship"
      className="w-full h-[75vh] flex justify-center items-center"
    >
      <iframe
        className="w-full sm:w-[90%] h-full p-4"
        src="https://docs.google.com/forms/d/e/1FAIpQLScxi3wVMNZItvzEIDW7TeujCmxuuiZjkYwAA_-9Es1V9yd1lw/viewform?embedded=true"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Form;
