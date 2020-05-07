import React, { useState } from 'react';

const NewFriendForm = () => {

    const [ friend, newFriend ] = useState([{
        id: 0,
        name: '',
        age: 0,
        email: ''
    }])

    const hanldeSubmit = e => {
        axios
            .post('/api/friends', friend)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        newFriend({
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