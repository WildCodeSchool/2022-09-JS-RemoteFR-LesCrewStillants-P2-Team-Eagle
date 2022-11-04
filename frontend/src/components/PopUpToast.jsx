import { useState } from "react";
import Journal from "@components/Home/Journal/Journal";
import ToastsMood from "./ToastsMood";
import "./PopUpToastStyle.css";

function PopUpToast({ closePopUp }) {
  // Toast
  let moodChoice = 0;

  function handleMoodChoice(event, keys) {
    moodChoice = keys;
  }

  // Journal
  const [noteText, setnoteText] = useState("");

  function handlechange(event) {
    setnoteText(event.target.value);
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
          <button type="button" onClick={() => closePopUp(false)}>
            Close this day
          </button>
        </div>
      </div>
      <img src={moodChoice} alt="" />
    </div>
  );
}
export default PopUpToast;
