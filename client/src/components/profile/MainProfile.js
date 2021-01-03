import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./MainProfile.css";
import { AuthContext } from "context/AuthContext";

function MainProfile() {
  const [orderItems, setOrderItems] = useState([]);
  const { auth, token, userId } = useContext(AuthContext);
  const [, setIsAuth] = auth;
  const [tokenValue, setTokenValue] = token;
  const [userIdValue,] = userId;

  useEffect(() => {
    axios
      .post(
        "/items/orderitems",
        { userId: userIdValue },
        {
          headers: {
            Authorization: "Bearer " + tokenValue,
          },
        }
      )
      .then((res) => {
        setOrderItems(res.data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userIdValue, tokenValue]);

  const logoutHandler = () => {
    setIsAuth(false);
    setTokenValue(false);
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
    return;
  };

  return (
    <div className="ProfileContainer">
      <div className="ProfileAccountWrapper">
        <p className="ProfileLogout" onClick={logoutHandler}>
          LOGOUT
        </p>
        <div className="ProfileAccountHeading" style={{ marginBottom: "20px" }}>
          <p>MY PROFILE</p>
        </div>
        <p>Welcome back!</p>
      </div>
      <div className="ProfileProductWrapper">
        <div className="ProfileProductName">ORDERS</div>
      </div>
      {Array.isArray(orderItems) && orderItems.length ? (
        orderItems.map((item) => (
          <li key={item._id} style={{ listStyleType: "none" }}>
            <div className="ProfileRow">
              <p>{`${item.createdAt.slice(0, 10)}  -  Order: #${item._id}`}</p>
            </div>
          </li>
        ))
      ) : (
        <p>No orders have been made yet.</p>
      )}
    </div>
  );
}

export default MainProfile;
