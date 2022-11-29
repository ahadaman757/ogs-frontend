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
import Companies from "./Companies";
import Jobs from "./Jobs";
import Courses from "./Courses";
const Home = () => {
  return (
    <>
      {/* <Newnavbar />
      <HeroSec />
      <BrowseOver />
      <About />
      <BrowseJobs />
      <Reviews />
      <Newsletter />
      <Footer /> */}
      <BlackNavbar />
      <Navbar />
      <HeroSection />
      <Companies />
      <Jobs />
      <Courses />
      <Footer />
    </>
  );
};

export default Home;
