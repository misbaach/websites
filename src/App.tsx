import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { track } from "./services/tracker/tracker";
import TrackerTarget from "./services/tracker/TrackerTarget";
import LoginPage from "./pages/LoginRegister";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import "./index.css";
import "./input.css";
import "./output.css";
import DashboardPage from "./pages/DashboardPage";
import QuizPage from "./pages/QuizPage";

const navbarExceptUrl = ["dashboard", "login", "quiz"];

function App() {
  useEffect(() => {
    track(TrackerTarget.loadWeb, { withDeviceInfo: true });
  }, []);

  const { pathname } = useLocation();
  const isExcept = navbarExceptUrl.includes(pathname.split("/")[1]);

  return (
    <>
      {!isExcept && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </>
  );
}

export default App;
