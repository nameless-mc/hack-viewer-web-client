import { Box } from "@mui/material";
import TeamSettingBody from "../organisms/teamsetting/TeamSettingBody";
import TeamSettingTitle from "../organisms/teamsetting/TeamSettingTitle";
import MainLayout from "../templates/MainLayout";

const TeamSettingPage = () => {
    return(
        <MainLayout>
            <Box sx={{mt:3,ml:1}}>
                <TeamSettingTitle/>
                <TeamSettingBody/>
            </Box>
        </MainLayout>
    )
}

export default TeamSettingPage;