import { Box } from "@mui/material";
import EventMakeBody from "../organisms/eventmake/EventMakeBody";
import MainTitle from "../organisms/MainTitle";
import MainLayout from "../templates/MainLayout";

const EventMakePage = () => {
    return(
        <MainLayout>
            <Box>
                <MainTitle>
                    イベント作成
                </MainTitle>
                <EventMakeBody/>
            </Box>
        </MainLayout>
    )
}

export default EventMakePage;