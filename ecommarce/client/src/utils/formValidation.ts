import { toast } from "react-toastify";

// eslint-disable-next-line no-useless-escape
const mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// eslint-disable-next-line no-invalid-regexp, no-useless-escape
const mobileFormat = /^(?:(?:\+|00)88|01)?(?:\d{11}|\d{13})$/;
// eslint-disable-next-line no-useless-escape
const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

class FormValidation{
    isEmpty(value: string){
        return value.trim().length === 0;
    }
    
    validateEmail(email: string){
        return mailformat.test(email);
    }
    
    validateMobile(mobile: string){
        return mobileFormat.test(mobile);
    }
    
    validatePassword(password: string){
        return passwordFormat.test(password);
    }

    errorToast(message: string){
        toast.error(message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    successToast(message: string){
        toast.success(message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
}

export const {
    isEmpty,
    validateEmail,
    validateMobile,
    validatePassword,
    errorToast,
    successToast
} = new FormValidation();