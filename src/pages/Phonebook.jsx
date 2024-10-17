import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "../components/ContactForm/ContactForm"
import { ContactList } from "../components/ContactList/ContactList"
import { SearchBox } from "../components/SearchBox/SearchBox"
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";

export default function Phonebook  ()  {

const dispatch = useDispatch(); 
const error = useSelector(selectError);
const isLoading = useSelector(selectIsLoading);


useEffect(()=>{
    dispatch(fetchContacts())
}, [dispatch])

    return (
        <div>
           <h1>Phonebook</h1>
           <ContactForm />
           <SearchBox />
          {isLoading && !error && <b>Loading...</b>}
           <ContactList />
         </div>
    )
}