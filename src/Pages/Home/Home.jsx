import Banner from "./Banner/Banner";

import Gallery from "./Gallery";
import PopularClass from "./PopularClasses/PopularClass";




const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <PopularClass></PopularClass>
          <Gallery></Gallery>
           
        </div>
    );
};

export default Home;