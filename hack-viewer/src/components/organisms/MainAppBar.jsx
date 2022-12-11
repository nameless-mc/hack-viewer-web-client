import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function MainAppBar() {
  const navigetion = useNavigate();
  const pages = [
    {
      label: "Hack Viewerとは",
      action: () => {
        navigetion("/about");
      },
    },
    {
      label: "使い方",
      action: () => {
        navigetion("/howto");
      },
    },
    {
      label: "イベント作成",
      action: () => {
        navigetion("/EventMake");
      },
    },
  ];
  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            Hack Viewer
          </Typography>
          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                sx={{
                  mr: 1,
                  color: "black",
                  display: "block",
                }}
                onClick={page.action}
              >
                <Typography variant="body2">{page.label}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainAppBar;
