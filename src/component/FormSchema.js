import * as Yup from "yup";

export const formSchema=Yup.object({
    fname : Yup.string().min(3).max(26).required("First name is must"),    
    // (.)function chaining
    lname : Yup.string().min(3).max(12).required("Last name is must"),
    email : Yup.string().email().required("Email is must"),
    password : Yup.string()
    .required("Password is must")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Enter Strong Password"),
    mobile: Yup.number().typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('number is must'),
    otp: Yup.number().required("otp is must")
})
