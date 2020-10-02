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

  const n = weekday[date.getDay()];

  return (
    <div className="imageContainer">
      <img width="100%" src={event.src} alt="" />
      <div className="imageContainerBottom"></div>
      <div className="imageContainerTitle1">{event.title1}</div>
      <div className="imageContainerTitle2">{event.title2}</div>
      <div className="imageDateContainer">
        <div className="imageMonthFormat">{n}</div>
        <div className="imageDateFormat">{date.getDay()}</div>
        <div>{monthName[date.getMonth() - 1]}</div>
      </div>
    </div>
  );
};
