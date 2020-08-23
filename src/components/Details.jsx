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

import { useSelector, useDispatch } from "react-redux";
import { productsState, resetProductDetail } from "../app/productsSlice";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";

const Details = () => {
  const { productDetail } = useSelector(productsState);
  const [item, setItem] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setItem(productDetail);
    return () => {
      dispatch(resetProductDetail());
    };
  }, []);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <Card>
          <CardContent>
            <Title title={item.title} />
            <Typography>{item.info}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <IconButton>
        <BiAddToQueue />
      </IconButton>
    </Grid>
  );
};

export default Details;
