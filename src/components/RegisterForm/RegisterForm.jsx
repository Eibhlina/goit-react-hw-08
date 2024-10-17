import { Formik, Form, Field, ErrorMessage,  } from "formik";
import { useId } from "react";
import css from './RegisterForm.module.css'
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";



export const RegisterForm = () => {

    const dispatch = useDispatch();

    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();

    
    const initialValues = {
        name:"",
        email: "",
        password: "",
    }

    const LoginSchema = Yup.object().shape(
        {name: Yup.string().min(5, "Too short").max(15, "Too long").required("Required"),
        email: Yup.string().min(5, "Too short").required("Required"),
        password: Yup.string().min(5, "Too short").required("Required"),
    }
    )


    const handleSubmit = (values, actions) => {
        dispatch(
            register({
            name: values.name,
            email: values.email,
            password: values.password,
        }))
        actions.resetForm();
    }

    return (
<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={LoginSchema}>
    <Form className={css.contact_form}>
        <label htmlFor={nameId}>Name:</label>
        <Field type="text" name="name" id={nameId}/>
        <ErrorMessage name="name" render={msg => <span className={css.error}>{msg}</span>} />
        <label htmlFor={emailId}>Email:</label>
        <Field type="email" name="email" id={emailId}/>
        <ErrorMessage name="email" render={msg => <span className={css.error}>{msg}</span>} />
        <label htmlFor={passwordId}>Password:</label>
        <Field type="password" name="password" id={passwordId}/>
        <ErrorMessage name="password" render={msg => <span className={css.error}>{msg}</span>} />
        <button type="submit">Register</button>
    </Form>
</Formik>
    )
}