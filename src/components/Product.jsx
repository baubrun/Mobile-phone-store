import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { RiMoneyDollarCircleLine, RiShoppingCartFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

import { getProductDetail, productsState } from "../app/productsSlice";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 400,
    width: 400,
  },
  cardStyle: {
    margin: "2em",
  },
  inCart: {
    marginLeft: "auto",
  },
});

const Product = (props) => {
  const classes = useStyles();
  // const dispatch = useDispatch()
  // const {products} = useSelector(productsState)
  // const [items, setItems] = useState([])

  // useEffect(() => {
  //   dispatch(getProductDetail(2))
  //   setItems(products)
  // }, [products])

  return (
    <Card className={clsx(classes.root, classes.cardStyle)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`../images/${props.item.img}`)}
        />
      </CardActionArea>
      {props.item.inCart && (
        <CardActions className={classes.inCart}>
          <Button>
            <IconButton color="primary">
              <RiShoppingCartFill />
            </IconButton>
          </Button>
          </CardActions>
      )}
      <CardActions>
        <Typography>{props.item.title}</Typography>
        <Button
          color="primary"
          disabled={props.item.inCart}
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
