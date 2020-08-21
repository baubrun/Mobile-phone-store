import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../mui-config";

import { IoIosHome } from "react-icons/io";
import { MdSmartphone } from "react-icons/md";

import clsx from "clsx";

const useStyles = makeStyles({
  menuItemColor: {
    color: "#fff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton className={classes.menuItemColor}>
            <MdSmartphone />
          </IconButton>
          <Typography className={classes.title} variant="h5">
            MPS
          </Typography>
          <Button
            className={clsx(classes.menuButton && classes.menuItemColor)}
            variant="h5"
          >
            <Typography variant="h5">Login</Typography>
          </Button>
          {/* <IconButton className={classes.menuItemColor}>
            <IoIosHome />
          </IconButton> */}

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
