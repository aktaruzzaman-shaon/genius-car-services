import React from 'react';

const Expert = ({ expert }) => {
    const { name, imag } = expert;

    return (
        <div className='g-5 col-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={imag} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="youtube.com" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};
export default Expert;