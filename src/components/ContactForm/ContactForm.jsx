import { Formik, Form, Field, ErrorMessage,  } from "formik";
import * as Yup from "yup";
import css from './ContactForm.module.css'
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
toast

export const ContactForm = () => {

    const dispatch = useDispatch();

    const nameId = useId();
    const phoneId = useId();

    const ContactFormSchema = Yup.object().shape(
        {name: Yup.string().matches(/^[a-zA-Z]+( [a-zA-Z]+)*$/, 'Only letters').min(3, "Too short").max(50, "Too long").required("Required"),
        phone: Yup.string().matches(/^[0-9-]+$/, 'Invalid format').min(3, "Too short").max(50, "Too long").required("Required"),
    }
    )

    const initialValues = {
        name: "",
        phone: "",
    }
    const handleSubmit = (values, actions) => {
        dispatch(addContact({
            name: values.name,
            phone: values.phone,
        }));
        actions.resetForm();
    }
    return (
        <div>
        <Toaster/>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactFormSchema}>
        <Form className={css.contact_form}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId}/>
            <ErrorMessage name="name" render={msg => <span className={css.error}>{msg}</span>} />
            <label htmlFor={phoneId}>Number</label>
            <Field type="text" name="phone" id={phoneId}/>
            <ErrorMessage name="phone" render={msg => <span className={css.error}>{msg}</span>} />
            <button type="submit" >Add contact</button>
        </Form>
    </Formik>
    </div>
    )
}