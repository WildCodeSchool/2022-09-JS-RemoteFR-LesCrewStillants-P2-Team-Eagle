// eslint-disable-next-line import/no-unresolved
import timelineImg from "@assets/buttons/VectorTimeline.png";

export default function TimelineButton({ handleClick, clickedButton }) {
  return (
    <div aria-hidden="true" onClick={handleClick()} className="navButton">
      <img
        src={timelineImg}
        alt="Timeline button"
        className={clickedButton ? "clickedButton" : "standardButton"}
      />
      <p className={clickedButton ? "textVisible" : "textHidden"}> Timeline</p>
    </div>
  );
}
