import { Box } from "@mui/system";
import EventCard from "../organisms/event/EventCard";
import EventTitle from "../organisms/event/EventTitle";
import MainTitle from "../organisms/MainTitle";
import MainLayout from "../templates/MainLayout";

const EventPage = () => {
    return(
        <MainLayout>
            <MainTitle>イベントページ</MainTitle>
            <EventTitle/>
            <Box sx={{mt:5}}>
                <EventCard/>
            </Box>
        </MainLayout>
    )
}

export default EventPage;