import { useState } from "react";
import Journal from "@components/Home/Journal/Journal";
import ToastsMood from "./ToastsMood";
import "./PopUpToastStyle.css";

function PopUpToast({ closePopUp, dataToasts }) {
  // Toast
  const [moodChoice, setMoodChoice] = useState("./src/assets/MoodVeryGood.png");
  const imgToasts = document.querySelectorAll("#toastCenter img");

  function handleMoodChoice(toast, keys) {
    setMoodChoice(keys);
    if (toast.target.className === "clickedToast") {
      toast.target.classList.remove("clickedToast");
    } else {
      imgToasts.forEach((element) => element.classList.remove("clickedToast"));
      toast.target.classList.add("clickedToast");
    }
  }

  // Journal
  const [noteText, setnoteText] = useState("");

  const dailyData = { picture: moodChoice, note: noteText, date: "10/11/2022" };

  function handlechange(event) {
    setnoteText(event.target.value);
  }

  function saveMood() {
    localStorage.setItem("mood", JSON.stringify(dataToasts));
  }

  function handleClick() {
    dataToasts.unshift(dailyData);
    saveMood();
    closePopUp(false);
  }

  return (
    <div className="popUpBackground">
      <div className="popUpContainer">
        <div className="closeButton">
          <button type="button" onClick={() => closePopUp(false)}>
            X
          </button>
        </div>
        <div className="question">
          <p>How do you feel today ?</p>
        </div>
        <div id="toastCenter">
          {ToastsMood.map((toast, index) => (
            <img
              alt="ToastMood"
              keys={index}
              src={toast.picture}
              width="40rem"
              height="40rem"
              onClick={(event) => handleMoodChoice(event, toast.picture)}
              aria-hidden="true"
            />
          ))}
        </div>

        <Journal noteText={noteText} handlechange={() => handlechange} />

        <div className="exit">
          <button type="button" onClick={handleClick}>
            Close this day
          </button>
        </div>
      </div>
    </div>
  );
}
export default PopUpToast;
