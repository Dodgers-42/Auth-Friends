import React from 'react';
import { axiosWithAuth } from '../axios/axiosWithAuth';

import Friend from "./Friend";

const axios = axiosWithAuth();

const Friends = (props) => {
    const [data, setData] = useState({
        name: "",
        age: "",
        email: ""
    })

    const onChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/friends", data)
        .then(({data})=> {
            props.setFriends(data);
            setData({
                name: "",
                age: "",
                email: ""
            });
        })
        .catch(err=>{
            console.log(err);
            console.log(props.setFriends);
        });
    }

    const deleteFriend = id => {
        axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then(({data})=>{
            props.setFriends(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const updateFriend = (id, data) => {
        axios.delete(`http://localhost:5000/api/friends/${id}`, data)
        .then(({data})=>{
            props.setFriends(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(() => {
        axios.delete("http://localhost:5000/api/friends")
        .then(({data})=>{
            props.setFriends(data);
        })
        .catch(err=>{
            console.log(props.setFriends);
        
        });
    }, []);

}