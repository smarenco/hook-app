import { useState } from 'react'

export const useForm = ( initianState = {}) => {
  
    const [values, setValues] = useState(initianState)

    const handleInputChange = ( ({ target }) => {
        setValues({ ...values, [target.name]: target.value });
    });

    return [ values, handleInputChange];
}
