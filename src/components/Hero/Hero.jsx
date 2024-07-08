import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Madan Mohan Reddy Vanga</h1>
        <p className={styles.description}>
          Experienced Full Stack Engineer with 4+ years of expertise in JavaScript, React.js, and performance testing frameworks.
          Demonstrated ability to collaborate with UX designers to create responsive user interfaces, optimize performance, and 
          enhance user experiences in web and mobile applications!
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