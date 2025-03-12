import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Pictures from "./components/Section2/Pictures";
import Category from "./components/Category/Category";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero></Hero>
      <Pictures></Pictures>
      <Category></Category>
    </div>
  );
}
