import React from 'react';
import Courses from '../../components/Courses';
import Hero from '../../components/Hero';
import PremiumCourses from '../../components/PremiumCourses';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Courses></Courses>
            <PremiumCourses></PremiumCourses>
        </div>
    );
};

export default Home;