// === Redux ===
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

// === Styles ===
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.name);

  const handleInputChange = () => {
    console.log(event.target.value);
    dispatch(changeFilter(event.target.value));
    
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
