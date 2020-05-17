import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuth';

const NewFriendForm = (props) => {

    const [ friend, newFriend ] = useState({
        id: 0,
        name: '',
        age: 0,
        email: ''
    })

    const hanldeSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', friend)
            .then(res => {
                props.setFriends(res.data)
                newFriend({
                    id: 0,
                    name: '',
                    age: 0,
                    email: ''
                })
            })
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        newFriend({...friend,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form onSubmit={hanldeSubmit} >
            <input name='name' placeholder='Name' value={friend.name} onChange={handleChange} />
            <input name='age' placeholder='Age' value={friend.age} onChange={handleChange} />
            <input name='email' placeholder='Email' value={friend.email} onChange={handleChange} />
            <button type='submit' />
        </form>
    )
}

export default NewFriendForm;