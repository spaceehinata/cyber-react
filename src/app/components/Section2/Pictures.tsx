import styles from "./Pictures.module.css";
type Props = {};

const Pictures = (props: Props) => {
  return (
    <section className={styles.popPic}>
      <div className={styles.playstation}>
        <img src="./asserts/PlayStation.png" alt="playstation" />
        <img
          id="styles.mobPic"
          src="./asserts/mob-playstation.png"
          alt="airpod"
        />
        <div className={styles.picText}>
          <p>
            <span>Playstation 5</span>
          </p>
          <p>
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>
      <div className={styles.macbook}>
        <img id={styles.mobPic} src="./asserts/mob-mac.png" alt="macbook" />
        <div className={styles.picText}>
          <p>
            Macbook <span>Air</span>
          </p>
          <p>
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button id={styles.shopNow}>Shop now</button>
        </div>
        <img
          id={styles.macbook}
          src="./asserts/MacBook Pro 14.png"
          alt="macbook"
        />
      </div>
      <div className={styles.airpod}>
        <img id={styles.airpod} src="./asserts/airpods1.png" alt="airpod" />
        <img id={styles.mobPic} src="./asserts/mob-airpods.png" alt="airpod" />
        <div className={styles.picText}>
          <p>
            Apple AirPods <span> Max </span>
          </p>
          <p>Computational audio. Listen, it's powerful</p>
        </div>
      </div>
      <div className={styles.vision}>
        <img id={styles.vision} src="./asserts/vision.png" alt="vision" />
        <img id={styles.mobPic} src="./asserts/mob-vision.png" alt="vision" />
        <div className={styles.picText}>
          <p>
            Apple Vision <span>Pro</span>
          </p>
          <p>An immersive way to experience entertainment</p>
        </div>
      </div>
    </section>
  );
};

export default Pictures;
