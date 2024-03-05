/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const menuToggle = () => {
    setShowMenu(!showMenu);
  };
  const location = useLocation();
  useEffect(() => {
    setShowMenu(false);
  }, [location]);
  return (
    <div className="header">
      <div className="bg-[#252B42]">
        <div className="max-md:hidden container mx-auto py-[1rem] flex justify-between color text-white items-center">
          <div className="flex gap-x-[3rem]">
            <button className="flex items-center gap-x-[0.5rem]">
              <i className="fa-solid fa-phone decoration-white"></i>
              (225) 555-0118
            </button>
            <button className="flex items-center gap-x-[0.5rem]">
              <i className="fa-regular fa-envelope"></i>
              michelle.rivera@example.com
            </button>
          </div>
          <div>
            <h6>Follow us and get a chance to win 80% off!</h6>
          </div>
          <div className="flex items-center gap-x-[1rem]">
            <h6>Follow us : </h6>
            <div className="flex items-center gap-x-[1rem]">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-[2rem] flex ">
        <div className="flex justify-between items-center gap-[3rem] w-[100%] max-md:hidden">
          <a href="#" className="text-[2.4rem] font-[700]">
            Bandage
          </a>
          <nav className="flex items-center gap-[3rem] justify-between w-[100%]">
            <div className="flex gap-[2rem]">
              <Link to="/" className="font-[500]">
                Home
              </Link>
              <a href="" className="font-[500]">
                Shop
              </a>
              <Link to="/about" className="font-[500]">
                About
              </Link>
              <a href="" className="font-[500]">
                Blog
              </a>
              <Link to="/contact" className="font-[500]">
                Contact
              </Link>
              <a href="" className="font-[500]">
                Pages
              </a>
            </div>
            <div>
              <ul className="flex gap-[2rem] text-[#252B42]">
                <li className="text-[1.4rem] cursor-pointer flex gap-[1rem] items-center">
                  <i className="fa-solid fa-user"></i>
                  <div>Login / Register</div>
                </li>
                <li className="text-[1.4rem] cursor-pointer">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </li>
                <li className="text-[1.4rem] cursor-pointer">
                  <i className="fa-solid fa-cart-shopping"></i>
                </li>
                <li className="text-[1.4rem] cursor-pointer">
                  <i className="fa-solid fa-heart"></i>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          id="mobile-menu"
          className="hidden max-md:flex justify-between w-[100%] relative"
        >
          <div
            className={
              showMenu
                ? "   flex flex-col gap-[5rem] absolute top-[5rem] left-0 w-[100vw] items-center z-10 bg-[#F6F6F6] py-[3rem]  "
                : " hidden "
            }
          >
            <Link to="/" className="font-[500]">
              Home
            </Link>
            <a href="" className="font-[500]">
              Shop
            </a>
            <Link to="/about" className="font-[500]">
              About
            </Link>
            <a href="" className="font-[500]">
              Blog
            </a>
            <Link to="/contact" className="font-[500]">
              Contact
            </Link>
            <a href="" className="font-[500]">
              Pages
            </a>
          </div>
          <div className="flex items-center gap-[2rem] px-[1rem] ">
            <div id="hamburger" className="cursor-pointer" onClick={menuToggle}>
              {showMenu ? (
                <i className="fa-solid fa-x text-[2.4rem]"></i>
              ) : (
                <i className="fa-solid fa-bars text-[2.4rem]"></i>
              )}
            </div>
            <a href="#" className="text-[2.4rem] font-[700]">
              Bandage
            </a>
          </div>
          <ul className="flex items-center gap-[2rem] text-[#252B42]">
            <li className="text-[1.4rem] cursor-pointer flex gap-[1rem] items-center">
              <Link to="/register">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
            <li className="text-[1.4rem] cursor-pointer">
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
            <li className="text-[1.4rem] cursor-pointer">
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <li className="text-[1.4rem] cursor-pointer">
              <i className="fa-solid fa-heart"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
