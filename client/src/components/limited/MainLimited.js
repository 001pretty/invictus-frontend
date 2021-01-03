import React, { useState } from "react";
import axios from "axios";
import {useQuery} from 'react-query';

import ItemList from 'components/shared/ItemList'


function MainMen() {
  const [limitedItems, setLimitedItems] = useState([]);

  useQuery(
    'limited-items', () => axios.get(`/items/limiteditems`)
    .then((res) => setLimitedItems(res.data.limitedItems))
  ) 

  return (
    <div
      className="Main-Wrapper"
      style={{ borderTop: "1px solid rgb(219, 219, 219)" }}
    >
      <div>
        <div className="Mens-Title">
          <p style={{ fontWeight: "600", color: "#B49769" }}>LIMITED ALL</p>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
            }}
          >
            Only the most exclusive time limited offers.
          </p>
        </div>

        <div className="Mens-Wrapper">
          <ItemList itemKind={limitedItems} />
        </div>
      </div>
    </div>
  );
}

export default MainMen;
