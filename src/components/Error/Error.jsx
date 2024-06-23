//=== Redux ===
import { useSelector } from "react-redux";
import { selectIsError } from "../../redux/contactsSlice.js";


export default function Error() {
    const error = useSelector(selectIsError);
    return <h1>Error: {error} </h1>;
}