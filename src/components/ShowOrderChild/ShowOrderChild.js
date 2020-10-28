import React from 'react';
import InfoCards from '../Home/InfoCards/InfoCards';

const ShowOrderChild = ({info}) => {
    
    return (
        <div className="col-md-6">
            <img style={{height:"50px"}} src={info.image} alt="" />

            <h1>{info.title}</h1>
            <p>{info.description}</p>
        </div>
    );
};

export default ShowOrderChild;