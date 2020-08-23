import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { productsState, resetProductDetail } from "../app/productsSlice";
import { cartState, addCartItem, getSubTotal } from "../app/cartSlice";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import { theme } from "../mui-config";
import clsx from "clsx";
import Tooltip from "@material-ui/core/Tooltip";


const useStyles = makeStyles({
  img: {
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 375,
    },
    [theme.breakpoints.up("xs")]: {
      maxWidth: 500,
      maxHeight: 500,
    },
  },
  info: {
    fontSize: "1.2rem",
    color: "grey",
  },
  titlePrice: {
    display: "flex",
    justifyContent: "space-around",
  },
  addIcon: {
    color: theme.palette.secondary.light,
    fontSize: "3rem",
  },
  icons: {
    display: "flex",
    justifyContent: "space-around",
  },
  tooltip: {
    fontSize: "2em"
  }
});

const Details = () => {
  const { productDetail } = useSelector(productsState);
  const [item, setItem] = useState({});
  const dispatch = useDispatch();
  const classes = useStyles();
  const [cartItems, setCartItems] = useState([]);
  const { items } = useSelector(cartState);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setCartItems(items);
  }, []);

  const isAddedToCart = (id) => {
    const found = cartItems.find((i) => i.id === id);
    return found;
  };

  const addToCart = (id) => {
    setIsInCart(true);
    dispatch(addCartItem(item));
    // dispatch(getSubTotal());
  };

  useEffect(() => {
    setItem(productDetail);
    return () => {
      dispatch(resetProductDetail());
    };
  }, []);

  return (
    <>
      <Container>
        <Box className={clsx(classes.img)}>
          <img src={item.img} />
        </Box>
        <Box className={classes.titlePrice}>
          <Typography variant="h4">{item.title}</Typography>
          <Typography variant="h4">${item.price}</Typography>
        </Box>
        <Typography className={classes.info}>{item.info}</Typography>

        <Box className={classes.icons}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" size="large">
              <Typography variant="h6">Continue Shopping</Typography>
            </Button>
          </Link>

          {!isAddedToCart(item.id) && !isInCart && (
            <Tooltip className={classes.tooltip} enterDelay={0} title="ADD TO CART">
              <IconButton onClick={() => addToCart()}>
                <BiAddToQueue className={classes.addIcon} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Details;
