import styles from "./foodItem.module.css";
export default function ({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt={food.title} />
      <div className={styles.itemDescription}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.itemButton}>View Recipe</button>
      </div>
    </div>
  );
}
