import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// slide image 
import Slide1 from '../../assets/image/Home/slide1.jpg' 
import Slide2 from '../../assets/image/Home/slide2.jpg' 
import Slide3 from '../../assets/image/Home/slide3.jpg' 
import Slide4 from '../../assets/image/Home/slide4.jpg' 
import Slide5 from '../../assets/image/Home/slide5.jpg' 
import Slide6 from '../../assets/image/Home/slide6.jpg' 

const Homeslide = () => {

    const  settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className=" overflow-hidden">
        <Slider {...settings}>
            <div className="  relative">   
                <div className="w-full h-full absolute top-0 bg-black p-10 bg-opacity-60 flex   justify-start  ">
                    <h1 className=" text-white mt-32  font-mono font-bold text-7xl">Connecting Cultures <br /> <span className="text-blue-700">Through Language</span></h1>
                </div>             
                 <img  style={{height:"600px"}} className="bg-cover bg-center  w-full" src={Slide1} alt="" />
            </div>
            <div>
            <div className="w-full h-full absolute top-0 bg-black p-10 bg-opacity-60 flex   justify-start  ">
                    <h1 className=" text-white mt-32  font-mono font-bold text-7xl">Embrace the  <br /> <span className="text-blue-700">Language Adventure</span></h1>
                </div>  
                <img style={{height:"600px"}} className="bg-cover bg-center  w-full" src={Slide2} alt="" />
            </div>
            <div>
            <div className="w-full h-full absolute top-0 bg-black p-10 bg-opacity-60 flex   justify-start  ">
                    <h1 className=" text-white mt-32  font-mono font-bold text-7xl">Unlocking the World  <br /> <span className="text-blue-700">of Languages</span></h1>
                </div>  
                <img style={{height:"600px"}} className="bg-cover bg-center  w-full" src={Slide3} alt="" />
            </div>
            <div>
            <div className="w-full h-full absolute top-0 bg-black p-10 bg-opacity-0 flex   justify-start  ">
                    <h1 className=" text-white mt-32  font-mono font-bold text-7xl">A Language Journey  <br /> <span className="text-blue-700">Like No Other</span></h1>
                </div>  
                <img style={{height:"600px"}} className="bg-cover bg-center  w-full" src={Slide4} alt="" />
            </div>
            <div>
            <div className="w-full h-full absolute top-0 bg-black p-10 bg-opacity-0 flex   justify-start  ">
                    <h1 className=" text-white mt-32  font-mono font-bold text-7xl">Empowering Minds  <br /> <span className="text-blue-700">through Language Education</span></h1>
                </div>  
                <img style={{height:"600px"}} className="bg-cover bg-center  w-full" src={Slide5} alt="" />
            </div>
            <div>
            <div className="w-full h-full absolute top-0 bg-black p-10 bg-opacity-0 flex   justify-start  ">
                    <h1 className=" text-white mt-32  font-mono font-bold text-7xl">Mastering Languages  <br /> <span className="text-blue-700">with Ease</span></h1>
                </div>  
                <img style={{height:"600px"}} className="bg-cover bg-center  w-full" src={Slide6} alt="" />
            </div>
        </Slider>`
        </div>
    );
};

export default Homeslide;