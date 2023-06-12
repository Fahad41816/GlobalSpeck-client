import React from 'react';

const Instructorcart = ({instuctor}) => {

    

    const {email, image, instructorName} = instuctor

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
        <figure><img className='w-full h-52 bg-cover bg-center' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {instructorName}     
          </h2>
          <p>{email}</p>
        </div>
      </div>
    );
};

export default Instructorcart;