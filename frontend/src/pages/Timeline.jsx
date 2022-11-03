export default function Timeline({ clickedButtonTimeline }) {
  return (
    <section
      id="Timeline"
      className={clickedButtonTimeline ? "homeVisible" : "homeHidden"}
    >
      Timeline Page Incoming
    </section>
  );
}
