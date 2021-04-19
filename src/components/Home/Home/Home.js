import React from 'react';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Header from '../Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Outlets from '../Outlets/Outlets';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services>
           <Testimonials></Testimonials>
           <Outlets></Outlets>
           <Footer></Footer>
        </div>
    );
};

export default Home;