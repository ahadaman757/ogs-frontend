import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../../Components/About/About";
import BrowseJobs from "../../Components/BrowseJobs/BrowseJobs";
import HeroSec from "../../Components/heroSec/heroSec";
import Reviews from "../../Components/Reviews/Reviews";
import BrowseOver from "../../Components/BrowseOver/BrowseOver";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSec />
      <BrowseOver />
      <About />
      <BrowseJobs />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
