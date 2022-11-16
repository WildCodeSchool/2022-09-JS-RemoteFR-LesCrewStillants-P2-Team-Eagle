// eslint-disable-next-line import/no-unresolved
import Home from "@pages/HomePopUp";

export default function AddButton({ dataToasts, weather }) {
  return (
    <div className="navButton">
      {/* <p className="addButtonBorder"> */}
      <Home dataToasts={dataToasts} weather={weather} />

      <p className="addButtonBackground"> </p>
      {/* </p> */}
    </div>
  );
}
