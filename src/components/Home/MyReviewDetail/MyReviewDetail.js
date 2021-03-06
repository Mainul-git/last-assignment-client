import React from 'react';

const MyReviewDetail = ({myreview}) => {
    return (<div className="col-md-4">
        <div className="card shadow-sm">
        <div className="card-header d-flex  align-items-center">
            <img className="mx-3" src={myreview.img} alt="" width="60"/>
            <div>
                <h6 className="text-primary">{myreview.myName}</h6>
                <p className="m-0">{myreview.company}</p>
            </div>
        </div>
        <div className="card-body">
            
            <p className="card-text text-secondary mt-4">{myreview.description}</p>
        </div>
        
   </div>
   </div>
    );
};

export default MyReviewDetail;