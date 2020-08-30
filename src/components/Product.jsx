import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { RiMoneyDollarCircleLine, RiShoppingCartFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { setProductDetail, } from "../app/productsSlice";
import { cartState, } from "../app/cartSlice";
import {theme} from "../mui-config"
import {Link} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
  },
  media: {
    height: 375,
    width: 375,
  },
  cardStyle: {
    [theme.breakpoints.down('xs')]: {
      margin: "2em 0"
    },
    [theme.breakpoints.up('xs')]: {
      margin: "auto",
      marginTop: "2em",
    },

  },
  inCart: {
    visibility: "visible",
  },
  notInCart: {
    visibility: "hidden",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between"
  }
});

const Product = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {items} = useSelector(cartState);



  const isAddedToCart = (id) => {
    const found = items.find((i) => i.id === id);
    return found;
  };


  return (
    <Card className={clsx(classes.root, classes.cardStyle)}>
      <CardActionArea>
        <Link to="/details">
          <CardMedia 
            className={classes.media}
            component="img"
            image={props.item.img}
            onClick={() => dispatch(setProductDetail(props.item.id))}
          />
        </Link>
      </CardActionArea>
      <CardActions
        className={clsx(
          isAddedToCart(props.item.id) ? classes.inCart : classes.notInCart
        )}
      >
        <IconButton color="primary">
          <RiShoppingCartFill />
        </IconButton>
      </CardActions>
      <CardActions className={classes.buttons} >
        <Typography>{props.item.title}</Typography>
        <Button
          color="primary"
          disabled={isAddedToCart(props.item.id)}
          onClick={() => props.addToCart(props.item.id)}
          variant="contained"
        >
          <IconButton className={classes.iconColor}>
            <RiMoneyDollarCircleLine color="white" />
          </IconButton>
          <Typography>{props.item.price}</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
