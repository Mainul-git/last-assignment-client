import React, { useContext, useEffect } from 'react';
import { ServiceContext } from '../../App';
import CarouselShow from './CarouselShow/CarouselShow';
import Footer from './Footer/Footer';

import Header from './Header/Header';

import "./Home.css"
import InfoCards from './InfoCards/InfoCards';
import Review from './Review/Review';
import Service from './Service/Service';
const Home = () => {

    const[service,setService]=useContext(ServiceContext)

   
    return (
        <div className="" >
            <Header></Header>
            <InfoCards></InfoCards>
            <Service service={service} setService={setService}></Service>
            <CarouselShow></CarouselShow>
            <Review></Review>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;