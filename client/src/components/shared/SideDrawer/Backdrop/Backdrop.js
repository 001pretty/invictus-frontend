import React from "react";

import "./Backdrop.css";

const backdrop = (props) =>
  props.disp ? <div className="Backdrop" onClick={props.shut}></div> : null;

export default backdrop;
