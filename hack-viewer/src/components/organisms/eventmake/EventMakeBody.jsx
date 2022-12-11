import {
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import { useState } from "react";
import EventMakeCard from "./EventMakeCard";

const Content = (props) => {
  const { children } = props;
  return <Box paddingLeft={5}>{children}</Box>;
};

const EventMakeBody = () => {
  const [teams, setTeams] = useState([{ id: 0, name: "" }]);
  const [currentId, setCurrentId] = useState(0);

  const getNextId = () => {
    const next = currentId + 1;
    setCurrentId(next);
    return next;
  };

  const addTeam = () => {
    setTeams([...teams, { name: "", id: getNextId() }]);
  };

  const deleteTeam = (team) => {
    const newTeams = teams.filter((t) => t !== team);
    setTeams(newTeams);
  };

  return (
    <Stack spacing={2}>
      <Content>
        <ListItemText>
          <Typography variant="subtitle1">イベント名</Typography>
        </ListItemText>
        <TextField
          label="イベント名"
          variant="outlined"
          sx={{ width: 300 }}
        ></TextField>
      </Content>
      <Content>
        <ListItemText>
          <Typography variant="subtitle1" sx={{ py: "auto" }}>
            イベント概要
          </Typography>
        </ListItemText>
        <TextField
          label="イベント概要"
          variant="outlined"
          multiline
          rows={4}
          sx={{ width: 300 }}
        ></TextField>
      </Content>
      <Content>
        <ListItemText>
          <Typography variant="subtitle1">管理者パスワード</Typography>
        </ListItemText>
        <TextField
          label="管理者パスワード"
          variant="outlined"
          sx={{ width: 300 }}
        ></TextField>
      </Content>
      <Content>
        <Box>
          <Typography variant="subtitle1">チーム</Typography>
        </Box>
        {teams.map((team) => (
          <EventMakeCard
            name={team.name}
            setName={(name) => setTeams({ ...team, name: name })}
            deleteTeam={() => deleteTeam(team)}
            key={team.id}
          />
        ))}
        <Button sx={{ mx: 3 }} variant="contained" onClick={addTeam}>
          追加
        </Button>
      </Content>
      <Content>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Button sx={{ mx: 3 }} variant="contained">
            作成
          </Button>
        </Box>
      </Content>
    </Stack>
  );
};

export default EventMakeBody;
