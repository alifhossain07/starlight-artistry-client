import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedItems from '../FeaturedItems/FeaturedItems';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';



const Home = () => {

    const items = useLoaderData();

   

    return (
        <div className=''>
       <Banner></Banner>
       <FeaturedItems items={items}></FeaturedItems>
       <Categories></Categories>
        

        </div>
    );
};

export default Home;


       