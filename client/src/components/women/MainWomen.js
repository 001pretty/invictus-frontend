import React, { useState } from "react";
import axios from "axios";
import {useQuery} from 'react-query';

import ItemList from 'components/shared/ItemList'


function MainMen() {
  const [womenItems, setWomenItems] = useState([]);

  useQuery(
    'women-items', () => axios.get(`/items/womenitems`)
    .then((res) => setWomenItems(res.data.womenItems))
  )

  return (
    <div
      className="Main-Wrapper"
      style={{ borderTop: "1px solid rgb(219, 219, 219)" }}
    >
      <div>
        <div className="Mens-Title">
          <p>WOMEN ALL</p>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
            }}
          >
            Turn heads with our ultimate women collection. Available in styles,
            colours, and materials. Buy today. Keep up to date with the latest
            women streetwear with Invictus.
          </p>
        </div>

        <div className="Mens-Wrapper">
          <ItemList itemKind={womenItems} />
        </div>
      </div>
    </div>
  );
}

export default MainMen;
