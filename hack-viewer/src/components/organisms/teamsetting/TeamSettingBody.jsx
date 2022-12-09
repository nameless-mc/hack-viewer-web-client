import { Button, FormControl, FormControlLabel, List, ListItem, ListItemText, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FormLabel from '@mui/material/FormLabel';


const TeamSettingBody = () => {
    return(
        <Box>
            <List>
                <ListItem divider sx={{py:2}}>
                    <ListItemText>
                        <Typography variant="subtitle1">
                            チーム名
                        </Typography>
                    </ListItemText>
                    <TextField label="チーム名の変更" variant="outlined"></TextField>
                    <Button sx={{mx:1}}>
                        変更
                    </Button>
                </ListItem>
                <ListItem divider sx={{py:2}}>
                    <ListItemText>
                        <Typography variant="subtitle1">
                            進捗
                        </Typography>
                    </ListItemText>
                    <FormControl>
                        <FormLabel>
                            プロダクトの進捗
                        </FormLabel>
                        <RadioGroup sx={{ mt:1, mr:5}}>
                            <FormControlLabel value="idea" control={<Radio />} label="アイデア出し"></FormControlLabel>
                            <FormControlLabel value="specification" control={<Radio />} label="仕様検討"></FormControlLabel>
                            <FormControlLabel value="function" control={<Radio />} label="機能開発"></FormControlLabel>
                            <FormControlLabel value="integration" control={<Radio />} label="統合"></FormControlLabel>
                            <FormControlLabel value="presentation" control={<Radio />} label="プレゼン作成"></FormControlLabel>
                        </RadioGroup>
                    </FormControl>
                    <Button sx={{mx:1}}>
                        変更
                    </Button>
                </ListItem>
            </List>
        </Box>
    )
}

export default TeamSettingBody;