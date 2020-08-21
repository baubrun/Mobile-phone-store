import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../mui-config";

import { IoIosHome } from "react-icons/io";
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

const useStyles = makeStyles({
    iconColor: {
        color: "#fff"
    }
})


const NavBar = () => {
    const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
          <Toolbar>
              <IconButton className={classes.iconColor}>
                  <HiOutlineMenuAlt2 />
              </IconButton>
              <Typography>MPS</Typography>
          </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
