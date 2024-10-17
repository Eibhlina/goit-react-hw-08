import { useSelector } from "react-redux"
import { AuthNav } from "../AuthNav/AuthNav"
import { Nav } from "../Nav/Nav"
import { UserMenu } from "../UserMenu/UserMenu"
import css from './AppBar.module.css'
import { selectIsLoggedIn } from "../../redux/auth/selectors"

export const AppBar = () => {

const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className={css.app_bar}>
        <Nav/>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </div>
    )
}