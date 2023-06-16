import * as yup from "yup";

export const basicSchema = yup.object().shape({
    fullName: yup.string().min(5).required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    phoneNumber: yup.number().positive().integer().min(5).required("Required")
})