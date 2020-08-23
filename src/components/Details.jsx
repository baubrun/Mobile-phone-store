import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { productsState, resetProductDetail } from "../app/productsSlice";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import {theme} from "../mui-config"

const useStyles = makeStyles({
  card: {
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 375,
    },
  },

  media: {
    height: 375,
    width: 375,
    margin: "auto",
  },
  info: {
    // padding: "1rem 10rem",
  },
  titlePrice: {
    display: "flex",
    justifyContent: "space-around",
  },
});
const Details = () => {
  const { productDetail } = useSelector(productsState);
  const [item, setItem] = useState({});
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    setItem(productDetail);
    return () => {
      dispatch(resetProductDetail());
    };
  }, []);

  return (
    <>
      {/* <Grid container direction="row" justify="center" alignItems="center"> */}
      {/* <Grid item> */}
      <Container>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image={item.img}
            />
            <CardContent>
              <Box className={classes.titlePrice}>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="h5">${item.price}</Typography>
              </Box>
              <Typography className={classes.info}>{item.info}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <IconButton>
          <BiAddToQueue />
        </IconButton>
      </Container>
    </>
  );
};

export default Details;
