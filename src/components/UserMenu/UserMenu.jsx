import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from './UserMenu.module.css'

export const UserMenu = () => {

const userName = useSelector(selectUser).name;
const dispatch = useDispatch();


    return (
        <div className={css.user_menu}>
            <p>Welcome {userName} 👋</p>
            <button type="button" onClick={() => dispatch(logOut())}>Log out</button>
        </div>
    )
}