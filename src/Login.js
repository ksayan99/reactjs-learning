import Header, { Logo } from './Header';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Login() {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('./create');
        }
    })
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const history = useHistory();

    async function VerifyUser() {
        let data = { mail, pass };
        let result = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        });
        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        history.push('/create');
    }
    
    return (
        <>
            <Header /><Logo />
            <div className='col-sm-4 offset-sm-4'>
                <h3>Login Form</h3><p />
                <input type='email' placeholder='Enter Valid Email' className='form-control'
                    value={mail} onChange={(e) => setMail(e.target.value)} /><p />

                <input type='password' placeholder='Enter a Password' className='form-control'
                    value={pass} onChange={(e) => setPass(e.target.value)} /><p />

                <Button onClick={VerifyUser}> Login Now </Button>
            </div>
        </>
    )
}
export default Login