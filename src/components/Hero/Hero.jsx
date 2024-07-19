import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Madan Mohan Reddy Vanga</h1>
        <p className={styles.description}>
          Experienced software engineer with 4+ years of expertise in building scalable applications with JavaScript frameworks like React and Node.js, leveraging ES6 features, Redux, and RESTful APIs. 
          Proven track record in optimizing systems, integrating diverse technologies, and implementing robust database solutions in healthcare and academic settings.
        </p>
        <a href="mailto:madanmohanreddyvanga@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Madan_US_passport.jpg")}
        alt="Myself"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};