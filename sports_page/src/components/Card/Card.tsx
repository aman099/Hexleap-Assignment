import * as React from "react";

interface Sports {
  id: number;
  img: string;
  heading: string;
  totalEvents: string | null;
  eventJonar: string;
}

interface Props {
  currentCards: Sports[];
}

function Card({ currentCards }: Props) {
  return (
    <>
      {currentCards.map((sport, idx) => (
        <div key={idx} className="card p-5">
          <div
            className={`img-cont ${
              sport.totalEvents != null ? "" : "ad-img-cont"
            }`}
          >
            <img src={sport.img} alt={sport.img} />
          </div>
          <div className="heading-cont">
            <h2>{sport.heading}</h2>
          </div>
          {sport.totalEvents != null ? (
            <div className="details-cont">
              <div className="left-detail">
                <p>Total Events</p>
                <h5>{sport.totalEvents} Events</h5>
              </div>
              <div className="right-detail">
                <p>Sport</p>
                <h5>{sport.eventJonar}</h5>
              </div>
            </div>
          ) : (
            <div className="ad-details-cont">
              <div className="detail">
                <p className="ad-para text-sm">{sport.eventJonar}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Card;
