import * as React from "react";

import Card2 from "./Card2.tsx";
import "./Card.css";

interface Sports {
  id: number;
  img: any;
  heading: string;
  timeMonth: string;
  timeDay: string;
  timeClock: string;
  location: string;
  collection: string;
  gradientColor: string;
}

interface Props {
  sports_details_2: Sports[];
}

function Card2Heading({ sports_details_2 }: Props) {
  return (
    <div className="card-heading p-5">
      <div className="heading-container">
        <h2>Collection&nbsp; Spotlight</h2>
        <p>
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>
      <Card2 sports_details_2={sports_details_2} />
    </div>
  );
}

export default Card2Heading;
