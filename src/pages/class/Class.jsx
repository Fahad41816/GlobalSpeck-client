import React from 'react';
import Title from '../shared/title/Title';
import Classcart from '../../components/classCart/Classcart';
import { useLoaderData } from 'react-router-dom';

const Class = () => {

    const classes =  useLoaderData()

    return (
        <div className='mt-32'> 
            <Title title={"our class"}></Title>
            <div className='grid grid-flow-row  ml-10 grid-cols-1 xl:grid-cols-3 gap-5 mt-20'>

            {
                classes.map(data => (

                   <Classcart key={data._id} classes={data}></Classcart>

                ))
            }
            </div>
        </div>
    );
};

export default Class;