import React from 'react';
import Header from '../../Shared/Header/Header';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <WhyUs></WhyUs>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;