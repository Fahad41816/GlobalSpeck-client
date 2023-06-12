import React from 'react';
import Title from '../shared/title/Title';
import { useLoaderData } from 'react-router-dom';
import Instructorcart from '../../components/intructorcart/instructorcart';

const Instructors = () => {

    const instructor = useLoaderData()

    // const {email, image, instructorName} = data
 
    return (
        <div className='mt-32'>
            <Title title={"our All instructor"}></Title>

        <div className='grid w-full items-center justify-center ml-20 gap-5 grid-flow-row grid-cols-1 xl:grid-cols-3 mt-20 '>
        {
            instructor.map( data => (

                <Instructorcart key={data._id} instuctor={data}></Instructorcart>
            
            ))
        }
        </div>
            

        </div>
    );
};

export default Instructors;