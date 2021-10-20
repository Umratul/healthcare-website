import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Service from '../Service/Service';

import './Home.css'

const Home = () => {
    const {user} = useAuth();

    const [services, setServices] = useState([]);
        useEffect(() => {
            fetch('https://raw.githubusercontent.com/Umratul/health-care-data/main/data/data.JSON')
                .then(res => res.json())
                .then(data => setServices(data));
        }, [])
    const sliceService = services.slice(0, 6);
    return (
        <div>
            <div className="title-section p-3">
               
                <div className="p-5 bg-img">
                    <h1>User:{user.displayName }</h1>
                    <h3 className="text-dark">Become a <span className="text-danger">Master Chef</span></h3>
                    <p>Helping you to be a chef at your own house...</p>
                </div>

            </div>

            <div>
                <h1 className="text-dark fst-italic bg-danger p-3">Our Cooking Courses</h1>
                
            <div className="service-container">
                {
                    sliceService.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                    }
                </div>
                
            </div>

        </div>
    );
};

export default Home;