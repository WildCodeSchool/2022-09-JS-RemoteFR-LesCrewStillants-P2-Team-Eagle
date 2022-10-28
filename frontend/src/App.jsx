import Home from "@pages/HomePopUp";
import Settings from "@pages/Settings";
import Journal from "@components/Journal";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />

      <Journal />

      <Settings />
    </div>
  );
}

export default App;
