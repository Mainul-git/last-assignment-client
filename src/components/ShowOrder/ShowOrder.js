import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ShowOrderChild from '../ShowOrderChild/ShowOrderChild';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



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
        <div className="row"> <div className="col-lg-2">
            
       
         <ul className="list-unstyled">
             <li>
                <Link to="/giveReview" style={{textDecoration:'none'}}>
                     <FontAwesomeIcon icon={faGripHorizontal} /> <span>Review</span> 
                  </Link>
             </li>
             <li>
                
                     <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
                
             </li>
             <li>
            
                     <FontAwesomeIcon icon={faUsers} /> <span>Services</span>
                 
                      </li>
             
             
         </ul>
    
     </div><div className="col-lg-8">
        <div className=" row justify-content-center">
            {
                user.map(info=><ShowOrderChild info={info}></ShowOrderChild>)
            }
        </div>
        </div>
        </div>
    );
};

export default ShowOrder;