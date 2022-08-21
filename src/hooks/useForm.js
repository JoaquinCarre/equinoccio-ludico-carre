import { useState } from 'react';

//usar localStorage para guardar valores que quedan guardados si no confirmó la compra aún para que quede autocompletado el formulario según puso el usuario
const formInitialValues = {
    name: '',
    email: '',
    phone: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipcode: '',
    creditCardNumber: '',
    creditCardMonthExpired: '',
    creditCardYearExpired: '',
    creditCardCVV: '',
    creditCardHolderName: '',
}

export const useForm = () => {
    const [form, setForm] = useState(formInitialValues);

    const handleInputChange = ({ target }) => {
        console.log(target.value);
        setForm({
            ...form,
            [target.name]: target.value,
        })
    }

    return { form, handleInputChange };
}