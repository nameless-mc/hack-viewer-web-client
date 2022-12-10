import {Button, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import EventSettingCard from "./EventSettingCard";

import teamData from "./teamData.json";
import eventData from "./eventData.json"

const TeamSettingBody = () => {
    return(
        <List>
            <ListItem divider>
                <ListItemText>
                    <Typography variant="h6" textAlign="center">
                        イベント情報管理
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem sx={{py:2}}>
                <ListItemText>
                    <Typography variant="subtitle1">
                        現在のイベント名：{eventData.name}
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <Box sx={{ml:'auto'}} >
                    <TextField label="イベント名の変更" variant="outlined"></TextField>
                    <Button sx={{mt:1,mr:2}}>
                        変更
                    </Button>
                </Box>
            </ListItem>
            <ListItem sx={{py:2}}>
                <ListItemText>
                    <Typography variant="subtitle1">
                        現在のイベント概要：<br></br>{eventData.about}
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <Box sx={{ml:'auto'}} >
                    <TextField label="イベント概要の変更" variant="outlined"></TextField>
                    <Button sx={{mt:1,mr:2}}>
                        変更
                    </Button>
                </Box>
            </ListItem>
            <ListItem divider>
                <ListItemText>
                    <Typography variant="h6" textAlign="center">
                        チーム一覧
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <EventSettingCard>{teamData}</EventSettingCard>
            </ListItem>
        </List>
    )
}

export default TeamSettingBody;