import styles from "./container.module.css";
export default function AppContainer({ children }) {
  return <div className={styles.parentContainer}>{children} </div>;
}
