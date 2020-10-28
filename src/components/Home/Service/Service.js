import React, { useEffect } from 'react';
import { } from '../../../App';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const services=[{title:'Web & Mobile Design',id:1,img:'https://i.ibb.co/pr53F2j/service1.png', description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'

},{title:'Graphic Design',id:2,img:'https://i.ibb.co/dDSRsRk/service2.png', description:'Amazing flyers, social media posts and brand representations that would make your brand stand out.'

},
{title:'Web Development',id:3,img:'https://i.ibb.co/7j94SXm/service3.png', description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'

}]
const Service = ({service,setService}) => {
    useEffect(()=>{
        fetch(' https://polar-dawn-07982.herokuapp.com/getService')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    
    
 

    return (
      <section className="mt-5 mb-5 justify-content-center align-items-center">
          <h1 className="" style={{display:'inline',marginLeft:'550px',marginTop:'5px'}}>Provide</h1>
<h1 className="" style={{display:'inline',color:'#7AB259'}}> Services</h1>
            <div style={{}} className="w-75 row d-flex mt-5 offset-md-1 justify-content-center">
                {
                    service.map(info => <ServiceDetail info={info} ></ServiceDetail>)
                }
            </div>
        </section>
    
  
    );
};

export default Service;