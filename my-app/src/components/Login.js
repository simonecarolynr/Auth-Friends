import React, { useState } from 'react';

export const Login = (props) => {

    const [ isLoading, setIsLoading ] = useState(false)
    const [ user, setUser ] = useState({ 
        username: 'Lambda School', 
        password: 'i<3Lambd4' 
    });

    const hanldeSubmit = e => {
        axios
            .post('http://localhost:5000/api/login', user)
            .then(res => {
                setIsLoading(true);
                localStorage.setItem('token', res.data.token);
                props.history.push('/friends');
            })
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        setUser({
            [e.target.name] : e.target.value
        })
    }

    return (
        <form onSubmit={hanldeSubmit}>
            <input name='username' placeholder='Username' onChange={handleChange} />
            <input name='password' type='password' placeholder='Password' onChange={handleChange}/>
            <button type='submit' />
        </form>
    )
} 