// === Lib modules ===
import { useSelector, useDispatch } from "react-redux";

// === Components ===
import Contact from "./Contact/Contact.jsx";

// === Styles ===
import styles from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import { selectContacts } from "../../redux/contactsSlice.js";


export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter)

  const filteredContacts = () => {
  return filter ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())) : contacts;
}
  

  return (
    <div className={styles.contactList}>
      { filteredContacts().map((contact) => {
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
