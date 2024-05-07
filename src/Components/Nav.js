import React, { useState } from "react";
import img from '../Assets/Images/oy.png';
import close from "../Assets/Images/close.svg";
import menu from "../Assets/Images/menu.svg";
// import logo from '../Assets/Images/speak.png';
// import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const data = [
    {
      Path: "/",
      title: "Home",
    },

    {
      Path: "/about-us",
      title: "About Us",
    },
    {
      Path: "/contact-us",
      title: "Contact Us",
    },
  ];
  return (
    <>
      <div className="bg-[#FF9800] w-full overflow-hidden  pl-16 pr-16 md:h-auto h-16 flex items-center justify-center">
        <nav className="bg-[#FF9800)] w-full py-2 justify-between items-center navbar">
          {/* <img src={img} alt="logo" className=" w-[50px] h-[35px] m-2"/> */}

          <ul className="list-none md:flex hidden  justify-end items-center flex-1">
            <>
              <li className="mr-auto text-white text-[20px]  font-bold  cursor-pointer  custom-3d-text ">
                <div className="h-14 w-20 flex items-center justify-center">
                  <img
                    src={img}
                    alt="logo"
                    className="ml-9"
                    class="bg-orange "
                  />
                  {/* <p >OrangeYatri</p> */}
                </div>
              </li>

              {data.map((item, index) => (
                <li
                  key={index}
                  className={`font-poppins font-normal cursor-pointer text-[20px] text-white ${
                    index === data.length - 1 ? "mr-0" : "mr-10 md:mr-24"
                  }`}
                >
                  {/* {index === data.length - 1 ? (
                    <Button
                      variant="contained"
                      // color="error"
                      onClick={() => {
                        navigate(item.Path);
                      }}
                      style={{
                        background: "linear-gradient(135deg, #D0312D, #FF5733)",
                      }}
                    >
                      {item.title}
                    </Button>
                  ) : ( */}
                  <button
                    onClick={() => {
                      navigate(item.Path);
                    }}
                    className="hover:text-yellow-300 active:text-red-700  focus:text-red-700  font-semibold"
                  >
                    {item.title}
                  </button>
                  {/* )} */}
                </li>
              ))}
            </>
          </ul>

          <div className="md:hidden flex flex-1 justify-end items-center cursor-pointer ">
            <div className="md:hidden w-16 h-14 object-contain mr-auto">
              <img src={img} alt="logo" className="" />
              {/* <p className="text-white font-bold">OrangeYatri</p> */}
            </div>

            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => {
                setToggle((prev) => !prev);
              }}
            />

            <div
              style={{ backgroundColor: "rgb(255,174,0" }}
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-[silver] bg-opacity-95 absolute shadow-2xl top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col  justify-end items-center flex-1">
                <>
                  {data.map((item, index) => (
                    <li
                      onClick={() => {
                        setToggle((prev) => !prev);
                      }}
                      key={index}
                      className={`font-poppins font-normal cursor-pointer text-[20px] text-white ${
                        index === data.length - 1 ? "mr-0" : "mb-2"
                      }`}
                    >
                      {/* {index === data.length - 1 ? (
                        <Button
                          variant="contained"
                          // color="error"
                          onClick={() => {
                            navigate(item.Path);
                          }}
                          style={{
                            background:
                              "linear-gradient(135deg, #D0312D, #FF5733)",
                          }}
                        >
                          {item.title}
                        </Button>
                      ) : ( */}
                      <button
                        onClick={() => {
                          navigate(item.Path);
                        }}
                        className="hover:text-red-900 active:text-red-900  focus:text-red-900  font-bold"
                      >
                        {item.title}
                      </button>
                      {/* )} */}
                    </li>
                  ))}
                </>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
