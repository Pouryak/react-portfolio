import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
import Home from "./pages/HomePage";
import Posts from "./pages/PostsPage";
import Works from "./pages/WorksPage";

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
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
