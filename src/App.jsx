import './App.css'
import { Route, Routes } from 'react-router-dom'
import { SharedLayout } from './components/SharedLayout/SharedLayout'
import { lazy, useEffect } from 'react';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';


const HomePage = lazy(() => import("./pages/Home/Home"));
const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPage = lazy(() => import("./pages/Register"));
const PhonebookPage = lazy(() => import("./pages/Phonebook"));

export const App = () => {

const dispatch = useDispatch();
const isRefreshing = useSelector(selectIsRefreshing)

useEffect(()=> {
  dispatch(refreshUser())
}, [dispatch])
  
  return isRefreshing ? (<p>Refreshing user...</p>) : (
      <SharedLayout>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<RestrictedRoute redirectTo="/phonebook" component={<LoginPage/>}/>} />
      <Route path='/register' element={<RestrictedRoute redirectTo="/phonebook" component={<RegisterPage/>}/>} />
      <Route path='/phonebook' element={<PrivateRoute redirectTo="/login" component={<PhonebookPage/>}/>} />
    </Routes>
    </SharedLayout>
    )
  
}


