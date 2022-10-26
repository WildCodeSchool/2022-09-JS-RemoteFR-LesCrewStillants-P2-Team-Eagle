import { useState } from "react";

function Name() {
  const [name, setName] = useState("User");
  const [newName, setNewName] = useState("");

  function handleClick(event) {
    event.preventDefault();
    setName(newName);
  }
  return (
    <>
      <p>Name : {name}</p>

      <form>
        <label type="name" name="userName">
          Name :{" "}
        </label>
        <input
          type="text"
          placeholder="userName"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <input type="submit" value="submit" onClick={handleClick} />
      </form>
    </>
  );
}

export default Name;
