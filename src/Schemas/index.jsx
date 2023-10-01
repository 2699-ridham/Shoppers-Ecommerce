import * as Yup from 'yup';

//for validation using Yup;
export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(20).required("Please enter the your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Plaese enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"),null], "Password must match")
})
