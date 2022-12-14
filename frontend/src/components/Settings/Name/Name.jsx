import { useState, useEffect } from "react";
import "./Name.css";
import nameimg from "@assets/settings_img/name.svg";

function Name({ name, setName }) {
  const [newName, setNewName] = useState("");
  const [isHiding, setIsHiding] = useState(false);

  // Local Storage
  function saveName() {
    localStorage.setItem("name", JSON.stringify(newName));
  }

  const loadData = () => {
    if (!localStorage.getItem("name")) return;

    const loadName = JSON.parse(localStorage.getItem("name"));

    setName(loadName);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Function to hide/show the change name Area.
  function handleHide(event) {
    event.preventDefault();
    setIsHiding(!isHiding);
  }

  // Function for registering a new UserName.
  function handleClick(event) {
    event.preventDefault();
    setName(newName);
    saveName();
    setIsHiding(!isHiding);
  }

  return (
    <div className="Name">
      <p>
        <span>
          <img src={nameimg} alt="name icon" />
          Name : {name}
        </span>
        <button type="button" onClick={handleHide}>
          Edit
        </button>
      </p>

      <form className={isHiding === true ? "visible" : "hidden"}>
        <label type="name" name="userName">
          {" "}
        </label>
        <input
          type="text"
          placeholder="userName"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <input type="submit" value="submit" onClick={handleClick} />
      </form>
    </div>
  );
}

export default Name;
