 
const Classcart = ({classes}) => {
    
 
    const {language,instructor,image,schedule,_id,price,enrollStudents,availableSeats} = classes
     
     
     
    
    return (
         
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700   shadow-lg">
                <a href="#">
                    <img className="w-full h-52 bg-cover bg-center rounded-t-lg" src={image} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">{language} language</h5>
                    </a>
                    <div>instructor : {instructor}</div> 
                    <div>Price : {price}</div> 
                    <div>Enroll : {enrollStudents}</div> 
                    <div>available Seats : {availableSeats}</div> 
                    <a className=" cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center mt-5 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Select
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        
    );
};

export default Classcart;