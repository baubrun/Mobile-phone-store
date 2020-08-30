import React, { useEffect } from "react";
import CartItem from "./CartItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";


import { useDispatch, useSelector } from "react-redux";
import { clearCart, cartState, getSubTotal } from "../app/cartSlice";


const useStyles = makeStyles({
  clearCart: {
    margin: "10px 0",
  },
  empty: {
      margin: "auto"
  }
});

const CartContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { items, subTotal } = useSelector(cartState);

  useEffect(() => {
    dispatch(getSubTotal());
  });

  if (items.length === 0) {
    return (
      <Grid  alignContent="center" container direction="row" justify="center" alignItems="center">
        <Grid className={classes.empty} item>
          <Typography variant="h4">Empty</Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5">
            SUBTOTAL: <span>$ {subTotal}</span>
          </Typography>
          <Button
            className={classes.clearCart}
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => dispatch(clearCart())}
          >
            <Typography variant="h6">CLEAR CART</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CartContainer;
