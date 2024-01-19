import React from "react";

export default function Hero() {
  return (
    <div className="flex h-[100vh]">
      <div className="flex flex-col justify-center p-[5rem] w-[50%] gap-[3rem] bg-[url('https://i.ibb.co/MkWJxRZ/floral-pattern.png')]">
        <h5 className="uppercase font-bold text-white">Summer Tag</h5>
        <h1 className="text-white">
          Multicoloured <br /> Tie-dye Sweater
        </h1>
        <h4 className="text-white">We know how large objects will act.</h4>
        <button className="p-[1rem] bg-transparent text-white w-[15rem] border-solid border-white border-[0.1rem]">
          Shop Now
        </button>
      </div>
      <div className="w-[50%] h-[100%]">
        <img
          className="w-[100%] h-[100%] object-cover"
          src="/hero-img.png"
          alt=""
        />
      </div>
    </div>
  );
}
