import { Button, Container, Grid, List, ListItem, ListItemText, Slider, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import { useState } from "react";
import EventMakeCard from "./EventMakeCard";


const EventMakeBody = () => {
    const [teams, setTeams] = useState(1)

    const plusTeams = () => setTeams(teams+1);
    const minusTeams = () => setTeams(teams-1);

    return(
        <Box>
            <List>
                <ListItem divider sx={{py:2}}>
                    <ListItemText>
                        <Typography variant="subtitle1">
                            イベント名
                        </Typography>
                    </ListItemText>
                    <TextField label="イベント名" variant="outlined" sx={{width:300}}></TextField>
                </ListItem>
                <ListItem divider sx={{py:2, height:200}}>
                    <ListItemText>
                        <Typography variant="subtitle1" sx={{py:'auto'}}>
                            イベント概要
                        </Typography>
                    </ListItemText>
                    <TextField label="イベント概要" variant="outlined" multiline rows={4} sx={{width:300}}></TextField>
                </ListItem>
                <ListItem divider sx={{py:2}}>
                    <ListItemText>
                        <Typography variant="subtitle1">
                            管理者パスワード
                        </Typography>
                    </ListItemText>
                    <TextField label="管理者パスワード" variant="outlined" sx={{width:300}}></TextField>
                </ListItem>
                <ListItem divider sx={{py:5}}>
                    <ListItemText>
                        <Typography variant="subtitle1">
                            チーム数
                        </Typography>
                    </ListItemText>
                    <Button sx={{mx:3}} variant="contained" onClick={plusTeams}>追加</Button>
                    <Button variant="contained" onClick={minusTeams}>削除</Button>
                </ListItem>
            </List>
            {[...Array({teams})].map((_) => (
                <Grid item key={teams}>
                    <EventMakeCard></EventMakeCard>
                </Grid>
                )
            )}
        </Box>
    )
}

export default EventMakeBody;