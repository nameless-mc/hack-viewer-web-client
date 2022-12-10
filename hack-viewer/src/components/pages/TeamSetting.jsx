import { Box } from "@mui/material";
import MainTitle from "../organisms/MainTitle";
import TeamSettingBody from "../organisms/teamsetting/TeamSettingBody";
import MainLayout from "../templates/MainLayout";

const TeamSettingPage = () => {
    return(
        <MainLayout>
            <Box>
                <MainTitle>
                    チームの設定
                </MainTitle>
                <TeamSettingBody/>
            </Box>
        </MainLayout>
    )
}

export default TeamSettingPage;