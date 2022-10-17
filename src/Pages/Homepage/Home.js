import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../../Components/About/About";
import BrowseJobs from "../../Components/BrowseJobs/BrowseJobs";
import HeroSec from "../../Components/heroSec/heroSec";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSec />
      <About />
      <BrowseJobs />
    </>
  );
};

export default Home;
