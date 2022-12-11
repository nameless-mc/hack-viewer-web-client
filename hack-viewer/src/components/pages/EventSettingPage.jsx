import { Box } from "@mui/material";
import EventSettingBody from "../organisms/eventsetting/EventSettingBody";
import MainTitle from "../organisms/MainTitle";
import MainLayout from "../templates/MainLayout";

const EventSettingPage = () => {
    return(
        <MainLayout>
            <Box>
                <MainTitle>
                    イベント管理
                </MainTitle>
                <EventSettingBody></EventSettingBody>
            </Box>
        </MainLayout>
    )
}

export default EventSettingPage;