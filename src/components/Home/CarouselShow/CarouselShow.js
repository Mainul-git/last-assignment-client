import React from 'react';
import{Carousel} from 'react-bootstrap';
import img1 from'../../../images/carousel-1.png'
import img2 from'../../../images/carousel-2.png'
import img3 from'../../../images/carousel-3.png'
const CarouselShow = () => {
    return (<div className="m-auto" style={{backgroundColor:'black',height:'100%'}} >
        <Carousel style={{height:'80%',width:'300px',margin:'auto'}}>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={img1}
            alt=""
          />
          
            
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt=""
          />
      
    
            
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt=""
          />
      
          

        </Carousel.Item>
      </Carousel>
      </div>
    );
};

export default CarouselShow;