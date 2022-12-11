import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import MainTitle from "../organisms/MainTitle";
import TeamSettingBody from "../organisms/teamsetting/TeamSettingBody";
import MainLayout from "../templates/MainLayout";
import BackIcon from "@mui/icons-material/ArrowBackIosNew";

const TeamSettingPage = () => {
  const { search } = useLocation();
  const navigation = useNavigate();
  const query = new URLSearchParams(search);
  const eventId = query.get("eventId");
  const teamId = query.get("teamId");

  const backToEvent = () => {
    navigation(`/Event?eventId=${eventId}`);
  };
  return (
    <MainLayout>
      <Box>
        <MainTitle>チームの設定</MainTitle>
        <TeamSettingBody eventId={eventId} teamId={teamId} />
      </Box>
      <Button onClick={backToEvent}>
        <BackIcon fontSize="small" />
        <Typography>イベントページに戻る</Typography>
      </Button>
    </MainLayout>
  );
};

export default TeamSettingPage;
