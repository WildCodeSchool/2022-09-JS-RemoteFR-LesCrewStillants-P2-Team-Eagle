import "@components/Timeline/Timeline.css";

export default function Timeline({ clickedButtonTimeline, dataToasts }) {
  return (
    <section
      id="Timeline"
      className={clickedButtonTimeline ? "homeVisible" : "homeHidden"}
    >
      {dataToasts.map((toast) => (
        <div>
          <p className="imgTimeline">
            <p>
              <img alt="moodTimeline" src={toast.picture} width="36px" />
            </p>

            <p>
              <img
                alt="weatherTimeline"
                src={`http://openweathermap.org/img/wn/${toast.iconWeather}@4x.png`}
                width="36px"
                className={
                  toast.iconWeather === "01d" || toast.iconWeather === "01n"
                    ? "sunFilter"
                    : ""
                }
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
