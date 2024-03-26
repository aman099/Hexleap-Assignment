import * as React from "react";
import { Fragment, useState } from "react";
import "./Card.css";

import useMediaQuery from "../useMediaQuery/useMediaQuery";

interface Sports {
  id: number;
  img: string;
  heading: string;
  timeMonth: string;
  timeDay: string;
  timeClock: string;
  location: string;
  collection: string;
}

interface Props {
  sports_details_2: Sports[];
}

let bgColor;

function Card2({ sports_details_2 }: Props) {
  const matches = useMediaQuery("(max-width: 1010px)");
  const matches2 = useMediaQuery("(max-width: 720px)");

  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(1);
  const [activeIndex3, setActiveIndex3] = useState(2);

  function handlePrevClick() {
    setActiveIndex1((activeIdx1) =>
      activeIdx1 === 0 ? sports_details_2.length - 1 : activeIdx1 - 1
    );
    setActiveIndex2((activeIdx2) =>
      activeIdx2 === 0 ? sports_details_2.length - 1 : activeIdx2 - 1
    );
    setActiveIndex3((activeIdx3) =>
      activeIdx3 === 0 ? sports_details_2.length - 1 : activeIdx3 - 1
    );
  }

  function handleAfterClick() {
    setActiveIndex1((activeIdx1) =>
      activeIdx1 === sports_details_2.length - 1 ? 0 : activeIdx1 + 1
    );
    setActiveIndex2((activeIdx2) =>
      activeIdx2 === sports_details_2.length - 1 ? 0 : activeIdx2 + 1
    );
    setActiveIndex3((activeIdx3) =>
      activeIdx3 === sports_details_2.length - 1 ? 0 : activeIdx3 + 1
    );
  }

  return (
    <>
      <button onClick={() => handlePrevClick()} className="carouselBtn left">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <div className="carousel flex gap-10">
        {sports_details_2.map((sport, idx) => {
          bgColor =
            (idx === 0 && "bg-gradient-to-r from-sky-500 to-indigo-500") ||
            (idx === 1 && "bg-gradient-to-r from-[#734d26] to-[#bf8040]") ||
            (idx === 2 && "bg-gradient-to-r from-sky-500 to-indigo-500") ||
            (idx === 3 && "bg-gradient-to-r from-sky-500 to-indigo-500") ||
            (idx === 4 && "bg-gradient-to-r from-[#009926] to-[#4dff79]") ||
            (idx === 5 && "bg-gradient-to-r from-violet-500 to-fuchsia-500") ||
            (idx === 6 && "bg-gradient-to-r from-[#b37d47] to-[#ffb366]") ||
            (idx === 7 && "bg-gradient-to-r from-[#cc0000] to-pink-500") ||
            (idx === 8 && "bg-gradient-to-r from-[#182729] to-[#5d6869]");

          return (
            <div
              key={idx}
              className={`card card2 flex flex-col p-5 ${
                idx === activeIndex1 ||
                (!matches2 && idx === activeIndex2) ||
                (!matches && idx === activeIndex3)
                  ? "active"
                  : ""
              }`}
            >
              <div className="card2-img-container">
                <img src={sport.img} alt={sport.img} />
              </div>
              <div className="card2-heading-container flex flex-col gap-2">
                <h4>{sport.heading}</h4>
                <p className="para-1">
                  {sport.timeMonth} | {sport.timeDay} | {sport.timeClock}hrs
                </p>
                <p className="para-2">{sport.location}</p>
                <button
                  style={{}}
                  className={`collection before:content-[''] before:bg-gradient-to-r from-violet-500 to-fuchsia-500`}
                >
                  {sport.collection} Collection
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => handleAfterClick()} className="carouselBtn right">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </>
  );
}

export default Card2;
