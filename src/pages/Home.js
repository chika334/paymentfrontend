import React, { Component, Suspense } from 'react'
import nice from '../images/nice.jpeg'
import Services from '../component/services/Services'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { GiWallet } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import ListProduct from '../component/ListProduct'

export class Home extends Component {
  render() {
    const title = (
        <>
            billmaster<GiWallet />
        </>
    )
    return (
      <div>
        <Hero>
            <Banner
              title={title}
              subtitle="Payment made easy"
            >
               <Link to="/about" className="btn btn-primary">
                Learn more
              </Link>
            </Banner>
        </Hero>
      <ListProduct />
      <Services />
      </div>
    )
  }
}

export default Home
