import React from 'react';

const InfoDetail = ({info}) => {
    return (
        <div className="col-md-2 ml-3 mr-3">
            <img src={info.img} style={{height:"30px"}} alt=""/>
        </div>
    );
};

export default InfoDetail;