"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Discount.module.css";

export default function Discount() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Json/Products.json") // Corrected path
      .then((res) => res.json())
      .then((json) => {
        setProducts(json || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className={styles.discountSection}>
      <div className={styles.discount}>
        <div className={styles.disLine}>
          <p>Discounts up to -50%</p>
        </div>
        <div className={clsx(styles.centered, styles.Products)}>
          {products.length > 0 ? (
            products.map((product) => (
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
