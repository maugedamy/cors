import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://expresspostman-production.up.railway.app/product", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <p>Results:</p>
    </div>
  );
}

export default App;
