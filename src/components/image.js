import React, { useContext } from "react";
import {
  styleImageContainer,
  styleImageFilter,
  styleImageDateContainer
} from "../styles/dynamicStyles";
import { EventsContext } from "../context/eventsContext";
import Radium from "radium";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const LocalComponent = ({ event }) => {
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
    <div style={styleImageContainer[version]}>
      <img width="100%" src={event.src} alt="" />

      <div className="imageContainerBottom"></div>
      <div className="imageContainerTitle1">{event.title1}</div>
      <div className="imageContainerTitle2">{event.title2}</div>
      <div className="imageTime">
        <div>
          {formatted_string("00", date.getHours())}:
          {formatted_string("00", date.getMinutes())}
        </div>
      </div>
      <div style={styleImageDateContainer[version]}>
        <div className="imageMonthFormat">{n}</div>
        <div className="imageDateFormat">{date.getDate()}</div>
        <div>{monthName[date.getMonth()]}</div>
      </div>
    </div>
  );
};

export default Radium(LocalComponent);
