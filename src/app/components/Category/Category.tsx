import styles from "./Category.module.css";
import Image from "next/image";

const Category = () => {
  return (
    <section className={styles.categorySection}>
      <div className={styles.category}>
        <div className={styles.categoryLine}>
          <p>Browse By Category</p>
          <Image src="/asserts/Arrows.png" alt="arrows" width={24} height={24} />
        </div>
        <div className={styles.categoryItems}>
          {[
            { src: "/asserts/Phones.svg", label: "Phones" },
            { src: "/asserts/Phones.svg", label: "Smart Watches" },
            { src: "/asserts/Phones.svg", label: "Cameras" },
            { src: "/asserts/Phones.svg", label: "Headphones" },
            { src: "/asserts/Phones.svg", label: "Computers" },
            { src: "/asserts/Phones.svg", label: "Gaming" },
          ].map((item, idx) => (
            <div key={idx} className={styles.categoryBox}>
              <Image src={item.src} alt={item.label} width={50} height={50} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
