import { useState } from "react";
import "./localisation.css";
import localisationimg from "@assets/settings_img/localisation.svg";

function Localisation({ location, setLocation }) {
  const [newLocation, setNewLocation] = useState("");
  const [isHiding, setIsHiding] = useState(false);

  // local sto

  function saveLocation() {
    localStorage.setItem("location", JSON.stringify(newLocation));
  }

  function handleHide(event) {
    event.preventDefault();
    setIsHiding(!isHiding);
  }

  function handleClick(event) {
    event.preventDefault();
    if (newLocation !== "") {
      setLocation(newLocation);
      saveLocation();
      setIsHiding(!isHiding);
    }
  }

  return (
    <div className="localisation">
      <p>
        <span>
          <img src={localisationimg} alt="localisation icon" width="18px" />
          Location : {location}
        </span>
        <button type="button" onClick={handleHide}>
          Edit
        </button>
      </p>

      <form className={isHiding === true ? "visible" : "hidden"}>
        <label type="location" name="city">
          {" "}
        </label>
        <input
          type="text"
          placeholder="enter location"
          value={newLocation}
          onChange={(event) => setNewLocation(event.target.value)}
        />
        <input type="submit" value="submit" onClick={handleClick} />
      </form>
    </div>
  );
}

export default Localisation;
