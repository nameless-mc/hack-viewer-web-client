import { BrowserRouter, Routes, Route } from "react-router-dom";
import Errorpage from "../pages/ErrorPage";
import EventMakePage from "../pages/EventMakePage";
import EventPage from "../pages/EventPage";
import EventSettingPage from "../pages/EventSettingPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import HowtoPage from "../pages/HowtoPage";
import TeamSettingPage from "../pages/TeamSettingPage";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/Event"} element={<EventPage />} />
        <Route path={"/TeamSetting"} element={<TeamSettingPage />} />
        <Route path={"/EventMake"} element={<EventMakePage/>}/>
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/howto"} element={<HowtoPage />} />
        <Route path={"/EventSettingPage"} element={<EventSettingPage />} />
        <Route path={`/*`} element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
