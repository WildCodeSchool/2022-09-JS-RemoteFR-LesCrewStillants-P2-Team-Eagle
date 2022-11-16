import Home from "@pages/HomePopUp";

export default function AddButton({ dataToasts, weather }) {
  return (
    <div className="navButton">
      <Home dataToasts={dataToasts} weather={weather} />

      <p className="addButtonBackground"> </p>
    </div>
  );
}
