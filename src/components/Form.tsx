import { useState } from 'react';
import { useForm } from '../hooks/useForm';
export const Form = () => {

    const {form, onChangeValue} = useForm({
        email: 'test@test.com',
        password: '123456'
    })

    return (
        <>
            <h3>Form</h3>
            <input 
                type="text"
                placeholder="Email"
                value={form.email}
                className="form-control mb-2"
                onChange={({target}) => onChangeValue('email', target.value)}
            />
            <input 
                type="text"
                placeholder="Password"
                value={form.password}
                className="form-control mb-2"
                onChange={({target}) => onChangeValue('password', target.value)}
            />
            <code>
                <pre>{JSON.stringify(form, null, 2)}</pre>
            </code>
        </>
    )
}
