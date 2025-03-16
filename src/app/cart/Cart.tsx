import styles from "./Cart.module.css";

type Props = {}

const Cart = (props: Props) => {
  return (
    <section className={styles.section}>
        <div className={styles.mid}>
            <div className={styles.shoppingCart}>
                <h2>Shopping Cart</h2>
            </div>
            <div className={styles.orderSummary}>
                <p>Order Summary</p>
                <div className={styles.discount}>
                  <p>Discount code / Promo code</p>
                  <input type="text" placeholder="Code" />
                </div>
                <div className={styles.card}>
                  <p>Your bonus card number</p>
                  <div className={styles.cardNumber}>
                    <input type="number" placeholder="Enter Card Number" />
                    <button>Apply</button>
                  </div>
                </div>
                <div className={styles.subtotal}>
                  <p>Subtotal</p>
                  <p>$0.00</p>
                </div>
                <div className={styles.tax}>
                    <p>Estimated Tax</p>
                    <p className={styles.pr}>$0.00</p>
                </div>
                <div className={styles.shipping}>
                    <p>Estimated shipping & Handling</p>
                    <p className={styles.pr}>$0.00</p>
                </div>
                <div className={styles.total}>
                  <p>Total</p>
                  <p className={styles.pr}>$0.00</p>
                </div>
                <button className={styles.checkout}>Checkout</button>
            </div>
        </div>
    </section>
  )
}

export default Cart