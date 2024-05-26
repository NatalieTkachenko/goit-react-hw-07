// === Lib modules ===
import { useSelector, useDispatch } from "react-redux";

// === Components ===
import Contact from "./Contact/Contact.jsx";

// === Styles ===
import styles from "./ContactList.module.css";
import { nanoid } from "nanoid";

export default function ContactList() {
  const phoneContacts = useSelector((state) => {
    return state.contacts.items;
  });
  const filterCriteria = useSelector((state) => { 
    return state.filter.name;
  })

  const filteredContacts = () => {
  return filterCriteria ? phoneContacts.filter((contact) => contact.name.toLowerCase().includes(filterCriteria.toLowerCase())) : phoneContacts;
}
  

  return (
    <div className={styles.contactList}>
      { filteredContacts().map((contact) => {
        return (
          <Contact
            key={nanoid()}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        );
      })}
    </div>
  );
}
