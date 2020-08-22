import React, { useState, useEffect } from "react";
import Product from "./Product";
import Title from "./Title";

import Grid from "@material-ui/core/Grid";

import { data } from "../data";
import {useSelector, useDispatch} from "react-redux"

import {getProducts, productsState} from "../app/productsSlice"



const ProductList = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(productsState)
  const [items, setItems] = useState([])

  useEffect(() => {
    dispatch(getProducts(data))
    setItems(products)
  }, [products])

  return (
    <>
      <Title title="PHONES" />
      <Grid container direction="row" justify="center" alignItems="center">
        {items.map((p, idx) => {
          return <Product item={p} key={idx} />;
        })}
      </Grid>
    </>
  );
};

export default ProductList;
