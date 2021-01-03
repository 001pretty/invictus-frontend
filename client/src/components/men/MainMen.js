import React, { useState } from "react";
import axios from "axios";
import {useQuery} from 'react-query';

import ItemList from 'components/shared/ItemList'


function MainMen() {
  const [menItems, setMenItems] = useState([]);
  useQuery(
    'men-items', () => axios.get(`/items/menitems`).then((res) => setMenItems(res.data.menItems))
  )

  return (
    <div
      className="Main-Wrapper"
      style={{ borderTop: "1px solid rgb(219, 219, 219)" }}
    >
      <div>
        <div className="Mens-Title">
          <p>MEN ALL</p>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
            }}
          >
            You’ve spent every moment up until now mixing your own style. It’s
            your look, not someone else’s. It’s like an art form – a way to
            express yourself and show the world the man you want them to see.
          </p>
        </div>

        <div className="Mens-Wrapper">
          <ItemList itemKind={menItems} />
        </div>
      </div>
    </div>
  );
}

export default MainMen;
