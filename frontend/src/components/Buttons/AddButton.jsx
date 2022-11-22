import HomePopUp from "@pages/HomePopUp";

export default function AddButton({ dataToasts, weather, name }) {
  return (
    <div className="navButton">
      <HomePopUp dataToasts={dataToasts} weather={weather} name={name} />

      <p className="addButtonBackground"> </p>
    </div>
  );
}
