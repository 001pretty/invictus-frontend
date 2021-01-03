import React, { useState, useEffect } from "react";
import axios from "axios";

import ItemList from 'components/shared/ItemList';


function MainMen() {
  const [saleItems, setSaleItems] = useState([]);

  useEffect(() => {
    axios
      .get("/items/saleitems")
      .then((res) => {
        setSaleItems(res.data.saleItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className="Main-Wrapper"
      style={{ borderTop: "1px solid rgb(219, 219, 219)" }}
    >
      <div>
        <div className="Mens-Title">
          <p>SALE</p>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
            }}
          >
            Grab amazing items for less.
          </p>
        </div>

        <div className="Mens-Wrapper">
            <ItemList itemKind={saleItems} previousPrice={'59.95€'} />
        </div>
      </div>
    </div>
  );
}

export default MainMen;
