import React from "react";
import styles from "./Newsletter.module.css";
const Newsletter = () => {
  return (
    <div className={`${styles.newsLetterContainer}`}>
      <div className={`${styles.newsLetterContent}`}>
        <h1>Subscribe the Newsletter</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <div className={`${styles.newsLetterForm}`}>
          <input class="form-control" placeholder="Email" />
          <button class="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
