import styles from "./Sale.module.css";

type Props = {};

function Sale({}: Props) {
  return (
    <section className={styles.sec6}>
      <div className={styles.saleContent}>
        <h1>Big Summer <span>Sale</span></h1>
        <p id={styles.secLine2}>
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button>Shop Now</button>
      </div>    
    </section>
  );
}

export default Sale;
