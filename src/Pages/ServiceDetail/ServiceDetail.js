import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to servive Detail: {serviceId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Porceed to chekout</button>
                </Link>
            </div>

        </div>
    );
};

export default ServiceDetail;