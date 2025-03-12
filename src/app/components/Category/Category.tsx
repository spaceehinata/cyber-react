import styles from "./Category.module.css";
type Props = {};

const Category = (props: Props) => {
  return (
    <section className={styles.categorySection}>
      <div className={styles.category}>
        <div className={styles.categoryLine}>
          <p>Browse By Category</p>
          <img src="./asserts/Arrow`s.png" alt="arrows" />
        </div>
        <div className={styles.categoryItems}>
          <div className={styles.categoryBox}>
            <img src="./asserts/Phones.svg" alt="Phones" />
            <p>Phones</p>
          </div>
          <div className={styles.categoryBox}>
            <img src="./asserts/Phones.svg" alt="Phones" />
            <p>Smart Watches</p>
          </div>
          <div className={styles.categoryBox}>
            <img src="./asserts/Phones.svg" alt="Phones" />
            <p>Cameras</p>
          </div>
          <div className={styles.categoryBox}>
            <img src="./asserts/Phones.svg" alt="Phones" />
            <p>Headphones</p>
          </div>
          <div className={styles.categoryBox}>
            <img src="./asserts/Phones.svg" alt="Phones" />
            <p>Computers</p>
          </div>
          <div className={styles.categoryBox}>
            <img src="./asserts/Phones.svg" alt="Phones" />
            <p>Gaming</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
