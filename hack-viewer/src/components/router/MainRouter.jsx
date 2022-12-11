import { BrowserRouter, Routes, Route} from "react-router-dom";
import Errorpage from "../pages/ErrorPage";
import EventPage from "../pages/EventPage";
import HomePage from "../pages/HomePage";
import TeamSettingPage from "../pages/TeamSetting";
import AboutPage from "../pages/AboutPage";
import HowtoPage from "../pages/HowtoPage"

const MainRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/Event"} element={<EventPage/>}/>
                <Route path={"/TeamSetting"} element={<TeamSettingPage/>}/>
                <Route path={"/about"} element={<AboutPage/>}/>
                <Route path={"/howto"} element={<HowtoPage/>}/>
                <Route path={`/*`} element={<Errorpage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;