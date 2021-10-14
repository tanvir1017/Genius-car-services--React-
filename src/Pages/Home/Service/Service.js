import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const {name, description, img, price} = service
    return (
        <div className="service-card">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>{price}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Service;