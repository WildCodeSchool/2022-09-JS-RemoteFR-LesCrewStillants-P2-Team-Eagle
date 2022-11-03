export default function Calendar({ clickedButtonCalendar }) {
  return (
    <section
      id="Calendar"
      className={clickedButtonCalendar ? "homeVisible" : "homeHidden"}
    >
      Calendar Page Incoming
    </section>
  );
}
