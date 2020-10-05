import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EventsContext } from "../context/eventsContext";
import { styleImagesContainer } from "../styles/dynamicStyles";

export default ({ event }) => {
  const { date } = event;
  const weekday = new Array(7);
  weekday[0] = "DIM";
  weekday[1] = "LUN";
  weekday[2] = "MAR";
  weekday[3] = "MER";
  weekday[4] = "JEU";
  weekday[5] = "VEN";
  weekday[6] = "SAM";

  const monthName = new Array(12);
  monthName[0] = "JAN";
  monthName[1] = "FEV";
  monthName[2] = "MAR";
  monthName[3] = "AVR";
  monthName[4] = "MAI";
  monthName[5] = "JUN";
  monthName[6] = "JUL";
  monthName[7] = "AOU";
  monthName[8] = "SEP";
  monthName[9] = "OCT";
  monthName[10] = "NOV";
  monthName[11] = "DEC";

  const formatted_string = (pad, user_str, pad_pos) => {
    if (typeof user_str === "undefined") return pad;
    return (pad + user_str).slice(-pad.length);
  };

  const n = weekday[date.getDay()];

  const [events, setEvents] = useContext(EventsContext);
  const { version } = events;

  return (
    <div
      className="eventContainer"
      style={{ display: "flex", backgroundColor: "white" }}
    >
      <Link
        to={`/event/${event.id}`}
        style={{
          flex: 4,
          border: "none",
          textDecoration: "none"
        }}
      >
        <button
          style={{
            border: "none",
            width: "100%",
            display: "flex",
            backgroundColor: "white"
          }}
        >
          <img
            style={{
              flex: 1,
              maxWidth: "3vw",
              height: "auto"
            }}
            className="eventImage"
            src={event.src}
            alt=""
          />
          <div
            style={{
              flex: 9,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div style={{ flex: 1 }} className="eventDate">
              <div className="eventMonthFormat">
                {monthName[date.getMonth()]}
              </div>
              <div className="eventDateFormat">{date.getDate()}</div>
            </div>
            <div style={{ flex: 3 }} className="eventName">
              {event.title1}
            </div>

            <div style={{ flex: 3 }} className="eventDetails">
              <div className="eventDetailsTitle">{event.title2}</div>
              <div className="eventDetailsTime">
                {formatted_string("00", date.getHours())}:
                {formatted_string("00", date.getMinutes())}
              </div>
            </div>
          </div>
        </button>
      </Link>

      <button
        style={{ flex: 1, backgroundColor: "white" }}
        className="eventButton"
      >
        M'inscrire
      </button>
    </div>
  );
};
