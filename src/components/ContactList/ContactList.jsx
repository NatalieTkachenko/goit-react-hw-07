/* eslint-disable react/prop-types */
import Contact from "./Contact/Contact.jsx";


export default function ContactList({contacts}) {
 
 console.log(contacts)
  return (
    <div>
      {contacts.map (contact => {
        <Contact
          key = {contact.id}
          name={contact.name}
          number={contact.number } />
      
      })}
    </div>
  );
}
