import { Box } from "@mui/system";
import MainAppBar from "../organisms/MainAppBar";

const MainLayout = (props) => {
    const { children } = props;
    return(
        <>
            <MainAppBar/>
            <Box sx={{m:6}}>
                {children}
            </Box>
        </>
    )
}

export default MainLayout;