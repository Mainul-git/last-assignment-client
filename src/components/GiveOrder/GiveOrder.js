import React, { useState } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ServiceContext, UserContext } from '../../App';

const GiveOrder = () => {
    const history=useHistory()

    const{userId}=useParams()
    const [service,setService]=useContext(ServiceContext)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const takenService=service.find(task=>task.id==userId)
    const [detail,setDetail]=useState({
description:takenService.description,name:loggedInUser.name,
email:loggedInUser.email, title:takenService.title,id:takenService.id,image:takenService.img
})
const handleTask=(e)=>{

        
        fetch(' https://polar-dawn-07982.herokuapp.com/addService',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(detail)
    
    
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                history.push('/showData')
            }
            console.log(data)
        
        }
      )
e.preventDefault()
}


    return (
        <div>
            <form action=""onSubmit={handleTask} style={{margin:''}}>
            <div className="form-group">
                           <input type="text" className="form-control"value={loggedInUser.name} name="name" placeholder="Your Name"/>
                       </div>
                       <div className="form-group ">
                           <input type="text" className="form-control" name="email" value={loggedInUser.email}placeholder="Email Address *"/>
                       </div>
                       <div className="form-group ">
                           <input type="text" className="form-control"value={takenService.title} placeholder=""/>
                       </div>
  
                       <div className="form-group">
                           <input name="description"value={takenService.description} className="form-control" id="" cols="30" rows="10"required placeholder="Message *"></input>
                       </div>
                       <div className="form-group ">
   <input type="submit" className="btn btn-dark"/>
                       </div>
                   </form>
        </div>
    );
};

export default GiveOrder;