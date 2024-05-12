// === Styles ===
import styles from "./ContactList.module.css";

import Contact from "./Contact/Contact.jsx";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={styles.contactList}>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
            id={contact.id}
          />
        );
      })}
    </div>
  );
}
