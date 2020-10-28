import React, { useEffect, useState } from 'react';
import MyReviewDetail from '../MyReviewDetail/MyReviewDetail';

const MyReview = ({myReview,setMyReview}) => {
    
    
    return (
        <section>
         <div className=" row card-deck mt-5">
                 {
                     myReview.map(myreview=><MyReviewDetail myreview={myreview}></MyReviewDetail>)
                 }
            
        </div>
    </section>
    );
};

export default MyReview;