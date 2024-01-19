/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Header() {
  return (
    <>
      <div className="bg-[#252B42]">
        <div className="max-sm:hidden container mx-auto py-[1rem] flex justify-between color text-white items-center">
          <div className="flex gap-x-[3rem]">
            <button className="flex items-center gap-x-[0.5rem]">
              <i className="fa-solid fa-phone decoration-white"></i>
              (225) 555-0118
            </button>
            <button className="flex items-center gap-x-[0.5rem]">
              <i class="fa-regular fa-envelope"></i>
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
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-[1rem] flex">
        <div className="flex justify-between items-center gap-[3rem] w-[100%]">
          <a href="#" className="text-[2.4rem] font-[700]">
            Bandage
          </a>
          <nav className="flex items-center gap-[3rem] justify-between w-[100%]">
            <div className="flex gap-[2rem]">
              <a href="" className="font-[500]">
                Home
              </a>
              <a href="" className="font-[500]">
                Shop
              </a>
              <a href="" className="font-[500]">
                About
              </a>
              <a href="" className="font-[500]">
                Blog
              </a>
              <a href="" className="font-[500]">
                Contact
              </a>
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
      </div>
    </>
  );
}
