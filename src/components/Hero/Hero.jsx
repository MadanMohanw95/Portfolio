import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Madan Mohan Reddy Vanga</h1>
        <p className={styles.description}>
        Experienced Software Engineer with 4 years in SQL, Java, and JavaScript. Skilled in problem-solving, code review, and process improvement. Proficient in IntelliJ, GitHub, Linux CLI, ELK, Jira, and Confluence. Focused on quality assurance and client solutions. 
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