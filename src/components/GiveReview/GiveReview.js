import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const GiveReview = () => {
    const history=useHistory()
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const[giveReview,setGiveReview]=useState({
        myName:'',
        company:'',
        description:'',
        img:loggedInUser.img
    })
    const handleBlur=(e)=>{
    
        const newUserInfo={...giveReview}
        newUserInfo[e.target.name]=e.target.value
        setGiveReview(newUserInfo)
        }
        const handleSubmit=(e)=>{
            fetch('https://polar-dawn-07982.herokuapp.com/addReview',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(giveReview)
    
    
        })
        .then(res=>res.json())
        .then(data=>{
            
            console.log(data)
        if(data){
            history.push('/home')
        }
        }
      )
e.preventDefault()
        }

    return (
        <div className="row">
            <div className="col-lg-2">
            
       
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
         
         </div>
       <div className="col-lg-8">
           
      
        <form onSubmit={handleSubmit} className="w-75 m-auto" action="" style={{margin:''}}>
        <div className="  form-group m-auto">
                       <input type="text"onBlur={handleBlur} name="myName" className="form-control"required  placeholder="Your Name"/>
                   </div>
                   <div className="form-group ">
                       <input type="text"onBlur={handleBlur} name="company" className="form-control" required placeholder="Company's Namde/Designation"/>
                   </div>
                   <div className="form-group">
                           <textarea name="description"  onBlur={handleBlur} required className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>

                  
                   <div className="form-group ">
<input type="submit"value="Send" className="btn btn-dark"/>
                   </div>
               </form>
               </div>
    </div>
);
};
    


export default GiveReview;