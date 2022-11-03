import HomePage from "@pages/Home";
import Nav from "@components/Nav";
import Settings from "@pages/Settings";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HomePage />

      <Settings />

      <Nav />
    </div>
  );
}

export default App;
