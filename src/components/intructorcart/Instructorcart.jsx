import React from 'react';

const Instructorcart = ({instuctor}) => {

    

    const {email, photoUrl, name} = instuctor

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
        <figure><img className='w-80 h-52 object-cover object-center  bg-cover bg-center' src={photoUrl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}     
          </h2>
          <p>{email}</p>
        </div>
      </div>
    );
};

export default Instructorcart;