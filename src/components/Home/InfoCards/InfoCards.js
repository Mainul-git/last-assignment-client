import React from 'react';
import firstImg from"../../../images/logos/slack.png";
import secondImg from"../../../images/logos/google.png";
import thirdImg from"../../../images/logos/uber.png";
import fourthImg from"../../../images/logos/netflix.png";
import fifthImg from"../../../images/logos/airbnb.png";
import InfoDetail from '../InfoDetail/InfoDetail';
const infoCards=[{img:firstImg},{img:secondImg},{img:thirdImg},{img:fourthImg},{img:fifthImg}]

const InfoCards = () => {
    return (
        <div className="row m-auto mb-5">
 {           infoCards.map(info=><InfoDetail info={info}></InfoDetail>)}
            
        </div>
    );
};

export default InfoCards;