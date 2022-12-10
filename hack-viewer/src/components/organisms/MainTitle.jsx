import {  Typography } from "@mui/material";
import { Box } from "@mui/system";

const MainTitle = (props) => {
    const { children } = props;
    return(
        <Box>
            <Typography variant="h5">
                {children}
            </Typography>
        </Box>
    )
}

export default MainTitle;