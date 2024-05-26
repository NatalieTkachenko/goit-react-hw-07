// === Lib modules ===

// === Redux ===
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";

// === Styles ===
import styles from "./Contact.module.css";
import { PiPhoneCall } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.contactCard}>
      <div>
        <div className={styles.peopleBox}>
          <span>
            <GoPeople className={styles.icon} />
          </span>
          {name}
        </div>
        <div className={styles.numberBox}>
          <span>
            <PiPhoneCall className={styles.icon} />
          </span>
          {number}
        </div>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>
        Delete
        <span>
          <AiOutlineDelete className={styles.iconButton} />
        </span>
      </button>
    </div>
  );
}
