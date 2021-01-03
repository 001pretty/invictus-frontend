import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import Header from "components/shared/Header/Header";
import Footer from "components/shared/Footer/Footer";

import "./ItemDetail.css";
import { AuthContext } from "context/AuthContext";

function ItemDetail({ match }) {
  const [itemImage, setItemImage] = useState(
    "images/other/image-placeholder.jpg"
  );
  const [itemDesc, setItemDesc] = useState(0);

  const { auth, token, userId } = useContext(AuthContext);
  const [isAuth] = auth;
  const [userIdValue] = userId;
  const [tokenValue] = token;

  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0,0);
      axios
        .get(`/items/item/${match.params.id}`)
        .then((res) => {
          if (res) {
            setItemImage(res.data.item.imageUrl);
            setItemDesc(res.data.item);
          }
        })
        .catch((err) => {
          console.log(err);
        });
  }, [match.params.id]);

  const addToCartHandler = () => {
    axios
      .post(
        "/items/cart",
        {
          userId: userIdValue,
          itemId: itemDesc._id,
        },
        {
          headers: {
            Authorization: "Bearer " + tokenValue,
          },
        }
      )
      .then((res) => {
        history.goBack();
      })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  let price = <div className="ItemDetailPrice">{itemDesc.price}</div>;
  if (itemImage.includes("/sale/")) {
    price = (
      <div className="ItemDetailPrice">
        <p style={{ textDecoration: "line-through" }}>59.95€</p>
        <p style={{ color: "#f94c43" }}>{itemDesc.price}</p>
      </div>
    );
  }

  let name = <div className="ItemDetailName">{itemDesc.name}</div>;
  let collection = "ORIGINAL";
  if (itemImage.includes("/limited/")) {
    name = (
      <div
        className="ItemDetailName"
        style={{ fontWeight: "600", color: "#B49769" }}
      >
        {itemDesc.name}
      </div>
    );
    collection = "LIMITED";
  }

  return (
    <div>
      <Header />
      <div className="ItemDetailWrapper">
        <div className="ItemDetailImage">
          <img src={"/" + itemImage} alt={"item " + itemDesc.name} />
        </div>
        <div className="ItemDetailContent">
          <div className="ItemDetailVendor">
            <p>INVICTUS</p>
          </div>
          {name}
          {price}
          <div className="ItemDetailDesc">
            <p>{collection} INVICTUS COLLECTION</p>
            <p>Details:</p>
            <p>{itemDesc.description}</p>
            <p>{itemDesc.color}</p>
            <p>{itemDesc.material}</p>
            <p>{itemDesc.sizefit}</p>
          </div>
          {isAuth ? (
            <button
              className="btn effect01"
              target="_blank"
              onClick={addToCartHandler}
            >
              <span>ADD TO CART</span>
            </button>
          ) : (
            <Link to="/login">
              <button className="btn effect01" target="_blank">
                <span>ADD TO CART</span>
              </button>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ItemDetail;
