import React, { useState } from "react";
import "./CardGrid.css";

import Card from "../Card/Card.tsx";
import Loading from "../Loading/Loading.jsx";

import sportImg_1 from "../../assets/baseball_1.png";
import sportImg_2 from "../../assets/baseball_2.png";
import sportImg_3 from "../../assets/baseball_3.png";
import sportImg_4 from "../../assets/baseball_4.png";
import sportImg_5 from "../../assets/baseball_5.png";
import sportImg_6 from "../../assets/baseball_6.png";
import sportImg_7 from "../../assets/baseball_7.png";
import sportImg_8 from "../../assets/baseball_8.png";
import sportImg_9 from "../../assets/baseball_9.png";
import ice_hockey_2 from "../../assets/ice_hockey_2.png";
import chealsea_cutler from "../../assets/chelsea_cutler.png";
import chealsea_cutler_2 from "../../assets/chelsea_cutler_2.png";
import chealsea_cutler_3 from "../../assets/chelsea_cutler_3.png";
import chealsea_cutler_4 from "../../assets/chelsea_cutler_4.png";
import glamour from "../../assets/glamour.png";

import advertisement from "../../assets/advertisement.png";

import ticket_1_2 from "../../assets/ticket_1.2.png";
import ticket_2_2 from "../../assets/ticket_2.2.png";
import Card2Heading from "../Card/Card2Heading.tsx";

interface Props {
  handleToggle: Function;
  toggle: Boolean;
}

const sports_details = [
  {
    id: 1,
    img: sportImg_1,
    heading: "Sacramento River Cats",
    totalEvents: "48",
    eventJonar: "Baseball",
  },
  {
    id: 2,
    img: sportImg_8,
    heading: "Las Vegas Aviators",
    totalEvents: "28",
    eventJonar: "Ice Hockey",
  },
  {
    id: 3,
    img: sportImg_9,
    heading: "New Jersey Devils",
    totalEvents: "15",
    eventJonar: "Baseball",
  },
  {
    id: 4, // idx = 3
    img: advertisement,
    heading: "Advertisement title",
    totalEvents: null,
    eventJonar:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: sportImg_2,
    heading: "Colorado Giants",
    totalEvents: "11",
    eventJonar: "Baseball",
  },
  {
    id: 6,
    img: sportImg_6,
    heading: "Texas Daredevils",
    totalEvents: "29",
    eventJonar: "Baseball",
  },
  {
    id: 7,
    img: sportImg_7,
    heading: "Utah Fighters",
    totalEvents: "32",
    eventJonar: "Baseball",
  },
  {
    id: 8,
    img: sportImg_4,
    heading: "New York Beasts",
    totalEvents: "20",
    eventJonar: "Baseball",
  },
  {
    id: 9,
    img: ice_hockey_2,
    heading: "Kansas City Royals",
    totalEvents: "21",
    eventJonar: "Ice Hockey",
  },
  {
    id: 10,
    img: chealsea_cutler,
    heading: "Minnesota Twins",
    totalEvents: "10",
    eventJonar: "Baseball",
  },
  {
    id: 11,
    img: chealsea_cutler_2,
    heading: "Philadelphia Phillies",
    totalEvents: "14",
    eventJonar: "Soccer",
  },
  {
    id: 12,
    img: chealsea_cutler_3,
    heading: "San Francisco Giants",
    totalEvents: "17",
    eventJonar: "Soccer",
  },
  {
    id: 13,
    img: chealsea_cutler_4,
    heading: "Toronto Blue Jays",
    totalEvents: "20",
    eventJonar: "Volleyball",
  },
  {
    id: 14,
    img: glamour,
    heading: "Tampa Bay Rays",
    totalEvents: "8",
    eventJonar: "Soccer",
  },
  {
    id: 15,
    img: sportImg_5,
    heading: "Chealsay Flexers",
    totalEvents: "13",
    eventJonar: "Baseball",
  },
];

const sports_details_2 = [
  {
    id: 1,
    img: ticket_1_2,
    heading: "Las Vegas Aviators",
    timeMonth: "Oct 15",
    timeDay: "Sun",
    timeClock: "4:30",
    location: "las vegas ballpark, las vegas",
    collection: "take flight", // 0
  },
  {
    id: 2,
    img: ticket_2_2,
    heading: "Sacramento River Cats",
    timeMonth: "Dec 20",
    timeDay: "Fri",
    timeClock: "7:30",
    location: "miami beach, florida",
    collection: "orange",
  },
  {
    id: 3,
    img: sportImg_4,
    heading: "Atlanta Braves",
    timeMonth: "Oct 15",
    timeDay: "Sun",
    timeClock: "4:30",
    location: "las vegas ballpark, las vegas",
    collection: "take flight", //2
  },
  {
    id: 4,
    img: sportImg_3,
    heading: "Baltimore Orioles",
    timeMonth: "Oct 15",
    timeDay: "Fri",
    timeClock: "3:00",
    location: "baltimore ballpark, texas",
    collection: "take flight", // 3
  },
  {
    id: 5,
    img: sportImg_5,
    heading: "Boston Red Sox",
    timeMonth: "Oct 15",
    timeDay: "Sun",
    timeClock: "1:30",
    location: "boston lake, boston",
    collection: "boston",
  },
  {
    id: 6,
    img: sportImg_6,
    heading: "Chicago Cubs",
    timeMonth: "Oct 15",
    timeDay: "Mon",
    timeClock: "2:30",
    location: "chicago, new york",
    collection: "chicago",
  },
  {
    id: 7,
    img: sportImg_7,
    heading: "Detroit Tigers",
    timeMonth: "Oct 15",
    timeDay: "Sat",
    timeClock: "4:30",
    location: "detroit, las vegas",
    collection: "detroit",
  },
  {
    id: 8,
    img: sportImg_4,
    heading: "Cleveland Guardians",
    timeMonth: "Oct 15",
    timeDay: "Wed",
    timeClock: "4:30",
    location: "cleveland park",
    collection: "cleveland",
  },
  {
    id: 9,
    heading: "Colorado Rockies",
    img: ticket_2_2,
    timeMonth: "Oct 15",
    timeDay: "Tue",
    timeClock: "4:30",
    location: "colorado, south texas",
    collection: "colorado",
  },
];

function CardGrid({ handleToggle, toggle }: Props) {
  const [displayedCards, setDisplayedCards] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const currentCards = sports_details.slice(0, displayedCards);

  function handleClick() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setDisplayedCards(displayedCards + displayedCards);
    }, 5000);

    console.log(currentCards.length === sports_details.length);
  }

  return (
    <main className="card-container mx-8 p-8">
      <div className="card-1-container">
        <div className="card-title flex items-start justify-between">
          <div className="heading text-left text-slate-50">
            <h2>Sports</h2>
          </div>
          <div className="toggle-btn-container">
            <button
              onClick={() => handleToggle()}
              className="toggleBtn text-slate-50 text-lg font-semibold"
            >
              {/* {toggle ? "DARK" : "LIGHT"} */}
              <i className={`fa-solid fa-${toggle ? "sun" : "moon"} fa-2x`}></i>
            </button>
          </div>
        </div>
        <div className="card-one grid grid-cols-4 gap-5">
          <Card currentCards={currentCards} />
        </div>
      </div>
      <div className="btn-container">
        {isLoading && <Loading />}
        {currentCards.length !== sports_details.length && (
          <button onClick={handleClick} id="load-more">
            See More
          </button>
        )}
      </div>
      <Card2Heading sports_details_2={sports_details_2} />
    </main>
  );
}

export default CardGrid;
