import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, capital, flag, population, region } = props.country;
    return (
        <div className="country">
            <h2 className="bg-danger text-white">Name is: {name}</h2>
           <h4>Capital is: {capital}</h4> 
            <img src={flag} alt="" />
           <p>Population: {population}</p>
           <p className="bg-warning"><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;