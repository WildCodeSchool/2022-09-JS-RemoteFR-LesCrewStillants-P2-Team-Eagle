// eslint-disable-next-line import/no-unresolved
import calendarImg from "@assets/buttons/Calendar.png";

export default function CalendarButton({ handleClick, clickedButton }) {
  return (
    <div aria-hidden="true" onClick={handleClick()} className="navButton">
      <img
        src={calendarImg}
        alt="Calendar button"
        className={clickedButton ? "clickedButton" : "standardButton"}
      />
      <p className={clickedButton ? "textVisible" : "textHidden"}> Calendar </p>
    </div>
  );
}
