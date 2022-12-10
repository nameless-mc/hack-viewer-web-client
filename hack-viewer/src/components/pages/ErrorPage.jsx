import { Box } from "@mui/material";
import MainTitle from "../organisms/MainTitle";
import MainLayout from "../templates/MainLayout";

const ErrorPage = () => {
    return(
        <MainLayout>
            <Box>
                <MainTitle>
                    お探しのページが見つかりませんでした。
                </MainTitle>
            </Box>
        </MainLayout>
    )
}

export default ErrorPage;