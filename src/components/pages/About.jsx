import React from 'react'
import DetailPageHeader from '../DetailPageHeader'
import DetailPageSearchInput from '../DetailPageSearchInput'
import '../../assets/styles/about.css';
import AboutUsImageAndContent from '../AboutUsImageAndContent';
import HowItWork from '../HowItWork';
import Footer from '../layouts/Footer';

const About = () => {
  return (
    <div>
      <DetailPageHeader />
      <DetailPageSearchInput />
      <div className="container-of-about">
      <AboutUsImageAndContent />
      <HowItWork />
      </div>
      <Footer />
      </div>
  )
}

export default About