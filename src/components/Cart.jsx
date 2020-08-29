import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, cartState, getSubTotal } from "../app/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { items, subtotal } = useSelector(cartState);

  useEffect(() => {
    dispatch(getSubTotal());
  });

  if (items.length === 0) {
    return (
      <section className="cart">
        <header>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
      </header>
      <article>
        {items.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-subtotal">
          <h4>
            subtotal <span>${subtotal}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};


export default CartContainer;
