/* eslint-disable react/button-has-type */
function Journal() {
  return (
    <div className="Journal">
      <span> Tell me more : </span>
      <textarea rows="13" column="10" placeholder="type to add a note..." />
      <div clasName="noteFooter">
        <button className="save">save</button>
      </div>
    </div>
  );
}

export default Journal;
