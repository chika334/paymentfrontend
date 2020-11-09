import React, { Component } from 'react'
import { GiWallet } from 'react-icons/gi'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer text-light font-small blue bg-dark p-5">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-4 mt-md-0 mt-3">
                <h4 className="text-uppercase">mipplepay<GiWallet /></h4>
                <p>Payment made easy</p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3" />

             
              <div className="col-md-4 mb-md-0 mb-3">

                
                <h6 className="text-uppercase">Earn with mipplepay.com</h6>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Become an Agent</a>
                  </li>
                  <li>
                    <a href="#!">Start earning</a>
                  </li>
                  <li>
                    <a href="#!">Integrate our API</a>
                  </li>
                  <li>
                    <a href="#!">Agent Academy</a>
                  </li>
                  <li>
                    <a href="#!">Partner with Us</a>
                  </li>
                  <li>
                    <a href="#!">Terms and Conditions</a>
                  </li>
                </ul>

              </div>
              
              <div className="col-md-3 mb-md-0 mb-3">

                
                <h6 className="text-uppercase">About</h6>

                <ul className="list-unstyled">
                  <li>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>

              </div>
              
            </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> mipplepay.com</a>
          </div>
        </footer>
       
      </div>
    )
  }
}

export default Footer
