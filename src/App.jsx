import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import data from "./data/data.json";

console.log(data);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactList contacts={data} />
      </div>
    </>
  );
}

export default App;
