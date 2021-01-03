import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./SideDrawer.css";
import Backdrop from "./Backdrop/Backdrop";
import { SideDrawerContext } from "context/SideDrawerContext";
import { AuthContext } from "context/AuthContext";

function Drawer() {
  const { isOpened, setOpen } = useContext(SideDrawerContext);
  const { auth } = useContext(AuthContext); 
  const [isAuth,] = auth;

  let attachedClasses = ["SideDrawer", "Close"];
  if (isOpened) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  const sideDrawerShutHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <Backdrop disp={isOpened} shut={sideDrawerShutHandler} />
      <div className={attachedClasses.join(" ")}>
        <div className="SideDrawerContent">
          <svg
            height="15px"
            viewBox="0 0 329.26933 329"
            width="15px"
            xmlns="http://www.w3.org/2000/svg"
            fill="#e0e0e0" 
            alt="close"
            onClick={sideDrawerShutHandler}
          >
            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
          </svg>
          <br />
          <NavLink to="/men" onClick={sideDrawerShutHandler}>
            MEN
          </NavLink>
          <NavLink to="/women" onClick={sideDrawerShutHandler}>
            WOMEN
          </NavLink>
          <NavLink to="/kids" onClick={sideDrawerShutHandler}>
            KIDS
          </NavLink>
          <NavLink to="/sale" onClick={sideDrawerShutHandler}>
            SALE
          </NavLink>
          <NavLink
            to="/limited"
            onClick={sideDrawerShutHandler}
            style={{ fontWeight: "600", color: "#B49769" }}
          >
            LIMITED
          </NavLink>
          <NavLink to="/search" onClick={sideDrawerShutHandler}>
            SEARCH
          </NavLink>
          {isAuth ? (
            <NavLink
              to="/profile"
              onClick={sideDrawerShutHandler}
              style={{ borderBottom: "none", color: "#868686" }}
            >
              Profile
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              onClick={sideDrawerShutHandler}
              style={{ borderBottom: "none", color: "#868686" }}
            > 
              Account
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}

export default Drawer;
