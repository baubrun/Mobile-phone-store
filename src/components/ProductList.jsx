import React, { useState } from "react";
import Product from "./Product";
import Title from "./Title";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const ProductList = () => {
  return (
    <>
      <Title title="PHONES" />
      <Product />
    </>
  );
};

export default ProductList;
