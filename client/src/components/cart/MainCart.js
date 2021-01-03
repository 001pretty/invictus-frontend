import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import "./MainCart.css";

import { AuthContext } from "context/AuthContext";

function MainCart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); 
  const { token, userId } = useContext(AuthContext); 
  const [userIdValue,] = userId;
  const [tokenValue,] = token;

  const history = useHistory();

  useEffect(() => {
    axios
      .post(
        "/items/cartitems",
        { userId: userIdValue }, 
        {
          headers: {
            Authorization: "Bearer " + tokenValue,
          },
        }
      )
      .then((res) => {
        if(res.data.foundCartItems.length === 0) {
          setCartItems('none')
          return
        }
        let total = 0;
        res.data.foundCartItems.forEach((item) => {
          total =
            total + parseFloat(item.price.slice(0, -1)) * item.q[item._id];
        });
        setTotalPrice(total.toFixed(2));
        setCartItems(res.data.foundCartItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tokenValue, userIdValue]);

  const removeCartHandler = (id) => {
    axios
      .post(
        "/items/removecart",
        {
          userId: userIdValue,
          itemId: id,
        },
        {
          headers: {
            Authorization: "Bearer " + tokenValue,
          },
        }
      )
      .then((res) => {
        history.push("/cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="CartContainer">
      <div className="Mens-Title" style={{ marginBottom: "20px" }}>
        <p>CART</p>
      </div>
      <div className="CartContentWrapper">
        <div className="CartHeadingWrapper">
          <div className="CartColumnName">PRODUCT</div>
          <div className="CartColumnTwo">PRICE</div>
        </div>
        <div className="CartRowWrapper">
          {Array.isArray(cartItems) && cartItems.length ? (
            cartItems.map((item) => (
              <li key={item._id} style={{ listStyleType: "none" }}>
                <div className="CartRow">
                  <div className="CartImageAndNameWrapper">
                    <div className="CartImage">
                      <img alt="cartImage" src={"/" + item.imageUrl} />
                    </div>
                    <div className="CartNameAndQuantityWrapper">
                      <p>{item.name}</p>
                      <p>Quantity: {item.q[item._id]}</p>
                    </div>
                  </div>
                  <div className="CartPriceAndRemoveWrapper">
                    <p>{item.price}</p>
                    <div
                      className="CartRemove"
                      onClick={(e) => removeCartHandler(item._id, e)}
                    >
                      <p>remove</p>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            cartItems === 'none' ?
            <p>Cart is empty.</p> : <p>Loading...</p>
          )}
        </div>
        <div className="CartTotal">
          <p>
            TOTAL:<b> {totalPrice}€</b>
          </p>
        </div>
        {Array.isArray(cartItems) && cartItems.length ? (
          <Link to="/checkout">
            <button className="btn effect01" target="_blank">
              <span>PROCEED TO CHECKOUT</span>
            </button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default MainCart;
