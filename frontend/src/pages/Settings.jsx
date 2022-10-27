import Name from "@components/Name";
import logo from "@assets/logo.svg";

export default function Settings() {
  return (
    <>
      <Name />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React !</p>
      </header>
    </>
  );
}
