import React from "react";

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

  return (
    <div className="eventContainer">
      <img className="eventImage" src={event.src} alt="" />
      <div className="eventDate">
        <div className="eventMonthFormat">{monthName[date.getMonth() - 1]}</div>
        <div className="eventDateFormat">{date.getDay()}</div>
      </div>
      <div className="eventName">
        <div>{event.title1}</div>
        <div></div>
      </div>
      <div className="eventDetails">
        <div className="eventDetailsTitle">{event.title2}</div>
        <div className="eventDetailsTime">
          {formatted_string("00", date.getHours())}:
          {formatted_string("00", date.getMinutes())}
        </div>
      </div>
      <button className="eventButton">M'inscrire</button>
    </div>
  );
};
