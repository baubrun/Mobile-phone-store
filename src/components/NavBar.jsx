import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, fade } from "@material-ui/core/styles";
import Badge from '@material-ui/core/Badge';
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../mui-config";

import { RiShoppingCartFill } from "react-icons/ri";
import { MdSmartphone } from "react-icons/md";
import { Link } from "react-router-dom";

import clsx from "clsx";

const useStyles = makeStyles({
  menuItemColor: {
    color: "#fff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  offset: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navLinks: {
    textDecoration: "none",
  },
  navItem: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover" : {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  productsLink: {
    marginLeft: theme.spacing(2),
    width: "50%",
  },

});

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
            <IconButton className={classes.menuItemColor}>
              <MdSmartphone />
            </IconButton>
          </Link>
          <Typography className={classes.title} variant="h5">
            MPS
          </Typography>
          <Link
            className={clsx(
              classes.menuButton,
              classes.menuItemColor,
              classes.navLinks,
              classes.productsLink
            )}
            variant="h5"
          >
            <Typography
            variant="h5">PRODUCTS</Typography>
          </Link>
          <Link to="/cart">
          <IconButton
          className={clsx(classes.navItem, classes.menuItemColor )}>
            <Badge badgeContent={4} color="secondary">
            <RiShoppingCartFill />
            </Badge>
          </IconButton> 
          </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      </ThemeProvider>
    </div>
  );
};

export default NavBar;
