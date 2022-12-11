import { BrowserRouter, Routes, Route} from "react-router-dom";
import Errorpage from "../pages/ErrorPage";
import EventMakePage from "../pages/EventMakePage";
import EventPage from "../pages/EventPage";
import HomePage from "../pages/HomePage";
import TeamSettingPage from "../pages/TeamSetting";

const MainRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/Event"} element={<EventPage/>}/>
                <Route path={"/TeamSetting"} element={<TeamSettingPage/>}/>
                <Route path={"/EventMake"} element={<EventMakePage/>}/>
                <Route path={`/*`} element={<Errorpage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;