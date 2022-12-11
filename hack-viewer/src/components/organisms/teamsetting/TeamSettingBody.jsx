import {
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Box } from "@mui/system";
import FormLabel from "@mui/material/FormLabel";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "../../../utils/http_client";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});

const CustomSnackBar = (props) => {
  const { open, message, handleClose, handleExited, severity } = props;
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionProps={{ onExited: handleExited }}
    >
      <Alert
        severity={severity}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {message}
        </span>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Alert>
    </Snackbar>
  );
};

const TeamSettingBody = (props) => {
  const { eventId, teamId } = props;
  const [team, setTeam] = useState({ name: "", progress: -1 });
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarSeverity, setSnackBarSeverity] = useState();

  const getTeam = () => {
    axios.get(`/api/events/${eventId}/teams/${teamId}`).then((res) => {
      setTeam(res.data);
    });
  };
  const setName = (inputName) => {
    setTeam({ ...team, name: inputName });
  };
  const setProgress = (inputProgress) => {
    setTeam({ ...team, progress: inputProgress });
  };

  const putName = () => {
    const data = { name: team.name };
    axios
      .put(`/api/events/${eventId}/teams/${teamId}/name`, data)
      .then((res) => {
        handleOpenSnackBar("チーム名を変更しました。", "success");
      })
      .catch((res) => {
        handleOpenSnackBar("チーム名の変更に失敗しました。", "error");
      });
  };

  const putProgress = () => {
    const data = { progress: team.progress };
    axios
      .put(`/api/events/${eventId}/teams/${teamId}/progress`, data)
      .then((res) => {
        handleOpenSnackBar("進捗を更新しました。", "success");
      })
      .catch((res) => {
        handleOpenSnackBar("進捗の更新に失敗しました。", "error");
      });
  };

  React.useEffect(() => {
    if (!openSnackBar && snackBarMessage.length) {
      setOpenSnackBar(true);
    }
  }, [snackBarMessage]);

  const handleOpenSnackBar = async (message, severity) => {
    setSnackBarMessage(message);
    setSnackBarSeverity(severity);
  };

  const handleCloseSnackBar = async () => {
    setOpenSnackBar(false);
  };

  const handleExited = () => {
    setSnackBarMessage("");
  };

  useEffect(() => getTeam(), []);

  return (
    <Box>
      <List>
        <ListItem divider sx={{ py: 2 }}>
          <ListItemText>
            <Typography variant="subtitle1">チーム名</Typography>
          </ListItemText>
          <TextField
            label="チーム名"
            variant="outlined"
            value={team.name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <Button sx={{ mx: 1 }} onClick={putName}>
            変更
          </Button>
        </ListItem>
        <ListItem divider sx={{ py: 2 }}>
          <ListItemText>
            <Typography variant="subtitle1">進捗</Typography>
          </ListItemText>
          <FormControl>
            <FormLabel>プロダクトの進捗</FormLabel>
            <RadioGroup
              value={team.progress}
              onChange={(e) => setProgress(e.target.value)}
              sx={{ mt: 1, mr: 5 }}
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="アイデア出し"
              ></FormControlLabel>
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="仕様検討"
              ></FormControlLabel>
              <FormControlLabel
                value={2}
                control={<Radio />}
                label="機能開発"
              ></FormControlLabel>
              <FormControlLabel
                value={3}
                control={<Radio />}
                label="統合"
              ></FormControlLabel>
              <FormControlLabel
                value={4}
                control={<Radio />}
                label="プレゼン作成"
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
          <Button sx={{ mx: 1 }} onClick={putProgress}>
            変更
          </Button>
        </ListItem>
      </List>
      <CustomSnackBar
        message={snackBarMessage}
        open={openSnackBar}
        handleClose={handleCloseSnackBar}
        handleExited={handleExited}
        severity={snackBarSeverity}
      />
    </Box>
  );
};

export default TeamSettingBody;
