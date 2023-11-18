import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        {/* <Toolbar>
          <FlightLand sx={{ fontSize: 40 }} />
          
        </Toolbar> */}
        <Typography component="p" sx={{ flexGrow: 1 }}>
          ©Trip Adviser by H-Ryosuke
        </Typography>
      </AppBar>
    </Box>
  );
}

export default Footer;
