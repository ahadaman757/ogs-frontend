import React from "react";
import styles from "./Newsletter.module.css";
const Newsletter = () => {
  return (
    <>
      <br />
      <br />
      <div className={`${styles.newsLetterContainer}`}>
        <div className={`${styles.newsLetterContent}`}>
          <h1 className="ogsfonts">Subscribe the Newsletter</h1>
          <p className="ogsfonts">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className={`${styles.newsLetterForm}`}>
            <input class="form-control" placeholder="Email" />
            <button class="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
      <div className={`container ${styles.newsLetterBox}`}>
        <div>
          <h3 className="ogsfonts">Start building your own job board now</h3>
          <button className="primaryButtonOutline">Search for Job</button>
        </div>
      </div>
    </>
  );
};
export default Newsletter;
