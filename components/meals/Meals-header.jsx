import Link from "next/link";

import styles from "./meals-header.module.css";

export default function MealsHeader() {
  return (
    <header className={styles.header}>
      <h1>
        Delicious Meals, created{" "}
        <span className={styles.highlight}>by You</span>
      </h1>
      <p>Explore our collection of user-submitted recipes!</p>
      <p className={styles.cta}>
        <Link href="/meals/share">Share your own recipe!</Link>
      </p>
    </header>
  );
}
