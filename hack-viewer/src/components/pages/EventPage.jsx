import { Box } from "@mui/system";
import EventCard from "../organisms/event/EventCard";
import EventTitle from "../organisms/event/EventTitle";
import MainTitle from "../organisms/MainTitle";
import MainLayout from "../templates/MainLayout";

import { useLocation } from "react-router-dom";

const EventPage = () => {
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    
    return(
        <MainLayout>
            <MainTitle>イベントページ</MainTitle>
            <EventTitle eventId={query.get("eventId")}/>
            <Box sx={{mt:5}}>
                <EventCard eventId={query.get("eventId")}/>
            </Box>
        </MainLayout>
    )
}

export default EventPage;