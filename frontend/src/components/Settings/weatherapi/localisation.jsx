import { useState, useEffect } from "react";
import "./localisation.css";

function Localisation() {
  const [location, setLocation] = useState("");
  const [newLocation, setNewLocation] = useState("");

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

  function handleClick(event) {
    event.preventDefault();
    setLocation(newLocation);
    saveLocation();
  }
  return (
    <div className="localisation">
      <p>
        Localisation : {location}
        <button type="button">Modify</button>
      </p>

      <form className="visible">
        <label type="location" name="city">
          {" "}
        </label>
        <input
          type="text"
          placeholder="city"
          value={newLocation}
          onChange={(event) => setNewLocation(event.target.value)}
        />
        <input type="submit" value="submit" onClick={handleClick} />
      </form>
    </div>
  );
}

export default Localisation;
