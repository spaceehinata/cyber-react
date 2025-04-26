import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.line1}>Pro.Beyond.</p>
          <h1>
            iPhone 14 <span>Pro</span>
          </h1>
          <p className={styles.line2}>
            Created to change everything for the better. For everyone.
          </p>
          <button className={styles.shopNow}>Shop Now</button>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/asserts/Iphone Image.svg"
            alt="iphone"
            width={600}
            height={600}
          />
        </div>
        <div className={styles.heroMobImage}>
          <Image
            src="/asserts/mob-iphone.svg"
            alt="iphone mobile"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
