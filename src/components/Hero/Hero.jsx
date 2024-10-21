import styles from "./Hero.module.css";

// Importing the image directly if possible
import heroImage from "../../assets/hero/Madan_US_passport.jpg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Madan Mohan Reddy Vanga</h1>
        <p className={styles.description}>
          Experienced full-stack developer with 6+ years of experience and a
          comprehensive skill set spanning front-end, back-end, and DevOps
          technologies, capable of driving end-to-end software development
          lifecycles.
        </p>
        <a
          href="mailto:madanmohanreddyvanga@email.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={heroImage} // Use static import
        alt="Myself"
        className={styles.heroImg}
        loading="lazy" // Lazy load the image
      />
    </section>
  );
};
