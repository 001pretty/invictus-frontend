import React, { useState, useEffect } from "react";
import axios from "axios";

import "./MainSearch.css";

import ItemList from 'components/shared/ItemList'

function MainMen() {
  const [foundItems, setFoundItems] = useState([]);
  const [searchTerm, setSearchTerms] = useState("");

  useEffect(() => {
    if (searchTerm.length > 1){
    axios
      .post("items/searchitems", {
        searchTerm: searchTerm.toUpperCase()
      })
      .then((res) => {
        setFoundItems(res.data.foundItems);
      })
      .catch((err) => {
        console.log(err);
      });}
  }, [searchTerm]);

  const onChangeSearchHandler = (event) => {
    setSearchTerms(event.target.value);
  };

  return (
    <div
      className="SearchContainer"
      style={{ borderTop: "1px solid rgb(219, 219, 219)" }}
    >
      <div className="SearchTitleAndInputWrapper">
        <div className="SearchTitle">
          <p>SEARCH</p>
        <input
          placeholder="Search By Typing..."
          alt="searchInput"
          onChange={onChangeSearchHandler}
        />
        </div>
        <div className="SearchResultWrapper">
            {Array.isArray(foundItems) && foundItems.length && searchTerm.length > 1 ? (
             <ItemList itemKind={foundItems} />) : (<p >No found items.</p>)}
        </div>
      </div>
    </div>
  );
}

export default MainMen;
