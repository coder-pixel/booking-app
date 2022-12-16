import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import "./home.scss"


const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Header />
        
        <div className="homeContainer">
          <Featured />
          <h2 className="homeTitle">Browse by property type</h2>
          <PropertyList />

          <h2 className="homeTitle">Home guests love</h2>
          <FeaturedProperties />

          <MailList />

          <Footer />
        </div>
    </div>
  )
}

export default Home