import addButton from "@assets/buttons/addToast.png";

export default function AddButton() {
  return (
    <div className="navButton">
      <p className="addButtonBackground"> </p>
      <img src={addButton} alt="Add your mood " className="addButton" />
      <p> </p>
    </div>
  );
}
