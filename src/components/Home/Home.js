import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Service from '../Service/Service';
import Banner from './Banner/Banner';

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
            <Banner></Banner>

            <div>
                <h1 className="text-dark fst-italic p-3">Our Treatments</h1>
                
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