import clsx from "clsx";
import styles from "./Footer.module.css";


function Footer() {
  return (
    <footer className={styles.rfooter}>
      <div className={styles.footer}>
        <div className={styles.footerSec1}>
          <div className={clsx(styles.footerSection, styles.about)}>
            <img
              src="./asserts/footer-logo.svg"
              alt="Cyber Logo"
              className={styles.footerLogo}
            />
            <p>
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <h2 className={styles.footerTitle}>Services</h2>
              <ul>
                <li>
                  <a href="#">Bonus program</a>
                </li>
                <li>
                  <a href="#">Gift cards</a>
                </li>
                <li>
                  <a href="#">Credit and payment</a>
                </li>
                <li>
                  <a href="#">Service contracts</a>
                </li>
                <li>
                  <a href="#">Non-cash account</a>
                </li>
                <li>
                  <a href="#">Payment</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h2 className={styles.footerTitle}>Assistance to the buyer</h2>
              <ul>
                <li>
                  <a href="#">Find an order</a>
                </li>
                <li>
                  <a href="#">Terms of delivery</a>
                </li>
                <li>
                  <a href="#">Exchange and return of goods</a>
                </li>
                <li>
                  <a href="#">Guarantee</a>
                </li>
                <li>
                  <a href="#">Frequently asked questions</a>
                </li>
                <li>
                  <a href="#">Terms of use of the site</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerIcons}>
          <a href="#">
            <img src="./asserts/Twitter.svg" alt="twitter" />
          </a>
          <a href="#">
            <img src="./asserts/Facebook.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="./asserts/Tiktok.svg" alt="tiktok" />
          </a>
          <a href="#">
            <img src="./asserts/Instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
