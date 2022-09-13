import React from 'react'
import Header from './Header'
import HowItWork from './HowItWork'
import { MainSection } from './MainSection'

export const Layout = () => {
  return (
    <div>
        <Header />
        <MainSection />
        <HowItWork />
    </div>
  )
}
