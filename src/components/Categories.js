import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <div className="my-[3rem] container mx-auto">
      <div className="flex flex-col items-center justify-center mb-[3rem] ">
        <h2 className="uppercase">Editor's Pick</h2>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className="flex flex-wrap justify-between gap-[3rem]">
        <div className="basis-2/5 flex-1">
          <CategoryCard />
        </div>
        <div className="basis-1/5 flex-1 bg-black">
          <CategoryCard />
        </div>
        <div className="basis-1/5 flex-1 flex flex-col gap-[3rem]">
          <div className="bg-black">
            <CategoryCard />
          </div>
          <div className="bg-black">
            <CategoryCard />
          </div>
        </div>
      </div>
    </div>
  );
}
