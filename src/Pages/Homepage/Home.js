import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../../Components/About/About";
import BrowseJobs from "../../Components/BrowseJobs/BrowseJobs";
const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <BrowseJobs />
    </>
  );
};

export default Home;
