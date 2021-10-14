import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Service.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div className="pt-5  container">
            <h2 className="alert alert-primary">This is services</h2>
            <div className="display-container">
                 {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;