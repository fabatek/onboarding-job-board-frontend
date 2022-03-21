import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container container-fluid text-white">
        <div className="row pt-5">
          <div className="col-md-6">
            <div className="row pb-4">
              <div className="col navbar">
                <ul className="navbar-nav fs-15">
                  <li className="nav-item text-light disable fw-bold mb-1">About</li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-secondary fw-normal">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-secondary fw-normal">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-secondary fw-normal">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-secondary fw-normal">All Jobs</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-secondary fw-normal">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div className="col navbar">
                <ul className="navbar-nav fs-15">
                  <li className="nav-item text-light disable fw-bold mb-1">Terms & Conditions</li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-secondary fw-normal">Privacy Policy</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-secondary fw-normal">Operating Regulation</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-secondary fw-normal">Complaint Handling</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-secondary fw-normal">Term & Conditions</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-secondary fw-normal">Press</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto fs-15">
              <p className="text-light mb-2 fw-bold">
                Want to post a job? Contact us at:
              </p>
              <p className="text-secondary  mb-5 fw-normal">
                Ho Chi Minh: (+84) 977 460 519  -  Ha Noi: (+84) 983 131 351  -  Email: love@itviec.com

              </p>
            </div>
          </div>
          <div className="col-auto fs-6 pb-5">
           <div className="pt-1 text-secondary">
            <p className="pb-2">Copyright © IT VIEC JSC</p>
            <p>Tax code: 0312192258</p>
           </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer