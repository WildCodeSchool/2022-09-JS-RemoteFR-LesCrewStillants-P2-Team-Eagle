import dataToasts from "../components/dataToasts";

import "@components/Timeline/Timeline.css";

export default function Timeline({ clickedButtonTimeline }) {
  return (
    <section
      id="Timeline"
      className={clickedButtonTimeline ? "homeVisible" : "homeHidden"}
    >
      {dataToasts.map((toast, index) => (
        <div>
          <p className="imgTimeline">
            <p>
              <img
                alt="moodTimeline"
                keys={index}
                src={toast.picture}
                width="36px"
              />
            </p>
          </p>
          <p className="journalTimeline">{toast.note}</p>
          <p className="dateTimeline">{toast.date}</p>
        </div>
      ))}
    </section>
  );
}
