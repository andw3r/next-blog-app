import { AppBar, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ height: { xs: 60, md: 90 } }}
    >
      <Container
        maxWidth="md"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 500,
              color: "#fff",
              cursor: "pointer",
              fontSize: { xs: 32, sm: 36, md: 48, lg: 60 },
            }}
          >
            Blog
          </Typography>
        </Link>
      </Container>
    </AppBar>
  );
};

export default Header;
