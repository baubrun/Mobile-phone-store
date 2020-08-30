import React, { useEffect } from "react";
import CartItem from "./CartItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";
import {
  cartState,
  getSubTotal,
  getTax,
  getTotal,
} from "../app/cartSlice";

const useStyles = makeStyles({
  empty: {
    margin: "auto",
  },
  totals: {
    color: "textSecondary",
  },
});

const CartContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { items, subTotal, tax, total } = useSelector(cartState);

  useEffect(() => {
    dispatch(getSubTotal());
    dispatch(getTax());
    dispatch(getTotal());
  }, [items]);

  if (items.length === 0) {
    return (
      <Grid
        alignContent="center"
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
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
          <Typography variant="h5" color="primary">
            SUBTOTAL:
            <span style={{ color: "black" }}>$ {subTotal.toFixed(2)}</span>
          </Typography>
          <Typography variant="h5" color="textSecondary">
            TAX: <span style={{ color: "black" }}>$ {tax.toFixed(2)}</span>
          </Typography>
          <Typography variant="h5" color="primary">
            TOTAL: <span style={{ color: "black" }}>$ {total.toFixed(2)}</span>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CartContainer;
