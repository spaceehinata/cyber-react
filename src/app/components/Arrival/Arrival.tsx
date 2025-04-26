"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import styles from "./Arrival.module.css";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  favorite: boolean;
  quantity?: number;  
}

export default function Arrival() {
  const [discounts, setDiscounts] = useState<Product[]>([]);
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

  const addToCart = (product: Product) => {
    const cartItems: Product[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

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
                <Image
                  className={styles.favoriteIcon}
                  src={
                    product.favorite
                      ? "/asserts/Favorite_filled.svg"
                      : "/asserts/Favorite_duotone.svg"
                  }
                  alt="Favorite Icon"
                  width={24}
                  height={24}
                />
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  objectFit="contain"
                />
                <p
                  className={styles.desc}
                  dangerouslySetInnerHTML={{
                    __html: product.name.replace(/(Graphite)/, "<br>$1"),
                  }}
                ></p>
                <p className={styles.price}>{product.price}</p>
                <button
                  className={styles.buyNow}
                  onClick={() => addToCart(product)}
                >
                  Buy Now
                </button>
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
