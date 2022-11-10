import "./Journal.css";

function Journal({ noteText, handlechange }) {
  return (
    <div className="Journal">
      <span> Tell me more : </span>
      <textarea
        rows="13"
        column="10"
        placeholder="type to add a note..."
        value={noteText}
        onChange={handlechange()}
      />
    </div>
  );
}

export default Journal;
