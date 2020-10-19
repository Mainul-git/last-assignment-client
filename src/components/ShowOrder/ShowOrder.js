import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ShowOrderChild from '../ShowOrderChild/ShowOrderChild';

const ShowOrder = () => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const[user,setUser]=useState([])
    const[load,setLoad]=useState(false)
    useEffect(()=>{
        fetch(' https://polar-dawn-07982.herokuapp.com/getServiceInfo?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[load])
    return (
        <div className=" row justify-content-center">
            {
                user.map(info=><ShowOrderChild info={info}></ShowOrderChild>)
            }
        </div>
    );
};

export default ShowOrder;