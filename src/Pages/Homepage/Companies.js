import React, { useEffect, useState } from "react";
import styles from "./homepage.module.css";
import Carousel from "react-elastic-carousel";
import ClovineLogo from "../../Assets/Images/clovine.png";
import axios from "axios";
export const Companies = () => {
  const [Companidata, setCompanidata] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3002/general/getCompanies")
      .then((res) => setCompanidata(res.data.getCompanies[0]));
  }, []);
  console.log(Companidata, "sas");
  const companies = [
    {
      id: 1,
      company_name: "Clovine",
      description: "Head of Department",
      logo: ClovineLogo,
    },
    {
      id: 2,
      company_name: "Clovine",
      description: "Head of Department",
      logo: ClovineLogo,
    },
    {
      id: 3,
      company_name: "Clovine",
      description: "Head of Department",
      logo: ClovineLogo,
    },
    {
      id: 4,
      company_name: "Clovine",
      description: "Head of Department",
      logo: ClovineLogo,
    },
    {
      id: 5,
      company_name: "Clovine",
      description: "Head of Department",
      logo: ClovineLogo,
    },
    {
      id: 6,
      company_name: "Clovine",
      description: "Head of Department",
      logo: ClovineLogo,
    },
  ];
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 5 },
    { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 5 },
  ];
  return (
    <div className={`container ${styles.companies__container}`}>
      <div className={`p-md-5 ${styles.companies__internalContainer}`}>
        <div className={` ${styles.companies__headingContainer}`}>
          <h3>Promo Companies / Jobs</h3>
          <a href="#">View all</a>
        </div>
        <br />
        <Carousel itemsToShow={5} breakPoints={breakpoints}>
          {Companidata.map((item) => (
            <div key={item.id} className={`${styles.companies__sliderItem}`}>
              <img
                style={{ width: "100px" }}
                src={`http://localhost:3002/` + item.company_logo}
              />
              <h6>{item.company_name}</h6>
              <span>{item.business_webpage}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Companies;
