import styles from "./Discount.module.css";

type Props = {}

const Discount = (props: Props) => {
  return (
    <section className={styles.discountSection}>
    <div className={styles.discount}>
      <div className={styles.disLine}>
        <p>Discounts up to -50%</p>
      </div>
      <div className={styles.centered} id={styles.productContainer}></div>
    </div>
  </section>
  )
}

export default Discount