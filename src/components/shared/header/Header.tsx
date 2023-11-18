import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FlightLand from "@mui/icons-material/FlightLand";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <FlightLand sx={{ fontSize: 40 }} />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Trip Adviser
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
