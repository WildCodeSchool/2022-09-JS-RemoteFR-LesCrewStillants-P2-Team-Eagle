// eslint-disable-next-line import/no-unresolved
import calendarImg from "@assets/buttons/Calendar.png";

export default function CalendarButton() {
  return (
    <div className="navButton">
      <img src={calendarImg} alt="Calendar button" className="calendarButton" />
      <p> Calendar </p>
    </div>
  );
}
