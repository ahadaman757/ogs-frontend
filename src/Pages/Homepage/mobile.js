import React from "react";
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
  return (
    <div className={`${styles.mobilesize}`}>
      <BlackNavbar />

      <HeroSection />

      <Jobs />

      <Courses />
      <Footer />
    </div>
  );
};

export default Mobile;
