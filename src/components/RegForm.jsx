/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const RegForm = () => {
  return (
    <div className="hidden h-full sm:w-[50vw] sm:mx-auto flex justify-center items-center">
      <iframe
        className="w-full h-full"
        src="https://docs.google.com/forms/d/e/1FAIpQLScxi3wVMNZItvzEIDW7TeujCmxuuiZjkYwAA_-9Es1V9yd1lw/viewform?embedded=true"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default RegForm;
