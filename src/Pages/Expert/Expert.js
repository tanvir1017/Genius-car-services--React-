import React from 'react';
import '../Home/Service/Service.css';

const Expert = ({mechanic}) => {
    return (
        <div >
            <div className="service-card col mb-3">
                <img src={mechanic?.img} alt="" />
                    <h2>{ mechanic?.name}</h2>
                    <h5 className="text-secondary">{ mechanic?.expertize}</h5>
                    </div>
            </div>


    );
};

export default Expert;