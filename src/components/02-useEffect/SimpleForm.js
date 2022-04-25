import React, { useEffect, useState } from 'react'
import { Menssage } from './Menssage';
import './simpleForm.css'


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect( () => {
            console.log('Se ejecuta cuando cambia cualquier cosa')
    }, [ ]);

    useEffect( () => {
        console.log('Se ejecuta cuando cambia formState')
    }, [ formState ]);

    useEffect( () => {
        console.log('Se ejecuta cuando cambia email')
    }, [ email ]);

    const handleInputChange = ( ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value });
    });

    return (
        <>
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group">
                <input type="text" name="name" className='form-control' placeholder='Tu nombre' autoComplete='off' value={name} onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <input type="text" name="email" className='form-control' placeholder='Tu email' autoComplete='off' value={email} onChange={ handleInputChange } />
            </div>
            
            { name && name === '123' && <Menssage />}
        </>
      

    )
}
