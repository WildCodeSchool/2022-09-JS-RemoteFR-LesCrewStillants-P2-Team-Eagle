import Name from "@components/Settings/Name/Name";
import Faq from "@components/Settings/Faq/Faq";
import "@components/Settings/Settings.css";
import Localisation from "@components/Settings/weatherapi/localisation";

export default function Settings({
  clickedButtonSettings,
  location,
  setLocation,
  name,
  setName,
}) {
  return (
    <section
      id="Settings"
      className={clickedButtonSettings ? "homeVisible" : "homeHidden"}
    >
      <h1>SETTINGS</h1>
      <h2>Personalize</h2>
      <Name name={name} setName={setName} />
      <Localisation location={location} setLocation={setLocation} />
      <h2>Information</h2>
      <Faq />
    </section>
  );
}
