import { Formik, Form, Field, ErrorMessage,  } from "formik";
import { useId } from "react";
import css from './LoginForm.module.css'
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";



export const LoginForm = () => {

    const dispatch = useDispatch();

    const EmailId = useId();
    const passwordId = useId();
    
    const initialValues = {
        email: "",
        password: "",
    }

    const LoginSchema = Yup.object().shape(
        {email: Yup.string().min(5, "Too short").max(15, "Too long").required("Required"),
        password: Yup.string().min(5, "Too short").max(15, "Too long").required("Required"),
    }
    )


    const handleSubmit = (values, actions) => {
        dispatch(logIn({
            email: values.email,
            password: values.password,}))
        actions.resetForm();
    }

    return (
<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={LoginSchema}>
    <Form className={css.contact_form}>
        <label htmlFor={EmailId}>Email:</label>
        <Field type="email" name="email" id={EmailId}/>
        <ErrorMessage name="email" render={msg => <span className={css.error}>{msg}</span>} />
        <label htmlFor={passwordId}>Password:</label>
        <Field type="password" name="password" id={passwordId}/>
        <ErrorMessage name="password" render={msg => <span className={css.error}>{msg}</span>} />
        <button type="submit">Log In</button>
    </Form>
</Formik>
    )
}