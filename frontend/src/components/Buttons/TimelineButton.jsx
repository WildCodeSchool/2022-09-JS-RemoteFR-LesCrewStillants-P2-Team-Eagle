// eslint-disable-next-line import/no-unresolved
import timelineImg from "@assets/buttons/VectorTimeline.png";

export default function TimelineButton() {
  return (
    <div className="navButton">
      <img src={timelineImg} alt="Timeline button" className="timelineButton" />
      <p className="timelineButton"> Timeline</p>
    </div>
  );
}
