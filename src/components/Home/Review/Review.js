import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
const reviews=[{img:"https://i.ibb.co/xCmdqhK/customer-1.png",id:1,author:"Mainul",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima",destination:"ceo,Mandal"

},{img:"https://i.ibb.co/khRMbF9/customer-2.png",id:2,author:"Muna",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima",destination:"ceo,Mandal"

},{
img:"https://i.ibb.co/LSr058q/customer-3.png",id:3,author:"ASDGHJK",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima",destination:"ceo,Mandal"
}]
const Review = () => {
      const[review,setReview]=useState([])
    
useEffect(()=>{
    fetch(' https://polar-dawn-07982.herokuapp.com/getReview')
    .then(res=>res.json())
    .then(data=>setReview(data))
},[])

    
    //     fetch(' https://polar-dawn-07982.herokuapp.com/service',{
    //         method:'POST',
    //         headers:{'Content-Type':'application/json'},
    //         body:JSON.stringify(reviews)
    
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{console.log(data)})
    // }
    return (
        <section className="blogs my-5">
        <div className="container">
            <div className="section-header text-center">
                 <h5 className="text-primary text-uppercase">our blog</h5>
                 <h1>From Our Blog News</h1>
            </div>
            <div className="card-deck mt-5">
                 {
                     review.map(review=><ReviewDetail review={review}></ReviewDetail>)
                 }
            </div>
        </div>
    </section>
    );
};

export default Review;