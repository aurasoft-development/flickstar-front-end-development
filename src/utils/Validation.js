// import validator from "validator";
export default function Validation(values) {
    let errors = {};
    if (!values.email_or_phone) {
        errors.email_or_phone = "Please enter a valid email address or phone number.";
    } 
    // else if (!validator.isEmail(values.email_or_phone) || !phone_number.test(values.email_or_phone)) {
    //     errors.email_or_phone = "Please enter a valid email address or phone number.";
    // }
     if (!values.password || values.password.length <= 4) {
        errors.password = "Your password must contain between 4 and 60 characters.";
    }

    if(!values.new_password || values.new_password.length <=4){
        errors.new_password = "Your new password must contain between 4 and 60 characters."
    }

    if(!values.confirm_password || values.confirm_password.length <=4){
        errors.confirm_password = "Your confirm password must contain between 4 and 60 characters."
    }
    
    return errors;

}