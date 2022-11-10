// eslint-disable-next-line import/no-unresolved
import Home from "@pages/HomePopUp";

export default function AddButton({ dataToasts }) {
  return (
    <div className="navButton">
      {/* <p className="addButtonBorder"> */}
      <Home dataToasts={dataToasts} />
      <p className="addButtonBackground"> </p>
      {/* </p> */}
    </div>
  );
}
