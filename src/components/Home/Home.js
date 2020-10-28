import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '../../App';
import CarouselShow from './CarouselShow/CarouselShow';
import Footer from './Footer/Footer';

import Header from './Header/Header';

import "./Home.css"
import InfoCards from './InfoCards/InfoCards';
import MyReview from './MyReview/MyReview';
import Review from './Review/Review';
import Service from './Service/Service';
const Home = () => {
    const[myReview,setMyReview]=useState([])
    const[loaded,setLoaded]=useState(false)

    const[service,setService]=useContext(ServiceContext)
    useEffect(()=>{
        fetch(' https://polar-dawn-07982.herokuapp.com/getReviewInfo')
        .then(res=>res.json())
        .then(data=>setMyReview(data))
    },[loaded])

   
    return (
        <div className="" >
            <Header></Header>
            <InfoCards></InfoCards>
            <Service service={service} setService={setService}></Service>
            <CarouselShow></CarouselShow>
            <Review></Review>
            <MyReview myReview={myReview} setMyReview={setMyReview}></MyReview>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;