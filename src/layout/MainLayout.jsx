import React from 'react'
import Header from '../pages/header/Header'
import Footer from '../pages/footer/Footer'
import {Outlet} from 'react-router-dom'
const MainLayout = () => {
  return (
    <div>
      <Header></Header>
        <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
