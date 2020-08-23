import React, { useState, useEffect } from "react";
import Product from "./Product";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import { data } from "../data";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  productsState,
  updateProducts,
} from "../app/productsSlice";
import { addCartItem, getCart } from "../app/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(productsState);
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(getProducts(data));
    setItems(products);
  }, []);

  useEffect(() => {
    // dispatch(getProducts(data))
    setItems(products);
  }, [products]);

  const addToCart = (id) => {
    const found = items.find((item) => item.id === id);
      dispatch(addCartItem(found));
    
  };

  return (
    <>
      <Title title="PHONES" />
      <Grid container direction="row" justify="center" alignItems="center">
        {items.map((p, idx) => {
          return (
            <Grid item xs={12} md={6} >
              <Product addToCart={addToCart} item={p} key={idx} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductList;
