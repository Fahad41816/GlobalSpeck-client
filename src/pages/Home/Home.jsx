 
import { useLoaderData } from 'react-router-dom';
import Homeslide from '../../components/HomeSlide/Homeslide';
import Classcart from '../../components/classCart/Classcart';
import Title from '../shared/title/Title';
import { useEffect, useState } from 'react';
import Instructorcart from '../../components/intructorcart/instructorcart';
import About from '../../components/About/About';


const Home = () => {

    const [instructor, setinstructor] = useState([]);
   
    const classes = useLoaderData()

     useEffect(() => {
    
        fetch('http://localhost:5000/instructor').then(res => res.json()).then(data=> setinstructor(data))
       
     }, []);

    return (
        <div>
            <Homeslide></Homeslide>
        <div>
        <Title title={"our Popular Classes"}></Title>
          
          <div className='mt-20 xl:ml-5 p-5 grid grid-flow-row grid-cols-1 xl:grid-cols-3 gap-5 items-center justify-center'>
            {
                classes.map(data => (
                    <Classcart key={data._id} classes={data}></Classcart>
                ))
            }    
          </div>

          <div className='pt-10'>
             <Title  title={"our Popular Instructors"}></Title>
            <div className='mt-20 grid  grid-flow-row grid-cols-1 xl:grid-cols-3 gap-6 xl:ml-5'>

            {
                instructor.map(data => (

                    <Instructorcart key={data._id} instuctor={data}></Instructorcart>

                ))
            }

            </div>
          </div>

          <div>
            <About></About>
          </div>
          
        </div>
        </div>
    );
};

export default Home;