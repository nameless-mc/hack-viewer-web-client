import * as React from 'react';
import { Box, Button, Card, CardActions, CardContent,Grid,IconButton,ListItem,ListItemText,Modal,TextField,Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import teamData from "./teamData.json";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EventSettingCard = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <Grid container spacing={0}>
            {teamData.map(({teamname}) => (
                <Grid item xs={4}>
                    <Card
                        sx={{
                            minWidth: 275,
                            mx:3,
                            mt:3
                        }}
                        >
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                チーム名
                            </Typography>
                            <Typography
                                variant="h5"
                                component="div"
                                textAlign="center"
                                sx={{mt:2}}
                            >
                                {teamname}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={handleOpen} sx={{mx:'auto',ml:9,mb:1}} variant='contained'>
                                チーム名を変更
                            </Button>
                            <Modal
                                open={open}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <ListItem sx={{py:2}}>
                                        <ListItemText>
                                            <Typography variant="subtitle1">
                                                現在のチーム名：渡し方わかんね。
                                                {console.log(teamData.name)}
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <Box sx={{mx:'auto'}} >
                                        <TextField label="チーム名の変更" variant="outlined"></TextField>
                                        </Box>
                                        <Button onClick={handleClose}>変更</Button>
                                    </ListItem>
                                </Box>
                            </Modal>
                            <IconButton sx={{mr:1}}>
                                <DeleteOutlineIcon ></DeleteOutlineIcon>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default EventSettingCard;