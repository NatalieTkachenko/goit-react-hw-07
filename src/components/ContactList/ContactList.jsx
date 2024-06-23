// === Lib modules ===
import { useSelector} from "react-redux";

// === Components ===
import Contact from "./Contact/Contact.jsx";

// === Redux ===
import {selectFilteredContacts} from "../../redux/contactsSlice.js";
// === Styles ===
import styles from "./ContactList.module.css";


export default function ContactList() {

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={styles.contactList}>
      {filteredContacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        );
      })}
    </div>
  );
}
