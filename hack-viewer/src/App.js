import { CssBaseline } from "@mui/material";
import EventPage from "./components/pages/EventPage";
import HomePage from "./components/pages/HomePage";
import SettingPage from "./components/pages/TeamSetting";

function App() {
  return (
    <>
      <CssBaseline></CssBaseline>
      <HomePage/>
      <EventPage/>
      <SettingPage/>
    </>
  );
}

export default App;
