import React from 'react'

import { Outlet } from 'react-router'
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'



const SiteRoot = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}

export default SiteRoot