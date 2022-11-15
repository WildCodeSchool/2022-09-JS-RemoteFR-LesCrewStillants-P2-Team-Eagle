import { useState, useEffect } from "react";
import "./localisation.css";

function Localisation({ location, setLocation }) {
  const [newLocation, setNewLocation] = useState("");
  const [isHiding, setIsHiding] = useState(false);

  // local sto

  function saveLocation() {
    localStorage.setItem("location", JSON.stringify(newLocation));
  }

  const loadData = () => {
    if (!localStorage.getItem("location")) return;

    const loadLocation = JSON.parse(localStorage.getItem("location"));

    setLocation(loadLocation);
  };

  useEffect(() => {
    loadData();
  }, []);

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
        📍 Location : {location}
        <button type="button" onClick={handleHide}>
          Change
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
