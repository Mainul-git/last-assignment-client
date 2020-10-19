import React from 'react';

const ReviewDetail = ({review}) => {
    return (
        <div className="card shadow-sm">
        <div className="card-header d-flex  align-items-center">
            <img className="mx-3" src={review.img} alt="" width="60"/>
            <div>
                <h6 className="text-primary">{review.author}</h6>
                <p className="m-0">{review.destination}</p>
            </div>
        </div>
        <div className="card-body">
            
            <p className="card-text text-secondary mt-4">{review.description}</p>
        </div>
        
   </div>
    );
};

export default ReviewDetail;