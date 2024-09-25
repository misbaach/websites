import { useEffect } from "react";
import { track } from "./services/tracker/tracker";
import TrackerTarget from "./services/tracker/TrackerTarget";
import LoginPage from "./pages/LoginRegister";

function App() {
  useEffect(() => {
    track(TrackerTarget.loadWeb, { withDeviceInfo: true });
  }, []);

  return <LoginPage />;
}

export default App;
