import * as Yup from "yup"

const validated = Yup.object({
    fname:Yup.string().min(1).max(10).required("enter your fname"),
    lname:Yup.string().min(1).max(10).required("enter your lname"),
    number:Yup.string().max(10).required("enter your number"),
    email:Yup.string().email().required("enter your email"),

})
export default validated