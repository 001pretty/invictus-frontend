import React from "react";

import Header from "components/shared/Header/Header";
import Main from "components/home/Main/Main";
import Footer from "components/shared/Footer/Footer";
import Slideshow from "components/home/Slideshow/Slideshow";



function Home() {
  return (
    <div>
      <Header />
      <Slideshow />
      <Main />
      <Footer />
    </div>
  );
} 

export default Home;
