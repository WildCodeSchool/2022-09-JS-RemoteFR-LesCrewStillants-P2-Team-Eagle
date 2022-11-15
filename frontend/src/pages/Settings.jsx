import Name from "@components/Settings/Name/Name";
import Faq from "@components/Settings/Faq/Faq";

import "@components/Settings/Settings.css";

export default function Settings({ clickedButtonSettings }) {
  return (
    <section
      id="Settings"
      className={clickedButtonSettings ? "homeVisible" : "homeHidden"}
    >
      <h1>SETTINGS</h1>
      <h2>Personalize</h2>
      <Name />
      <h2>Information</h2>
      <Faq />
    </section>
  );
}
