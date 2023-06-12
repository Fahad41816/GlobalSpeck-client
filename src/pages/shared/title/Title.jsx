import React from 'react';
// FaQuoteLeft FaQuoteRight

import { FaBeer , FaQuoteLeft , FaQuoteRight } from 'react-icons/fa';

const Title = ({title}) => {
    return (
        <div className="flex items-center justify-center mt-8">
            <FaQuoteLeft className='text-blue-700 mb-6 mr-1
              '></FaQuoteLeft>
                <h2 className="text-2xl xl:text-3xl font-bold text-blue-700">{title}</h2>
            <FaQuoteRight className='mt-6 ml-1 text-blue-700'></FaQuoteRight> 
        </div>
    );
};

export default Title;