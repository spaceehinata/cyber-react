"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Arrival.module.css";

export default function Arrival() {
  const [discounts, setDiscounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Json/Discounts.json")
      .then((res) => res.json())
      .then((json) => {
        setDiscounts(json || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className={styles.arrivalsSection}>
      <div className={styles.arrivals}>
        <div className={styles.arrivalsLine}>
          <a href="#">New Arrival</a>
          <a href="#">Bestseller</a>
          <a href="#">Featured Products</a>
        </div>
        <div className={clsx(styles.centered, styles.ravi)}>
          {discounts.length > 0 ? (
            discounts.map((product) => (
              <div key={product.id} className={styles.product}>
                <img
                  className={styles.favoriteIcon}
                  src={
                    product.favorite
                      ? "./asserts/Favorite_filled.svg"
                      : "./asserts/Favorite_duotone.svg"
                  }
                  alt="Favorite"
                />
                <img src={product.image} alt={product.name} />
                <p
                  id={styles.desc}
                  dangerouslySetInnerHTML={{
                    __html: product.name.replace(/(Graphite)/, "<br>$1"),
                  }}
                ></p>
                <p id={styles.price}>{product.price}</p>
                <button className={styles.buyNow}>Buy Now</button>
              </div>
            ))
          ) : (
            <p>No discounted products available</p>
          )}
        </div>
      </div>
    </section>
  );
}
