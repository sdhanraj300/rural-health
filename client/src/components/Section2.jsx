import React, { useState } from "react";
import Card4 from "./Card4";

const Section2 = () => {
  const [activeDisplay, setActiveDisplay] = useState("display1");

  const handleButtonClick = (display) => {
    setActiveDisplay(display);
  };

  return (
    <div className=" bg-white h-[70rem] w-screen flex flex-col justify-center items-center mt-20">
      <div className="text text-6xl  font-bold ">
        The smarter route to
        <p className="ml-16">&nbsp; &nbsp; Healthcare.</p>
      </div>
      <div className="buttons m-4">
        <button
          className={`text-2xl border-2 border-teal-200 m-4 p-4 rounded-full transition-all duration-300 ease-out ${
            activeDisplay === "display1"
              ? "text-teal-500 border-teal-500 bg-teal-100"
              : "text-teal-500"
          }`}
          onClick={() => handleButtonClick("display1")}
        >
          Our Doctors
        </button>
        <button
          className={`text-2xl border-2 border-teal-200 m-4 p-4 rounded-full transition-all duration-300 ease-out ${
            activeDisplay === "display2"
              ? "text-teal-500 border-teal-500 bg-teal-100"
              : "text-teal-500"
          }`}
          onClick={() => handleButtonClick("display2")}
        >
          Our Patients
        </button>
        <button
          className={`text-2xl border-2 border-teal-200 m-4 p-4 rounded-full transition-all duration-300 ease-out ${
            activeDisplay === "display3"
              ? "text-teal-500 border-teal-500 bg-teal-100"
              : "text-teal-500"
          }`}
          onClick={() => handleButtonClick("display3")}
        >
          Our Reviews
        </button>
      </div>
      <div
        className={`display1 border-2 border-teal-200 rounded-lg h-[30rem] w-[75rem] bg-gradient-to-r from-white via-white to-teal-100 transition-all duration-300 ease-in ${
          activeDisplay === "display1" ? "opacity-100" : "hidden"
        }`}
      >
        <Card4 />
      </div>
      <div
        className={`display2 border-2 border-teal-200 rounded-lg h-[30rem] w-[75rem] bg-gradient-to-r from-white via-white to-slate-100 transition-all duration-300 ease-in ${
          activeDisplay === "display2" ? "opacity-100" : "hidden"
        }`}
      >
        <Card4 />
      </div>
      <div
        className={`display3 border-2 border-teal-200 rounded-lg h-[30rem] w-[75rem] bg-gradient-to-r from-white via-white to-yellow-100 transition-all duration-300 ease-in ${
          activeDisplay === "display3" ? "opacity-100" : "hidden"
        }`}
      >
        <Card4 />
      </div>
    </div>
  );
};

export default Section2;
