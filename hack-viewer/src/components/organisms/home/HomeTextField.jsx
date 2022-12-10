import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import axios from "../../../utils/http_client";

const HomeTextField = () => {
    const [eventId, setEventId] = useState()
    const [event, setEvent] = useState()
  
    const getEvent = ()=>{
      axios.get(`/api/events/${eventId}`).then(req =>{
        setEvent(req.body)
      }).catch(res => {
        console.log(res);
      })
    }
    return(
        <Box>
            <Typography variant="body2" gutterBottom>
                イベントへ参加
            </Typography>
            <TextField sx={{mt:1}} id="eventid" label="イベントID" value={eventId} onChange={e => setEventId(e.target.value)}></TextField>
            <Box>
                <Button
                    noValidate
                    autoComplete="off"
                    variant="contained"
                    sx={{mt:2}}
                    onClick={getEvent}
                >
                    送信
                </Button>
            </Box>
        </Box>
    )
} 

export default HomeTextField;