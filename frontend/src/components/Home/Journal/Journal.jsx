/* eslint-disable react/button-has-type */

import { useState } from "react";
import "./Journal.css";

function Journal() {
  const [noteText, setnoteText] = useState("");

  function handlechange(event) {
    setnoteText(event.target.value);
  }

  function handleSaveClick() {}

  return (
    <div className="Journal">
      <span> Tell me more : </span>
      <textarea
        rows="13"
        column="10"
        placeholder="type to add a note..."
        value={noteText}
        onChange={handlechange}
      />
      <div clasName="noteFooter">
        <button className="save" onClick={handleSaveClick}>
          save
        </button>
      </div>
    </div>
  );
}

export default Journal;
