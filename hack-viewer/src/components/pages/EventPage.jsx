import { Box } from "@mui/system";
import TeamCard from "../organisms/event/TeamCard";
import EventTitle from "../organisms/event/EventTitle";
import MainTitle from "../organisms/MainTitle";
import MainLayout from "../templates/MainLayout";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../utils/http_client";

const EventPage = () => {
  const { search } = useLocation();
  const [teams, setTeams] = useState([]);
  const query = new URLSearchParams(search);
  const eventId = query.get("eventId");
  const getTeams = () => {
    axios
      .get(`/api/events/${eventId}/teams`)
      .then((res) => {
        setTeams(res.data.teams);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  useEffect(() => getTeams(), []);
  return (
    <MainLayout>
      <MainTitle>イベントページ</MainTitle>
      <EventTitle eventId={eventId} />
      <Box sx={{ mt: 5 }}>
        {teams.map((team) => (
          <TeamCard team={team} eventId={eventId} key={team.name} />
        ))}
      </Box>
    </MainLayout>
  );
};

export default EventPage;
