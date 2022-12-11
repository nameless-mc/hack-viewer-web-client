import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Step, StepLabel, Stepper, TextField } from '@mui/material';

import teamData from "./teamData.json";

const steps = [
    "アイデア出し",
    "仕様検討",
    "機能開発",
    "統合",
    "プレゼン作成"
];

function EventMakeCard() {
  return (
    <Card sx={{width:340, m:3}}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                チーム名
            </Typography>
            <TextField label="チーム名" variant="outlined" sx={{width:300}}></TextField>
        </CardContent>
    </Card>
  );
}

export default EventMakeCard;
