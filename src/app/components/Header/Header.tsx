import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.mheader}>
      <div className={styles.header}>
        <div className="logo">
          <img src="./asserts/Logo.svg" alt="logo" />
        </div>
        <div className={styles.search}>
          <img src="./asserts/Search.svg" alt="Search icon" />
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
          </ul>
        </div>
        <div className={styles.icons}>
          <Link href="#">
            <img src="./asserts/Favorites.svg" alt="like" />
          </Link>
          <Link href="/Cart">
            <img src="./asserts/Cart.svg" alt="chart" />
          </Link>
          <Link href="#">
            <img src="./asserts/User.svg" alt="user" />
          </Link>
        </div>
        {/* <div className={styles.burger} onClick="toggleMenu()">
          ☰
        </div> */}
      </div>
    </header>
  );
}

export default Header;
