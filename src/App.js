import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import SinglePostPage from "./pages/SinglePostPage";
import NotFound from "./pages/404";

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
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/works" element={<WorksPage />} exact />
        <Route path="/works/:workId" element={<SinglePostPage type="work" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
