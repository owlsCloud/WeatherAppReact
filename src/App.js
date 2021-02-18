import { useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";
function App() {
  const [city, setCity] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>React Weather App</h1>

      <main>
        <p>Enter a city</p>
        <input name="city" onChange={handleChange} value={city} style={{ maxWidth: "300px" }} />
        <Forecast city={city} />
      </main>
    </div>
  );
}

export default App;
