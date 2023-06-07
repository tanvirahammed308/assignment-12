import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../../src/assets/img/carousel1.jpeg'
import img2 from '../../../../src/assets/img/carousel2.jpeg'
import img3 from '../../../../src/assets/img/carousel3.jpg'


const Banner = () => {
    return (
        <Carousel>
                <div className=' lg:w-full lg:h-[490px]'>
                    <img src={img1} />
                    
                </div>
                <div  className='lg:w-full lg:h-[490px]'>
                    <img src={img2} />
                  
                </div>
                <div className='lg:w-full lg:h-[490px]'>
                    <img src={img3} />
                    
                </div>
            </Carousel>
    );
};

export default Banner;