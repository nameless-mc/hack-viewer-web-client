import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "../../../utils/http_client";

const EventTitle = (props) => {
    const {eventId} = props;
    const [eventData, setEventData] = useState([])

    useEffect(() => {
        axios.get(`/api/events/${eventId}`).then(req =>{
            setEventData(JSON.parse(req.data))
        }).catch(res => {
            console.log(res);
        })
    }, [])

    return(
        <Box sx={{m:3, p:4, border: '0.5px solid grey'}}>
            {}
            <Box>
                <Typography variant="h6">{eventData.name}</Typography>
            </Box>
            <Box sx={{mt:1}}>
                <Typography xs={{mt:2}} variant="sumtitle1">{eventData.description}</Typography>
            </Box>
        </Box>
    )
}

export default EventTitle;