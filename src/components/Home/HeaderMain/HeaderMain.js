import React from 'react';
import chair from"../../../images/logos/Frame.png"
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{color: '#3A4256'}}>Let's Grow Your  <br/>Brand To The<br/> Next Level</h1>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
            <button className="btn btn-dark">HIRE US</button>
        </div>
        <div className="col-md-6">
            <img src={chair} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default HeaderMain;