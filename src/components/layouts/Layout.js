import React from 'react'
import HowItWork from '../HowItWork'
import Footer from './Footer'
import Header from './Header'

import { MainSection } from './MainSection'

export const Layout = () => {
  return (
    <div>
        <Header />
        <MainSection />
        <HowItWork />
        <Footer />
    </div>
  )
}
