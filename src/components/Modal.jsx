import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartState, closeModal } from "../app/cartSlice";

const Modal = () => {
  // const { modalProduct, isModalOpen } = useSelector(cartState);

  // const { img, title, price } = modalProduct;

  return (
    <div>
      {/* {isModalOpen ? (
        <ModalContainer>
          <Container>
            <Box className={clsx(classes.img)}>
              <img src={item.img} />
            </Box>
            <Box className={classes.titlePrice}>
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="h4">${item.price}</Typography>
            </Box>
            <Typography className={classes.info}>{item.info}</Typography>

            <Box className={classes.icons}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary" size="large">
                  <Typography variant="h6">Continue Shopping</Typography>
                </Button>
              </Link>

              {!isAddedToCart(item.id) && !isInCart && (
                <Tooltip
                  className={classes.tooltip}
                  enterDelay={0}
                  title="ADD TO CART"
                >
                  <IconButton onClick={() => addToCart()}>
                    <BiAddToQueue className={classes.addIcon} />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Container>
        </ModalContainer>
      ) : null} */}
    </div>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
