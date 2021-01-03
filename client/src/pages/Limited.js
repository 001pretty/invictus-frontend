import React from "react";

import Header from "components/shared/Header/Header";
import Footer from "components/shared/Footer/Footer";
import MainLimited from "components/limited/MainLimited";

function Limited() {
  return (
    <div>
      <Header />
      <MainLimited />
      <Footer />
    </div>
  );
}

export default Limited;
