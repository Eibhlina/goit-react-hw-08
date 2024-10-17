import { useSelector} from "react-redux";
import { Contact } from "../Contact/Contact";
import css from './ContactList.module.css'
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilters } from "../../redux/filters/selectors";
import Fuse from 'fuse.js'


export const ContactList = () => {

const contacts = useSelector(selectContacts);
const searchWord = useSelector(selectFilters);

const fuseOptions = {
    minMatchCharLength: 2,
    keys: [
    "name",
    "number",
]
};

const fuse = new Fuse(contacts, fuseOptions);

const searchContactList = fuse.search(searchWord.word);

const contactToRender = (allContacts, searchContacts) => {
if (searchContacts.length > 0) return searchContacts.map((el)=> el.item);
return allContacts;

}
    return (
        <ul className={css.contact_list}>
{contactToRender(contacts, searchContactList).map((contact) => {
    return <li key={contact.id}>
<Contact name={contact.name} phone={contact.number} id={contact.id}/>
</li>
})}
     </ul>
    )
}