import styles from "./Header.module.css";

type Props = {};

function Header({}: Props) {
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
          <a href="#">
            <img src="./asserts/Favorites.svg" alt="like" />
          </a>
          <a href="cart.html">
            <img src="./asserts/Cart.svg" alt="chart" />
          </a>
          <a href="#">
            <img src="./asserts/User.svg" alt="user" />
          </a>
        </div>
        <div className={styles.burger} onclick="toggleMenu()">
          ☰
        </div>
      </div>
    </header>
  );
}

export default Header;
