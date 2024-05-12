// === Styles ===
import styles from "./SearchBox.module.css";

export default function SearchBox({ filter, handleFilter }) {
  const handleInputChange = () => {
    console.log(event.target.value);
    handleFilter(event.target.value);
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>Find contacts by name</p>
      <input
        className={styles.searchfield}
        type="text"
        value={filter}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}
