import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions, Step, StepLabel, Stepper } from "@mui/material";
import { MoveTeamSettingButton } from "./MoveTeamSettingButton";

const steps = ["アイデア出し", "仕様検討", "機能開発", "統合", "プレゼン作成"];

const TeamCard = (props) => {
  const { team, eventId } = props;
  return (
    <Card
      sx={{
        minWidth: 275,
        mx: 6,
        mt: 3,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          チーム名
        </Typography>
        <Typography variant="h5" component="div">
          {team.name}
        </Typography>
      </CardContent>
      <Box
        sx={{
          width: "100%",
          my: 4,
          px: 2,
        }}
      >
        <Stepper activeStep={team.progress} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <CardActions>
        <MoveTeamSettingButton eventId={eventId} team={team} />
      </CardActions>
    </Card>
  );
};

export default TeamCard;
