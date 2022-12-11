import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActions,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";

import teamData from "./teamData.json";
import { Stack } from "@mui/system";

const EventMakeCard = (props) => {
  const { name, setName, deleteTeam } = props;
  return (
    <Card sx={{ width: 340, m: 3 }}>
      <CardContent>
        <Stack
          direction="row"
          spacing={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <TextField
            label="チーム名"
            variant="outlined"
            sx={{ width: 300 }}
            value={name}
            onChange={setName}
          ></TextField>
          <Box>
            <Button variant="contained" onClick={deleteTeam}>
              削除
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EventMakeCard;
