import Banner from "./Banner/Banner";

import Gallery from "./Gallery";
import PopularClass from "./PopularClasses/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";




const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
          <Gallery></Gallery>
           
        </div>
    );
};

export default Home;