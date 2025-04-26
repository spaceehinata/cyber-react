import styles from "./Pictures.module.css";
import Image from "next/image";

const Pictures = () => {
  return (
    <section className={styles.popPic}>
      <div className={styles.playstation}>
        <Image src="/asserts/PlayStation.png" alt="playstation" width={500} height={500} />
        <Image className={styles.mobPic} src="/asserts/mob-playstation.png" alt="playstation mobile" width={300} height={300} />
        <div className={styles.picText}>
          <p>
            <span>Playstation 5</span>
          </p>
          <p>
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
          </p>
        </div>
      </div>

      <div className={styles.macbook}>
        <Image className={styles.mobPic} src="/asserts/mob-mac.png" alt="macbook mobile" width={300} height={300} />
        <div className={styles.picText}>
          <p>
            Macbook <span>Air</span>
          </p>
          <p>
            The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
          </p>
          <button id={styles.shopNow}>Shop now</button>
        </div>
        <Image className={styles.macbook} src="/asserts/MacBook Pro 14.png" alt="macbook" width={500} height={500} />
      </div>

      <div className={styles.airpod}>
        <Image className={styles.airpod} src="/asserts/airpods1.png" alt="airpod" width={500} height={500} />
        <Image className={styles.mobPic} src="/asserts/mob-airpods.png" alt="airpod mobile" width={300} height={300} />
        <div className={styles.picText}>
          <p>
            Apple AirPods <span> Max </span>
          </p>
          <p>Computational audio. Listen, it&rsquo;s powerful.</p>
        </div>
      </div>

      <div className={styles.vision}>
        <Image className={styles.vision} src="/asserts/vision.png" alt="vision" width={500} height={500} />
        <Image className={styles.mobPic} src="/asserts/mob-vision.png" alt="vision mobile" width={300} height={300} />
        <div className={styles.picText}>
          <p>
            Apple Vision <span>Pro</span>
          </p>
          <p>An immersive way to experience entertainment.</p>
        </div>
      </div>
    </section>
  );
};

export default Pictures;
