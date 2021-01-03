import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useQuery} from 'react-query'

import "./Main.css";
import Fit from "./Fit/Fit";

import ItemList from 'components/shared/ItemList'

function Main() {
  const [menItems, setMenItems] = useState([]);
  const [womenItems, setWomenItems] = useState([]);
  const [limitedItems, setLimitedItems] = useState([]);
  const [fitItems, setFitItems] = useState({});

  useQuery(
    'men-items', () => axios.get(`/items/menitems`)
    .then((res) => setMenItems(res.data.menItems))
  )
  useQuery(
    'women-items', () => axios.get(`/items/womenitems`)
    .then((res) => setWomenItems(res.data.womenItems))
  )
  useQuery(
    'limited-items', () => axios.get(`/items/limiteditems`)
    .then((res) => setLimitedItems(res.data.limitedItems))
    .then(() => {
      setFitItems({
        imageUrl: '/images/fit/fit-item-top.webp',
        imageUrl2: '/images/fit/fit-item-bot.webp',
        fullFitUrl: '/images/fit/full-fit.webp',
        portraitUrl: '/images/fit/portrait.webp',
      })
    }) 
  ) 

  return (
    <div className="Main-Wrapper">
      <div>
        <div className="Mens-Title">
          <p>MEN NEW ARRIVALS</p>
        </div>

        <div className="Mens-Wrapper">
            <ItemList itemKind={menItems} />
          <Link to="/men" alt="more-products-men">
            <button className="btn effect01" target="_blank" >
              <span>VIEW MORE PRODUCTS</span>
            </button>
          </Link>
        </div>
        <div className="Mens-Title">
          <p>WOMEN NEW ARRIVALS</p>
        </div>

        <div className="Mens-Wrapper">
            <ItemList itemKind={womenItems} />

          <Link to="/women">
            <button className="btn effect01" target="_blank">
              <span>VIEW MORE PRODUCTS</span>
            </button>
          </Link>
        </div>
        <div className="Mens-Title">
          <p>LIMITED COLLECTION</p>
        </div>

        <div
          className="Mens-Wrapper"
          style={{ border: "none", marginBottom: "80px" }}
        >
          <ItemList itemKind={limitedItems} />

          <Link to="/limited">
            <button className="btn effect01" target="_blank">
              <span>VIEW MORE PRODUCTS</span>
            </button>
          </Link>
        </div>
      </div>


      <Fit fitItems={fitItems} />
    </div>
  );
}

export default Main;
