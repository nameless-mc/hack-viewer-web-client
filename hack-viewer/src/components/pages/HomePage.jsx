import { Box } from "@mui/system";
import HomeTextField from "../organisms/home/HomeTextField";
import HomeTitle from "../organisms/home/HomeTitle";
import MainLayout from "../templates/MainLayout";

const HomePage = () => {
    return(
        <MainLayout>
            <Box sx={{mx:5, mt:8}}>
                <HomeTitle/>
                <Box sx={{mt:5}}>
                    <HomeTextField/>
                </Box>
            </Box>
        </MainLayout>
    )
}

export default HomePage;