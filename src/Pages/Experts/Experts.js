import React from 'react';
import mechanic1 from "../../images/mechanic/mechanic-1.jpg";
import mechanic2 from "../../images/mechanic/mechanic-2.jpg";
import mechanic3 from "../../images/mechanic/mechanic-3.jpg";
import mechanic4 from "../../images/mechanic/mechanic-4.jpg";
import Expert from '../Expert/Expert';

const mechanics = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
]

const Experts = () => {
    
    return (
        <div className="container py-5">
            <h2 className="alert alert-success">Our Expertisit</h2>
            <div className="row row-cols-lg-4 row-cols-md-2 row-sm-cols-1">
                {
                    mechanics.map(mechanic => <Expert key={mechanic.name} mechanic={mechanic}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;