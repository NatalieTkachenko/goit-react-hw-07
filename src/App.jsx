// === Lib modules ===
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// === Components ===
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";

// === Redux ===
import { useSelector } from "react-redux";
import { selectIsLoading } from "./redux/contactsSlice.js";
import { selectIsError } from "./redux/contactsSlice.js";
import { fetchContacts } from "./redux/contactsOps";

// === Styles ===

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {isError && <Error />}
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        <ContactList />
      </div>
    </>
  );
}

export default App;
