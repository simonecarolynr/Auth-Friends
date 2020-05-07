import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuth';
import NewFriendForm from './NewFriendForm';


export const FriendsList = () => {

    const [ friends, setFriends ] = useState([{
        id: 0,
        name: '',
        age: 0,
        email: '',
    }])

    axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    
    return (
        <>
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
        <NewFriendForm />
        </>
    )

}