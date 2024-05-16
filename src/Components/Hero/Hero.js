import React from "react";
import '../../Fonts.css';
import { useMediaQuery } from "@mui/material";
export default function Hero() {
   const isBig= useMediaQuery("(min-width: 600px)");
  return (
    <div className="w-full h-[100%] flex flex-col md:flex-row md:justify-between md:px-20 lg:px-40 mt-5 md:mt-28">
      <div className="w-full md:w-1/2 lg:w-2/3">
        <div className="px-4 md:px-0 text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Dancing Script , cursive" }}
          >
            <span className="text-orange-500">
              Simplify Tolls, Track Records Seamlessly -{" "}
            </span>
            <span className="text-[#9f3535]">With Our Pilot App</span>
          </h1>
          <p
            className="text-xl text-black mb-8 font-semibold"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            venenatis consectetur blandit. Sed quis eros at orci consectetur
            varius vel id lacus. Proin condimentum nisl eu ornare luctus.
            Quisque fringilla dolor eu fringilla molestie. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Fusce porta ante sed egestas
            ultrices. Fusce a massa porttitor, tempor neque at, vehicula metus.
            Ut tristique ipsum neque, vitae imperdiet turpis placerat vitae.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
              Get Pilot App
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
              Get Toll App
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/5 md:ml-1" style={{marginTop:isBig?-40:"2rem"}}>
        <img
          className="w-full md:h-auto rounded-lg shadow-md"
          alt="app"
          src="https://orange-yatri.s3.ap-south-1.amazonaws.com/tollAppHome.jpg"
        />
      </div>
    </div>
  );
}
