import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import MainTitle from "../organisms/MainTitle";
import TeamSettingBody from "../organisms/teamsetting/TeamSettingBody";
import MainLayout from "../templates/MainLayout";

const TeamSettingPage = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const eventId = query.get("eventId");
    const teamId = query.get("teamId");
    return(
        <MainLayout>
            <Box>
                <MainTitle>
                    チームの設定
                </MainTitle>
                <TeamSettingBody eventId={eventId} teamId={teamId}/>
            </Box>
        </MainLayout>
    )
}

export default TeamSettingPage;