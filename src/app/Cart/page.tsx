"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // Import Image from Next.js
import styles from "./Cart.module.css";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  favorite?: boolean;
  quantity: number;  // Make quantity a required field
}

export default function Home() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        } else {
          setCartItems([]);
        }
      } catch (error) {
        console.error("Error parsing cart:", error);
        setCartItems([]);
      }
    }
  }, []);

  const getProductPrice = (item: Product): number => {
    if (!item || typeof item.price !== "string") {
      return 0;
    }
    return parseFloat(item.price.replace("$", "")) || 0;
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity || 0) + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return undefined; // Instead of returning null, return undefined
        }
        return item;
      })
      .filter((item): item is Product => item !== undefined);  // Remove undefined items
  
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + getProductPrice(item) * (item.quantity || 1),
    0
  );
  const tax = cartItems.length > 0 ? 50 : 0;
  const shipping = cartItems.length > 0 ? 29 : 0;
  const total = subtotal + tax + shipping;

  const getProductImage = (image: string) => {
    return image ? image : "/asserts/empty.avif"; // Default empty cart image path
  };

  return (
    <section className={styles.section}>
      <div className={styles.mid}>
        <div className={styles.shoppingCart}>
          <h2>Shopping Cart</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className={styles.item}>
                <Image
                  src={getProductImage(item.image)}
                  alt={item.name}
                  width={200}  // Define width and height for optimization
                  height={200}
                  className={styles.productImage}
                />
                <div className={styles.details}>
                  <div className={styles.itemDetails}>
                    <p className={styles.title}>{item.name}</p>
                  </div>
                  <div className={styles.quantityContainer}>
                    <div className={styles.quantity}>
                      <button
                        className={styles.button}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className={styles.button}
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                      <p className={styles.price}>
                        ${((getProductPrice(item) || 0) * (item.quantity || 1)).toFixed(2)}
                      </p>
                      <Image
                        src="/asserts/Close.svg"
                        alt="Close"
                        width={24} 
                        height={24}
                        className={styles.XIcon}
                        onClick={() => removeItem(item.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Image
              src={getProductImage("")}
              alt="Your cart is empty"
              width={600}
              height={400}
              className={styles.emptyCartImage}
            />
          )}
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
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className={styles.tax}>
            <p>Estimated Tax</p>
            <p className={styles.pr}>${tax}</p>
          </div>
          <div className={styles.shipping}>
            <p>Estimated shipping & Handling</p>
            <p className={styles.pr}>${shipping}</p>
          </div>
          <div className={styles.total}>
            <p>Total</p>
            <p className={styles.pr}>${total.toFixed(2)}</p>
          </div>
          <button className={styles.checkout}>Checkout</button>
        </div>
      </div>
    </section>
  );
}
