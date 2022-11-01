import HomeButton from "./Buttons/HomeButton";
import CalendarButton from "./Buttons/CalendarButton";
import AddButton from "./Buttons/AddButton";
import TimelineButton from "./Buttons/TimelineButton";
import SettingsButton from "./Buttons/SettingsButton";

export default function Nav() {
  /* function redirect(e) {
    e.target.setAttribute("className", "buttonClicked");
  }  
 
  const [calendar, setCalendar] = useState(false);
  const [timeline, setTimeline] = useState(false);
  const [settings, setSettings] = useState(false); */

  /* function clicked() {
    !useState; 
  } 
  const [clickedButton, setClickedButton] = useState(true);
  function handleClick() {
    setClickedButton(!clickedButton);
  } */

  return (
    <div className="navContainer">
      <HomeButton />
      <CalendarButton />
      <AddButton />
      <TimelineButton />
      <SettingsButton />
    </div>
  );
}
