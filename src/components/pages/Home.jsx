import React from 'react';
import HowItWork from '../HowItWork';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import { MainSection } from '../layouts/MainSection';
import '../../assets/styles/home.css';


const Home = () => {
  return (
    <div>
        <Header />
        <MainSection />
        <HowItWork />
        <Footer />
    </div>
  )
}

export default Home