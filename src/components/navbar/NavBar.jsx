import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar(props) {
  const { displayProfile } = props;
  console.log(displayProfile);
  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Workout tracker</Typography>
          <Button color="inherit" style={{ marginLeft: "auto" }}>
            {displayProfile ? "Logout" : "Profile"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
