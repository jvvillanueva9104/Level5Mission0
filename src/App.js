import Home from "./pages/HomePage/Home";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? "Lose Yourself - Eminem" : "OllieZone";
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
