import React from 'react';

const Footer = () => {
    return (
        <div className="row mt-5" style={{height:'600px',backgroundColor: '#FBD062'}}>
             <div className="col-md-4 offset-md-1">
            <h1 style={{color: '#3A4256'}}>Let us handle your  <br/>Project,Professionally<br/> Next Level</h1>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
            
        </div>
        <div className="col-md-6 mx-auto mt-3">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group ">
                           <button type="button" className="btn btn-dark ml-1 pl-3 pr-2"> Submit </button>
                       </div>
                   </form>
        </div>
        </div>
    );
};

export default Footer;