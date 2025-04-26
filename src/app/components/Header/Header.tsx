import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image

function Header() {
  return (
    <header className={styles.mheader}>
      <div className={styles.header}>
        <div className="logo">
          <Image
            src="./asserts/Logo.svg" // Path to the image
            alt="logo"
            width={100} // Set the appropriate width
            height={40} // Set the appropriate height
          />
        </div>
        <div className={styles.search}>
          <Image
            src="./asserts/Search.svg" // Path to the image
            alt="Search icon"
            width={24} // Set the appropriate width
            height={24} // Set the appropriate height
          />
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
            <Image
              src="./asserts/Favorites.svg" // Path to the image
              alt="like"
              width={24} // Set the appropriate width
              height={24} // Set the appropriate height
            />
          </Link>
          <Link href="/Cart">
            <Image
              src="./asserts/Cart.svg" // Path to the image
              alt="chart"
              width={24} // Set the appropriate width
              height={24} // Set the appropriate height
            />
          </Link>
          <Link href="#">
            <Image
              src="./asserts/User.svg" // Path to the image
              alt="user"
              width={24} // Set the appropriate width
              height={24} // Set the appropriate height
            />
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
