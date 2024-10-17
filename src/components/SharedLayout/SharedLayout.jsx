import { Suspense } from "react"
import { AppBar } from "../AppBar/AppBar"
import css from './SharedLayout.module.css'

export const SharedLayout = ({children}) => {
    return (
        <div>
          <AppBar/>
          <div className={css.wrapper}>
          <Suspense fallback={null}>{children}</Suspense>
          </div>
          </div>
      
    )
}