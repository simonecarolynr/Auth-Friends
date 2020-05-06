import React, { useState } from 'react';

export const Login = () => {

    const [ isLoading ] = useState(false)

    return (
        <form>
            <input name='username' placeholder='Username' />
            <input name='password' type='password' placeholder='Password' />
            <button type='submit' />
        </form>
    )
} 