import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({info}) => {
    return (
        <div  className="col-md-4 info-card"><Link className="mr-3"to={`/register/${info.id}`}>
        <div  className="justify-content-center info-container ">
            <div style={{}} className="mr-3">
                <img src={info.img} style={{height:'40px'}}/>
 <h6 style={{color:'black'}}>{info.title}</h6>
                <small className="text-secondary">{info.description}</small>
            </div>
        </div>
        </Link>
    </div>
    );
};

export default ServiceDetail;