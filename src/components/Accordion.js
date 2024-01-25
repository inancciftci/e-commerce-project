import React, { useState } from "react";

export default function Accordion() {
  const accordionDummy = [
    {
      question: "the quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
  ];

  const [selected, setSelected] = useState(false);

  const toggle = (i) => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };
  return (
    <div className="">
      {accordionDummy.map((item, i) => (
        <div className="my-[1rem]">
          <div className="flex gap-[1rem] items-center">
            {!selected ? (
              <i className="fa-solid fa-arrow-right"></i>
            ) : (
              <i className="fa-solid fa-arrow-down"></i>
            )}

            <div
              onClick={toggle}
              className="hover:cursor-pointer text-[1.6rem] font-[500]"
            >
              {item.question}
            </div>
          </div>

          <div
            className={
              (selected ? null : "hidden") +
              " bg-[#fafafa] text-white rounded-[1rem] text-black text-[1.4rem] p-[1rem]"
            }
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
