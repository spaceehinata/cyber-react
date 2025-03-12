import styles from "./Hero.module.css";
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p id={styles.line1}>Pro.Beyond.</p>
          <h1>
            IPhone 14 <span>Pro</span>
          </h1>
          <p id={styles.line2}>
            Created to change everything for the better. For everyone
          </p>
          <button id={styles.shopNow}>Shop Now</button>
        </div>
        <div className={styles.heroImage}>
          <img src="./asserts/Iphone Image.svg" alt="iphone" />
        </div>
        <div className={styles.heroMobImage}>
          <img src="./asserts/mob-iphone.svg" alt="iphone" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
