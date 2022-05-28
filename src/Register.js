import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Header, { Logo } from './Header';
import { useHistory } from 'react-router-dom';

function Register() {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('./create');
        }
    })
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const history = useHistory();

    async function Signup() {
        let data = { name, mail, pass };
        let result = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        });
        result = await result.json();
        // console.warn('logdata', result);
        localStorage.setItem('user-info', JSON.stringify(result));
        history.push('/create'); // page redirection
    }

    return (
        <>
            <Header /><Logo />
            <div className='col-sm-4 offset-sm-4'>
                <h3>Registration</h3><p />
                <input type='text' placeholder='Enter Your Name' className='form-control'
                    value={name} onChange={(e) => setName(e.target.value)} /><p />

                <input type='email' placeholder='Enter Valid Email' className='form-control'
                    value={mail} onChange={(e) => setMail(e.target.value)} /><p />

                <input type='password' placeholder='Enter a Password' className='form-control'
                    value={pass} onChange={(e) => setPass(e.target.value)} /><p />

                <Button onClick={Signup}> Signup Now </Button>
            </div>
        </>
    )
}
export default Register