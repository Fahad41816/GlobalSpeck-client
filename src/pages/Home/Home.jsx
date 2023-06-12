 
import { useLoaderData } from 'react-router-dom';
import Homeslide from '../../components/HomeSlide/Homeslide';
import Classcart from '../../components/classCart/Classcart';
import Title from '../shared/title/Title';


const Home = () => {

    const classes = useLoaderData()

     

    return (
        <div>
            <Homeslide></Homeslide>
        <div>
        <Title title={"our Popular Classes"}></Title>
          
          <div className='mt-20 ml-5 grid grid-flow-row grid-cols-1 xl:grid-cols-3 gap-5 items-center justify-center'>
            {
                classes.map(data => (
                    <Classcart key={data._id} classes={data}></Classcart>
                ))
            }    
          </div>
          
        </div>
        </div>
    );
};

export default Home;