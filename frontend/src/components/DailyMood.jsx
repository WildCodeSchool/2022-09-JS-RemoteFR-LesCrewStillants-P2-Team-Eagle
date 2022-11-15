import "./DailyMoodStyle.css";
import NeutralToast from "../assets/NeutralToast.png";

export default function DailyMood({ dataToasts }) {
  const date = new Date();

  return (
    <section className="DailyMood">
      <div>
        <p className="imgDaily">
          <p>
            <img
              src={
                dataToasts[0].date ===
                `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
                  ? dataToasts[0].picture
                  : NeutralToast
              }
              alt="moodToast"
              className="moodToast"
              width="32px"
            />
          </p>
        </p>
        <p className="journalToast">
          {dataToasts[0].date ===
          `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            ? dataToasts[0].note
            : "Empty Toast"}
        </p>
        <p className="dateToast">
          {dataToasts[0].date ===
          `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            ? dataToasts[0].date
            : `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
        </p>
      </div>
    </section>
  );
}
