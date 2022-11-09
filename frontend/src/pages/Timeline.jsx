import dataToasts from "../components/dataToasts";

export default function Timeline({ clickedButtonTimeline }) {
  return (
    <section
      id="Timeline"
      className={clickedButtonTimeline ? "homeVisible" : "homeHidden"}
    >
      {dataToasts.map((toast, index) => (
        <>
          <img alt="moodToast" keys={index} src={toast.picture} width="32px" />
          <p className="journalToast">{toast.note}</p>
          <p className="dateToast">{toast.date}</p>
        </>
      ))}
    </section>
  );
}
