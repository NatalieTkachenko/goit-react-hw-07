// === Components ===
import { Watch } from "react-loader-spinner";

// === Styles ===
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.watch}>
      <Watch height="80" width="80" color="#112f59" />
    </div>
  );
}
