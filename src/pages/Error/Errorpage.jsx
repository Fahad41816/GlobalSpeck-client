import { Link } from "react-router-dom";



const Errorpage = () => {
    return (
            <div>
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <h2 className="text-4xl text-red-600 mb-4">Oops! Something went wrong.</h2>
                        <p className="text-lg text-gray-700 mb-6">We apologize for the inconvenience.</p>
                    <Link to={'/'}>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
                        
                        >
                        Refresh Page
                        </button>
                    </Link>
                    </div>
                    <p className="mt-4 text-gray-500 text-sm">Error code: 500</p>
                </div>
            </div>
    );
};

export default Errorpage;