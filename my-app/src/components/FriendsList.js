import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axiosAuth';
import NewFriendForm from './NewFriendForm';


export const FriendsList = () => {

    const [ friends, setFriends ] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    
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
        <NewFriendForm setFriends={setFriends} />
        </>
    )

}