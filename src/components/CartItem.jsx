import React from "react";
import { useDispatch, } from "react-redux";
import { removeCartItem, toggleCartItemQty } from "../app/cartSlice";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles({
  img: {
    height: 250,
    width: 250,
  },
  buttonTitle: {
    width: 300,
  },
  price: {
    padding: "10px 20px",
  },
  quantity: {
    textAlign: "center",
  },
});

const CartItem = ({ id, img, title, price, quantity }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeCartItem({ id }));
  };

  const toggle = (action) => {
    dispatch(toggleCartItemQty(action));
  };

  return (
      <>
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Grid item>
        <img className={classes.img} src={img} alt={title} />
      </Grid>
      <Grid className={classes.buttonTitle} item>
        <Typography variant="h5">{title}</Typography>
        <Typography
          className={classes.price}
          color="textSecondary"
          variant="h6"
        >
          ${price}
        </Typography>
        <Button
          className="remove-btn"
          color="primary"
          onClick={() => remove()}
          variant="contained"
        >
          remove
        </Button>
      </Grid>
      <Grid item>
          <IconButton
            color="primary"
            onClick={() => toggle({ toggle: "inc", id })}
          >
            <TiArrowSortedUp />
          </IconButton>
          <Typography
            color="textSecondary"
            className={classes.quantity}
            variant="h5"
          >
            {quantity}
          </Typography>
          <IconButton
            e
            color="primary"
            onClick={
              quantity === 1 ? () => remove() : () => toggle({ toggle: "dec", id })
            }
          >
            <TiArrowSortedDown />
          </IconButton>
      </Grid>
    </Grid>
    <hr/>
    </>
  );
};
export default CartItem;
