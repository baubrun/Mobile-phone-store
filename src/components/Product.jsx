import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { RiShoppingCartFill, RiMoneyDollarCircleLine } from "react-icons/ri";

import { data } from "../data";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 400,
    width: 400,
  },
  cardStyle: {
    display: "inline-block",
    verticalAlign: "top",
    margin: "3em",
  },
});

const Product = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(data);

  return (
    <>
      {data.map((d, idx) => {
        return (
          <Card key={idx} className={clsx(classes.root, classes.cardStyle)}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require(`../images/${d.img}`)}
              />
              <CardContent>
                <Typography>{d.info}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <Typography>{d.title}</Typography>
              <IconButton>
                <RiMoneyDollarCircleLine />
              </IconButton>
              <Typography>{d.price}</Typography>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default Product;
