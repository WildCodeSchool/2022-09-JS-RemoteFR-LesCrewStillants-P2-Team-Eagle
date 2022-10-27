import Name from "@components/Settings/Name/Name";
import Faq from "@components/Settings/Faq/Faq";

import "@components/Settings/Settings.css";

export default function Settings() {
  return (
    <section id="Settings">
      <h1>SETTINGS</h1>
      <h2>Personnaliser</h2>
      <Name />
      <h2>Informations</h2>
      <Faq />
    </section>
  );
}
