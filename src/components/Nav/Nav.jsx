import { NavLink } from "react-router-dom";
import css from "./Nav.module.css"
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


export const Nav = () => {

const isLoggedIn = useSelector(selectIsLoggedIn);

return (<div className={css.nav_box}>
<NavLink to='/'>Home</NavLink>
{isLoggedIn && (<NavLink to='/phonebook'>Phonebook</NavLink>)}
</div>)
}