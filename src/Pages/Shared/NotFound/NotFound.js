import React from 'react';
import notFound from "../../../images/icon/notFound.jpg"
const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is slepping</h2>
            <img className='w-50' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
