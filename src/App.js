import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/layouts/Main";

function App() {
  const [theme, setTheme] = useState("dark-theme");

  const darkModeToggle = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Navbar onClick={darkModeToggle} darkModeState={theme} />
      <Main />
    </div>
  );
}

export default App;
