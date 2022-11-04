import Journal from "@components/Home/Journal/Journal";
import ToastsMood from "./ToastsMood";
import "./PopUpToastStyle.css";

function PopUpToast({ closePopUp }) {
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
            />
          ))}
        </div>

        <Journal />

        <div className="exit">
          <button type="button" onClick={() => closePopUp(false)}>
            Close this day
          </button>
        </div>
      </div>
    </div>
  );
}
export default PopUpToast;
