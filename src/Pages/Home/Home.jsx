import React from 'react';
import Application from '../../components/Application';
import Content from '../../components/Content';
import Hero from '../../components/Hero';
import JoinTeam from '../../components/JoinTeam';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Content></Content>
            <JoinTeam></JoinTeam>
            <Application></Application>
        </div>
    );
};

export default Home;