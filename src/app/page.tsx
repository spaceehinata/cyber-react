import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Pictures from "./components/Section2/Pictures";
import Category from "./components/Category/Category";
import Arrival from "./components/Arrival/Arrival";
import Discount from "./components/Discount/Discount";
import Sale from "./components/Sale/Sale";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero></Hero>
      <Pictures></Pictures>
      <Category></Category>
      <Arrival></Arrival>
      <Discount></Discount>
      <Sale></Sale>
    </div>
  );
}
