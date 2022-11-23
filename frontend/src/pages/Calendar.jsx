import { useState } from "react";
import NeutralToast from "../assets/NeutralToast.png";
import ArrowLeft from "../assets/ArrowLeft.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import Toaster from "../assets/Toaster.svg";
import "@components/styleCalendar.css";

export default function Calendar({ clickedButtonCalendar, dataToasts }) {
  const date = new Date();
  const year = [2021, 2022, 2023];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const twentyEightDay = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
  ];

  const thirtyDay = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];

  const thirtyOneDay = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  const daysPerMonth = [
    thirtyOneDay,
    twentyEightDay,
    thirtyOneDay,
    thirtyDay,
    thirtyOneDay,
    thirtyDay,
    thirtyOneDay,
    thirtyOneDay,
    thirtyDay,
    thirtyOneDay,
    thirtyDay,
    thirtyOneDay,
  ];

  const [currentMonth, setCurrentMonth] = useState(month[10]);
  const [currentYear, setCurrentYear] = useState(year[1]);
  const [numberofDays, setNumberOfDays] = useState(daysPerMonth[10]);

  const handleMinusCalendar = () => {
    if (year.indexOf(currentYear) !== 0 && month.indexOf(currentMonth) === 0) {
      setCurrentMonth(month[11]);
      setNumberOfDays(daysPerMonth[11]);
      setCurrentYear(year[year.indexOf(currentYear) - 1]);
    }
    if (month.indexOf(currentMonth) !== 0) {
      setCurrentMonth(month[month.indexOf(currentMonth) - 1]);
      setNumberOfDays(daysPerMonth[month.indexOf(currentMonth) - 1]);
    }
  };

  const handlePlusCalendar = () => {
    if (
      year.indexOf(currentYear) !== year.length - 1 &&
      month.indexOf(currentMonth) === 11
    ) {
      setCurrentMonth(month[0]);
      setNumberOfDays(daysPerMonth[0]);
      setCurrentYear(year[year.indexOf(currentYear) + 1]);
    }
    if (month.indexOf(currentMonth) !== 11) {
      setCurrentMonth(month[month.indexOf(currentMonth) + 1]);
      setNumberOfDays(daysPerMonth[month.indexOf(currentMonth) + 1]);
    }
    if (
      currentYear === date.getFullYear() &&
      month.indexOf(currentMonth) === date.getMonth()
    ) {
      setCurrentMonth(month[month.indexOf(currentMonth)]);
      setNumberOfDays(daysPerMonth[month.indexOf(currentMonth)]);
      setCurrentYear(year[year.indexOf(currentYear)]);
    }
  };

  return (
    <section
      id="Calendar"
      className={clickedButtonCalendar ? "homeVisible" : "homeHidden"}
    >
      <div id="gridCalendar">
        <div id="navCalendar">
          <button type="button" onClick={handleMinusCalendar}>
            <img src={ArrowLeft} alt="Arrow Left" width="28px" />
          </button>
          <h3>
            {currentMonth}, {currentYear}
          </h3>
          <img src={Toaster} alt="Toaster" />
          <button type="button" onClick={handlePlusCalendar}>
            <img src={ArrowRight} alt="Arrow Right" width="28px" />
          </button>
        </div>
        {numberofDays.map((day) => (
          <p
            className={
              currentYear === date.getFullYear() &&
              month.indexOf(currentMonth) === date.getMonth() &&
              day > date.getDate()
                ? "greyToasts"
                : ""
            }
          >
            <p className="toastBackground">
              <img
                src={
                  dataToasts.filter(
                    (toast) =>
                      toast.date ===
                      `${day}/${month.indexOf(currentMonth) + 1}/${currentYear}`
                  )[0] === undefined
                    ? NeutralToast
                    : dataToasts.filter(
                        (toast) =>
                          toast.date ===
                          `${day}/${
                            month.indexOf(currentMonth) + 1
                          }/${currentYear}`
                      )[0].picture
                }
                alt="Toast"
                width="32px"
              />
            </p>
            {day}
          </p>
        ))}
      </div>
    </section>
  );
}
