import dataToasts from "./dataToasts";

export default function DailyMood() {
  return (
    <section className="DailyMood">
      <img
        src={dataToasts[0].picture}
        alt="moodToast"
        className="moodToast"
        width="32px"
      />
      <p className="journalToast">{dataToasts[0].note}</p>
      <p className="dateToast">{dataToasts[0].date}</p>
    </section>
  );
}
