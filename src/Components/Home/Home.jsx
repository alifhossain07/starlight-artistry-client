import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedItems from '../FeaturedItems/FeaturedItems';
import { useLoaderData } from 'react-router-dom';



const Home = () => {

    const items = useLoaderData();

   

    return (
        <div className=''>
       <Banner></Banner>
       <FeaturedItems items={items}></FeaturedItems>
       
        

        </div>
    );
};

export default Home;