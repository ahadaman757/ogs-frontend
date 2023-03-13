import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "../../Components/About/About";
import BrowseJobs from "../../Components/BrowseJobs/BrowseJobs";
import HeroSec from "../../Components/heroSec/heroSec";
import Reviews from "../../Components/Reviews/Reviews";
import BrowseOver from "../../Components/BrowseOver/BrowseOver";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";
import Newnavbar from "../../Components/New navbar/Newnavber";
import BlackNavbar from "./BlackNavbar";
import HeroSection from "./HeroSection";
import styles from "./homepage.module.css";
import Companies from "./Companies";
import Jobs from "./Jobs";
import Courses from "./Courses";
const Mobile = () => {
  const [userSearchTitle, setUserSearchTitle] = useState("");
  const [jobTitleLoading, setJobTitleLoading] = useState(false);
  const [titleJob, setTitleJob] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [showCustomSearch, setShowCustomSearch] = useState(false);
  const [showIndustryJobs, setShowIndustryJobs] = useState(0);
  const [showIndustry, setShowIndustry] = useState(false);
  const jobTitleLoadingHandler = () => {
    setJobTitleLoading(!jobTitleLoading);
  };

  const userSearchTitleHandler = (e) => {
    setUserSearchTitle(e);
  };

  const showCustomHandler = (e) => {
    setShowCustomSearch(e);
  };

  const countryHandler = (e) => {
    setSelectedCountry(e);
  };

  const industryHandler = (e) => {
    setShowIndustryJobs(e);
    // alert(e);
  };

  const showIndustryAllow = (e) => {
    setShowIndustry(e);
    // alert(e);
  };

  return (
    <div className={`${styles.mobilesize}`}>
      <BlackNavbar />

      <HeroSection
        userSearchTitleHandler={userSearchTitleHandler}
        showCustomHandler={showCustomHandler}
        countryHandler={countryHandler}
        industryHandler={industryHandler}
        showIndustryAllow={showIndustryAllow}
      />

      <Jobs
        showCustomSearch={showCustomSearch}
        userSearchTitle={userSearchTitle}
        showCustomHandler={showCustomHandler}
        selectedCountry={selectedCountry}
        industryHandler={showIndustry}
        // showIndustryAllow={showIndustryAllow}
        showIndustryJobs={showIndustryJobs}
      />

      <Courses />
      <Footer />
    </div>
  );
};

export default Mobile;
