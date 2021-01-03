import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import Logo from "assets/invictus.png";
import { SideDrawerContext } from "context/SideDrawerContext";
import { AuthContext } from "context/AuthContext";

function Header() {
  const { setOpen } = useContext(SideDrawerContext);
  const { auth } = useContext(AuthContext);
  const [isAuth] = auth;

  const sideDrawerOpenHandler = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className="Covid">
        <p>
          DUE TO COVID-19 THERE MAY BE DELAYS IN RECEIVING ORDERS AND REFUNDING
          RETURNS.
        </p>
      </div>
      <div className="Header-Wrapper">
        <div className="Header-Content">
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"  
            width="24px" 
            height="24px"
            onClick={sideDrawerOpenHandler}
            alt="sd-opener" 
          >
            <path d="M 0 2 L 0 4 L 24 4 L 24 2 Z M 0 11 L 0 13 L 24 13 L 24 11 Z M 0 20 L 0 22 L 24 22 L 24 20 Z" />
          </svg>
          <div className="Header-Logo">
            <NavLink to="/">
              <img src={Logo} alt="HeaderLogo" />
            </NavLink>
          </div>
          <ul className="Heading-Links">
            {isAuth ? (
              <> 
                <NavLink to="/profile">PROFILE</NavLink>
                <NavLink to="/search">SEARCH</NavLink> 
                <NavLink to="/cart" style={{ fontSize: "12px" }} alt="cart">
                  CART
                </NavLink>
              </>
            ) : (
              <>  
                <NavLink to="/search">SEARCH</NavLink>
                <NavLink to="/login">ACCOUNT</NavLink>
              </>
            )}
          </ul>
          <div className="Cart-Icon">
            {isAuth ? (
              <NavLink to="/cart" alt="cart-icon">
                <svg 
                  height="25px"
                  viewBox="-35 0 512 512.00102"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0" />
                </svg>
              </NavLink>
            ) : (
              <NavLink to="/login" alt="cart-icon-unauth">
                <svg
                  height="25px"
                  viewBox="-35 0 512 512.00102"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0" />
                </svg>
              </NavLink>
            )}
          </div>
          <ul className="Heading-Menu">
            <NavLink to="/men">MEN</NavLink>
            <NavLink to="/women">WOMEN</NavLink>
            <NavLink to="/kids">KIDS</NavLink>
            <NavLink to="/sale">SALE</NavLink>
            <NavLink
              to="/limited"
              style={{ fontWeight: "600", color: "#B49769" }}
            >
              LIMITED
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
