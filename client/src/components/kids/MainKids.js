import React, { useState } from "react";
import axios from "axios";
import {useQuery} from 'react-query';

import ItemList from 'components/shared/ItemList'

function MainMen() {
  const [kidsItems, setKidsItems] = useState([]);

  useQuery(
    'kids-items', () => axios.get(`/items/kidsitems`)
    .then((res) => setKidsItems(res.data.kidsItems))
  ) 

  return (
    <div
      className="Main-Wrapper"
      style={{ borderTop: "1px solid rgb(219, 219, 219)" }}
    >
      <div>
        <div className="Mens-Title">
          <p>KIDS ALL</p>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
            }}
          >
            Select from this amazing stylish line for your kids.
          </p>
        </div>

        <div className="Mens-Wrapper">
         <ItemList itemKind={kidsItems} />
        </div>
      </div>
    </div>
  );
}

export default MainMen;
