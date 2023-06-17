 
import { Elements } from '@stripe/react-stripe-js';
import Title from '../shared/title/Title';
import Checkoutform from './Checkoutform';
import { loadStripe } from '@stripe/stripe-js';
 
import { useLoaderData, useParams } from 'react-router-dom';
 

const Payment = () => {

    
    const cart = useLoaderData()
 
    const stripePromise = loadStripe('pk_test_51NJZyDEWZrevdXvyL05y7mCSXWpHPt9NeWkzPIzXaCa95EoLq9npzOrJJup1OAJlG530TjFWQvccU6l4etn0BknB00Igt4nJwY');

    return (
        <div>
            <Title title={"payment"}></Title>
           <div className='w-96 mt-20 '>
                <Elements stripe={stripePromise}>
                    <Checkoutform cart={cart} ></Checkoutform>
                </Elements>
           </div>
        </div>
    );
};

export default Payment;