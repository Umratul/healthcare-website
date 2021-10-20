import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Umratul/health-care-data/main/data/data.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    
    return (
        <div>
            <h2 className="bg-danger p-4 fst-italic">Our Services </h2>
            <div className="service-container">
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