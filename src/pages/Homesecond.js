import React from 'react'
import Banner from '../component/Banner'
import pay from '../images/pay.png'
import { Link } from 'react-router-dom'
import '../css/style.css'
import 'aos/dist/aos.css'
import Offer from '../component/offers'
import Cards from '../component/CardUI'

const title = (
  <>
    Mipplepay<img src={pay} width="60" alt="modal" />
  </>
)

function Home() {
  return (
    <div>
        <div className="new">
             <div>
                <Banner
                  title={title}
                  subtitle="Payment made easy"
                >
                  <Link to="/about" className="btn btn-primary">
                    Learn More
                  </Link>
               </Banner>
             </div>
             <div data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine" className="git_loader">
                <h3 className="pb-3"><em>Get started with this three easy steps</em></h3>
                <div className="cards first_number_icon alook-top">
                    Login / Register
                </div>
                <div className="cards second_number_icon alook-top">
                    Fund Wallet
                </div>
                <div className="cards third_number_icon alook-top">
                    Pay Bills
                </div>
                <Link to="/login" className="btn btn-primary m-4">Get Started</Link>
             </div>
        </div>
        <div style={{ padding: "50px" }}>
            <Cards/>
        </div>
        <div style={{ padding: "50px" }}>
            <Offer/>
        </div>
    </div>
  );
}

export default Home
