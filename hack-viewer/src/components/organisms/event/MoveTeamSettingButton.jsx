import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/http_client";

const FormDialog = (props) => {
  const { open, handleClose, move, isTeamIdValid } = props;
  const [teamId, setTeamId] = useState();
  const [isInvalid, setIsInvalid] = useState(false);

  const checkId = async () => {
    if (await isTeamIdValid(teamId)) {
      setIsInvalid(false);
      handleClose();
      move(teamId);
      return;
    } else {
      setIsInvalid(true);
    }
  };

  const close = () => {
    handleClose();
    setTeamId(undefined);
    setIsInvalid(false);
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>チームIDの入力</DialogTitle>
        <DialogContent>
          <DialogContentText>
            進捗やチーム名を変更するには、チームIDが必要です。
            チームIDはイベントの管理者に確認してください。
          </DialogContentText>
          <TextField
            error={isInvalid}
            helperText={isInvalid ? "イベントIDが違います" : null}
            autoFocus
            margin="dense"
            label="チームID"
            fullWidth
            variant="standard"
            value={teamId}
            onChange={(e) => setTeamId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>キャンセル</Button>
          <Button onClick={checkId}>移動</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
FormDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  move: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  isTeamIdValid: PropTypes.func.isRequired,
};

export const MoveTeamSettingButton = (props) => {
  const { eventId, team } = props;
  const [open, setOpen] = React.useState(false);
  const navigation = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isTeamIdValid = async (teamId) => {
    if (!teamId) {
      return false;
    }
    let fetchedTeam = null;
    await axios.get(`/api/events/${eventId}/teams/${teamId}`).then((res) => {
      fetchedTeam = res.data;
    });
    if (!fetchedTeam) {
      return false;
    }
    return team.name && fetchedTeam.name && team.name === fetchedTeam.name;
  };

  const moveSettingPage = (teamId) => {
    navigation(`/TeamSetting?eventId=${eventId}&teamId=${teamId}`);
  };
  return (
    <>
      <Button
        sx={{ mx: "auto", mb: 1 }}
        variant="contained"
        onClick={handleOpen}
      >
        進捗をPUSHする
      </Button>
      <FormDialog
        open={open}
        handleClose={handleClose}
        move={moveSettingPage}
        isTeamIdValid={isTeamIdValid}
      />
    </>
  );
};
