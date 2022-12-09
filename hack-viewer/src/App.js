import { CssBaseline } from "@mui/material";
import EventPage from "./components/pages/EventPage";
import HomePage from "./components/pages/HomePage";
import TeamSettingPage from "./components/pages/TeamSetting";

function App() {
  return (
    <>
      <CssBaseline></CssBaseline>
      <HomePage/>
      <EventPage/>
      <TeamSettingPage/>
    </>
  );
}

export default App;
