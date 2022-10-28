import { useState } from "react";
// import ToastsMood from "@components/ToastsMood";
import PopUpToast from "@components/PopUpToast";

export default function Home() {
  const [openPopUp, setOpenPopUp] = useState(false);
  // const [changeMood, setChangeMood] = useState(ToastsMood.picture);

  return (
    <div>
      {/* image a modifier */}
      {/* <div>
        <img src={ToastsMood[0].picture} alt="MoodToday" width="50rem" />
      </div> */}

      {/* blabla a supprimer */}
      {/* <p>Page Home de l'App</p> */}
      {/* clique sur l'image ouvre le popUp */}
      {openPopUp && <PopUpToast closePopUp={setOpenPopUp} />}
      <img
        src="./src/assets/MoodGood.png"
        alt="ToastGood"
        onClick={() => {
          setOpenPopUp(true);
        }}
        aria-hidden="true"
        className="openPopUp"
        width="50rem"
        height="50rem"
      />
    </div>
  );
}
