import React from "react";

import SideDrawer from "components/shared/SideDrawer/SideDrawer";

function Layout(props) {
  return (
    <div>
      <SideDrawer />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
