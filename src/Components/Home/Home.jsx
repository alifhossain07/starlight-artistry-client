import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedItems from '../FeaturedItems/FeaturedItems';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Testimonial from '../Testimonial/Testimonial';
import Faq from '../FAQ/Faq';





const Home = () => {

    const items = useLoaderData();

   

    return (
        <div className=''>
       <Banner></Banner>
       <FeaturedItems items={items}></FeaturedItems>
       <Categories></Categories>
       <Testimonial></Testimonial>
       <Faq></Faq>
    
        

        </div>
    );
};

export default Home;


       