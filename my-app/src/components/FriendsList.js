import React, { useState } from 'react';
import axios from 'axios';

export const FriendsList = () => {

    const [ friends, setFriends ] = useState([{
        id: 0,
        name: '',
        age: 0,
        email: '',
    }])

    axios
        .get(/api/friends)
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    
    return (
        <div className='friendsList'>
            {friends.map(friend => {
                return (
                <div className='friendBox' key={friend.id}>
                    <h4>{friend.name}</h4>
                    <h6>{friend.age}</h6>
                    <h6>{friend.email}</h6>
                </div>
                )
            })}
        </div>
    )

}