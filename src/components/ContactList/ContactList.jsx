// === Lib modules ===
import { useSelector, useDispatch } from "react-redux";

// === Components ===
import Contact from "./Contact/Contact.jsx";

// === Styles ===
import styles from "./ContactList.module.css";


export default function ContactList() {
  const selectContacts = useSelector((state) => {
    return state.contacts.items;
  });
  const filterCriteria = useSelector((state) => { 
    return state.filter.name;
  })

  const filteredContacts = () => {
  return filterCriteria ? selectContacts.filter((contact) => contact.name.toLowerCase().includes(filterCriteria.toLowerCase())) : selectContacts;
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
