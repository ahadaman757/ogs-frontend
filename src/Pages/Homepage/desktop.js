import React, { useState } from "react";

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
import BrowseOverSecond from "../../Components/BrowseOver/BrowseOverSecond";

const Desktop = () => {
  const [userSearchTitle, setUserSearchTitle] = useState('');
  const [jobTitleLoading, setJobTitleLoading] = useState(false);
  const [titleJob, setTitleJob] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [showCustomSearch, setShowCustomSearch] = useState(false);

  const jobTitleLoadingHandler = () => {
    setJobTitleLoading(!jobTitleLoading);
  }

  const userSearchTitleHandler = (e) => {
    setUserSearchTitle(e);
  }

  const showCustomHandler = (e) => {
    setShowCustomSearch(e);
  }

  const countryHandler = (e) => {
    setSelectedCountry(e);
  }

  return (
    <div className={`${styles.desktopsize}`}>
      <Navbar />
      <HeroSec userSearchTitleHandler={userSearchTitleHandler} showCustomHandler={showCustomHandler} countryHandler={countryHandler} />
      <BrowseOverSecond showCustomSearch={showCustomSearch} userSearchTitle={userSearchTitle} showCustomHandler={showCustomHandler} selectedCountry={ selectedCountry } />

      <BrowseJobs />

      <Footer />
    </div>
  );
};

export default Desktop;
