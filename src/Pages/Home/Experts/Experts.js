import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Will smith', imag: expert1 },
    { id: 2, name: 'Chris rock', imag: expert2 },
    { id: 3, name: 'Dawayen', imag: expert3 },
    { id: 4, name: 'Dwine smith', imag: expert4 },
    { id: 5, name: 'Jonshon', imag: expert5 },
    { id: 6, name: 'Smith', imag: expert6 },
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h1 className='text-primary text-center mt-5'>Our experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;