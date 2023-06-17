import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import useAxiosSecure from '../../Hook/UseAxiosSecure';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../context/Authprovider';
// import './common.module.css'

const Checkoutform = ({cart}) => {

    const {user} = useContext(Authcontext)

    const [error, seterror] = useState();
    const [clientSecret, setClientSecret] = useState("");
    const [proccessing, setproccessing] = useState(false);
    const [tranjection, settranjection] = useState();

    const stripe = useStripe()
    const elements = useElements()


    const {price, language, image, accessId} = cart
     
        
    const [axiosSecure] = useAxiosSecure()
    
     
     
        useEffect(() => {      

          axiosSecure.post('/create-payment-intent',{price}).then(res =>{
            
            setClientSecret(res.data.clientSecret)
          })
       
        }, []);
    

    const handleSubmit = async(event) => {

        event.preventDefault()

        if(!stripe || !elements){

            return
                        
        }

        const card = elements.getElement(CardElement)
        
        if(card === null ){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card
        })

        if(error){
            console.log(error)
            seterror(error.message)
        }else{
            seterror(null)
            console.log(paymentMethod)
        }

        setproccessing(true)

        const {paymentIntent, error: comfirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || "unknown",
                name : user?.displayName || "anymouse"
              },
            },
          },
        );

        if(comfirmError){
          console.log(comfirmError)
          return
        }

        setproccessing(false)
        if(paymentIntent.status = "succeeeded"){

          console.log(paymentIntent.id)
          settranjection(paymentIntent.id)

          const paymentDetails = {
            user : user.displayName,
            email : user.email,
            tranjecttionId : paymentIntent.id,
            price : price,
            cartName : language,
            cartImage : image,
          }
          console.log(paymentDetails)

          axiosSecure.post('/payment', paymentDetails).then(res => console.log(res))

          axiosSecure.patch(`/updateEnroll/${accessId}`).then(res => console.log(res))

        }
    }

    return (

        <>
        <form className='w-96' onSubmit={handleSubmit}>
        
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' disabled={!stripe || !clientSecret || proccessing} type="submit"  >
          Pay
        </button>
      </form>
      <p>{error}</p>
      {tranjection ? <><p className='bg-green-300 px-10 p-1 rounded'>payment success <br /> tranjecttionId: {tranjection}</p></> : <></>}
      </>
    );
};

export default Checkoutform;