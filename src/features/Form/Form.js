import { useFormik } from 'formik';
import * as yup from 'yup';
import { createUser, loginUser } from '../users/userSlice';
import useSelectors from '../../app/selectors';
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

const useForm = () => {
    const { dispatch, loading } = useSelectors()
    // const navigate = useNavigate()
    const location = useLocation()
    const handleCreateAccount = (email, password, name) => {
        
        // Dispatch the createUserAsync action to create a user
        try {
            dispatch(createUser({ email, password, name }));
            
            // The above dispatch will automatically handle loading, success, and error states.
            // You can handle any further actions or UI updates as needed.

            // If the user creation was successful, navigate to the desired route
        } catch (error) {
            // Handle any errors, if necessary
            console.log(error)
        }
    };

    const handleLogin = (email, password, name) => {
        try {
            dispatch(loginUser({ email, password }));
            
        }
        catch (error) {
            // Handle any errors, if necessary
            console.log(error)
        }
    };
    var emailReg = /^([\w\-.]+@([\w-]+\.)+[\w-]{2,13})?$/;
    const passwordReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,32}$/gm
    const [showSuccess, setShowSuccess] = useState(false)
    useEffect(() => {
        setShowSuccess(loading === 'succeeded' || loading === 'failed')
        setTimeout(() => {setShowSuccess(false)}, 6000)
    }, [loading])
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            name: yup
                .string()
                .max(25, 'Must be 25 characters or less'),
            email: yup
                .string()
                .matches(emailReg, 'Invalid email address')
                .required('Required'),
            password: yup.string().matches(passwordReg, 'Email must contain at least an 1(uppercase), 1(lowercase) and 1 special character').required('Required'),
        }),
        onSubmit: (values, actions) => {
            console.log('ran')
            if (location.pathname === '/sign-up')
                handleCreateAccount(values.email, values.password, values.name)
            if (location.pathname === '/login')
                handleLogin(values.email, values.password)
            actions.resetForm();
        }
    });
    return { formik, showSuccess, setShowSuccess };
};

export default useForm;
