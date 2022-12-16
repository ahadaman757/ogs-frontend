import React from "react";

import About from "../../Components/About/About";
import BrowseJobs from "../../Components/BrowseJobs/BrowseJobs";
import HeroSec from "../../Components/heroSec/heroSec";
import Reviews from "../../Components/Reviews/Reviews";
import BrowseOver from "../../Components/BrowseOver/BrowseOver";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";
import Newnavbar from "../../Components/New navbar/Newnavber";
import Navbar from "../../Components/Navbar/Navbar";

import styles from "./homepage.module.css";

const Desktop = () => {
  return (
    <div className={`${styles.desktopsize}`}>
      <Navbar />
      <HeroSec />
      <BrowseOver />
      <About />
      <BrowseJobs />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Desktop;
