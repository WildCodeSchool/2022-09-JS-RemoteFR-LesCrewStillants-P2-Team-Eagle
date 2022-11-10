import "./DailyMoodStyle.css";

export default function DailyMood({ dataToasts }) {
  return (
    <section className="DailyMood">
      <div>
        <p className="imgDaily">
          <p>
            <img
              src={dataToasts[0].picture}
              alt="moodToast"
              className="moodToast"
              width="32px"
            />
          </p>
        </p>
        <p className="journalToast">{dataToasts[0].note}</p>
        <p className="dateToast">{dataToasts[0].date}</p>
      </div>
    </section>
  );
}
