import clsx from "clsx";
import styles from "./Arrival.module.css";


type Props = {}

const Arrival = (props: Props) => {
  return (
    <section className={styles.arrivalsSection}>
      <div className={styles.arrivals}>
        <div className={styles.arrivalsLine}>
          <a href="#">New Arrival</a>
          <a href="#">Bestseller</a>
          <a href="#">Featured Products</a>
        </div>
        <div className={clsx(styles.centered,styles.ravi)}></div>
      </div>
    </section>
  )
}

export default Arrival