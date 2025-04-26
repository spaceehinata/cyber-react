import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.mheader}>
      <div className={styles.header}>
        <div className="logo">
          <Image
            src="/assets/Logo.svg"
            alt="logo"
            width={150} // Adjust based on your logo size
            height={50}
          />
        </div>
        <div className={styles.search}>
          <Image
            src="/assets/Search.svg"
            alt="Search icon"
            width={20}
            height={20}
          />
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className={styles.icons}>
          <Link href="#">
            <Image
              src="/assets/Favorites.svg"
              alt="Favorites"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/cart">
            <Image
              src="/assets/Cart.svg"
              alt="Cart"
              width={20}
              height={20}
            />
          </Link>
          <Link href="#">
            <Image
              src="/assets/User.svg"
              alt="User"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
