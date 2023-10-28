import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const Bar = (props) => {
  const pages = props.pages;
  const links = props.links;
  return (
    <AppBar position="relative">
      <Container maxWidth="1x">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {props.title}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={Link}
              to={links[0]}
              value={links[0]}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[0]}
            </Button>
            <Button
              component={Link}
              to={links[1]}
              value={links[1]}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[1]}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Bar;
