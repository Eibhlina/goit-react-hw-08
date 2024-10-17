import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css'

export const AuthNav = () => {
    return (
        <div className={css.auth_box}>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>LogIn</NavLink>
        </div>
    )
}