/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Slide } from "react-slideshow-image";
// https://react-slideshow-image.netlify.app/
import "react-slideshow-image/dist/styles.css";

export default function ProductCard() {
  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
  };

  const properties = {
    autoplay: false,
    transitionDuration: 250,
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
  };

  return (
    <div className="max-sm:w-[20rem] max-lg:w-[25%] w-[20%] flex-1 flex flex-col gap-y-[1.5rem] p-[1rem] bg-white">
      <div className="relative">
        <Slide {...properties}>
          <img
            className="object-cover rounded-[1rem] w-[100%]"
            src="/product-cover-dummy-2.png"
            alt=""
          />
          <img
            className="object-cover rounded-[1rem] w-[100%]"
            src="/product-cover-dummy-3.png"
            alt=""
          />
          <img
            className="object-cover rounded-[1rem] w-[100%]"
            src="/product-cover-dummy-4.png"
            alt=""
          />
        </Slide>
        <div className="absolute flex gap-[1rem] bottom-[1rem] left-[50%] translate-x-[-50%] translate-y-[-10%]">
          <button className="bg-white w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center  hover:bg-[#252b42] hover:text-white duration-200">
            <i className="fa-solid fa-heart"></i>
          </button>
          <button className="bg-white w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center hover:bg-[#252b42] hover:text-white duration-200">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button className="bg-white w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center hover:bg-[#252b42] hover:text-white duration-200">
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <a href="/product" className="text-[#252B42] text-[1.4rem] font-[500]">
          English Department
        </a>
        <div className="flex justify-around items-center gap-[0.75rem] bg-[#252B42] py-[0.5rem] px-[1.5rem] rounded-[3rem]">
          <i className="fa-solid fa-star text-[#FFCE31]"></i>
          <small className="text-[1.2rem] text-white font-[300]">4.9</small>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <Link to="/product">
          <h5>Graphic Design</h5>
        </Link>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex gap-[1rem]">
          <h5 className="text-[#bdbdbd] font-bold">$16.48</h5>
          <h5 className="text-[#23856d] font-bold">$6.48</h5>
        </div>
        <div className="flex gap-[0.5rem]">
          <div className="bg-[#23a6f0] w-[1.6rem] h-[1.6rem] rounded-[50%]"></div>
          <div className="bg-[#23856d] w-[1.6rem] h-[1.6rem] rounded-[50%]"></div>
          <div className="bg-[#E77C40] w-[1.6rem] h-[1.6rem] rounded-[50%]"></div>
          <div className="bg-[#252b42] w-[1.6rem] h-[1.6rem] rounded-[50%]"></div>
        </div>
      </div>
    </div>
  );
}
