import { Container } from "@mui/material";
import { Box } from "@mui/system";
import MainAppBar from "../organisms/MainAppBar";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <MainAppBar />
      <Container>
        <Box sx={{ m: 6 }}>{children}</Box>
      </Container>
    </>
  );
};

export default MainLayout;
