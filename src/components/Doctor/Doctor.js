import React from 'react';

const Doctor = ({ doctor }) => {
    const { image, post, name } = doctor
    return (
        <div>
            <div><img src={image} className="img-thumbnail img-fluid" alt="" /></div>
            <div className="text-center pt-3">
                <p className="detail mb-0">{post}</p>
                <h5 className="name">{name}</h5>
            </div>
        </div>
    );
};

export default Doctor;