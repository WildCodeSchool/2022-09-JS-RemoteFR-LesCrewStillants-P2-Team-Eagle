// eslint-disable-next-line import/no-unresolved
import Home from "@pages/HomePopUp";

export default function AddButton({ dataToasts }) {
  return (
    <div className="navButton">
      <p className="addButtonBackground">
        <Home dataToasts={dataToasts} />
      </p>
    </div>
  );
}
