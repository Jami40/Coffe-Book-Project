import React from 'react';
import Banner from '../Components/Banner/Banner';
import Heading from '../Components/Heading/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Category from '../Components/Ctaegories/Category';

const Home = () => {
    const category=useLoaderData();
    return (
        <div className='w-11/12 mx-auto'>
            {/* Banner Section */}
            <Banner></Banner>
            <Heading title='Browse Coffees By Category' subtitle='Choose your desired coffee category to browse through specific coffees that fit in your taste.'></Heading>

            {/* ***Tab Section *** */}

            <Category categories={category}></Category>
            <Outlet></Outlet>

            
            
        </div>
    );
};

export default Home;