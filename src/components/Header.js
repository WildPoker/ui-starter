import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Name of the Website
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
