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
  } */

  return (
    <div className="navContainer">
      {/* <HomeButton onClick={(setHome(clicked), { redirect })} />
      <CalendarButton onClick={(setCalendar(clicked), { redirect })} />
      <AddButton />
      <TimelineButton onClick={(setCalendar(clicked), { redirect })} />
  <SettingsButton /> */}
      <HomeButton />
      <CalendarButton />
      <AddButton />
      <TimelineButton />
      <SettingsButton />
    </div>
  );
}
