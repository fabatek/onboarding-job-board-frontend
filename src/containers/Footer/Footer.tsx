import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerLeftItems = [
    {
      id: 1,
      title: "About",
      className: "nav-link disable text-light fw-bold mb-1",
    },
    {
      id: 2,
      title: "Home",
      className: "nav-link text-secondary fw-normal",
    },
    {
      id: 3,
      title: "About Us",
      className: "nav-link text-secondary fw-normal",
    },
    {
      id: 4,
      title: "Contact Us",
      className: "nav-link text-secondary fw-normal",
    },
    {
      id: 5,
      title: "All Jobs",
      className: "nav-link text-secondary fw-normal",
    },
    {
      id: 6,
      title: "FAQ",
      className: "nav-link text-secondary fw-normal",
    },
  ]
  const footerRightItems = [
    {
      id: 1,
      title: "Terms & Conditions",
      className: "nav-link disable text-light fw-bold mb-1",
    },
    {
      id: 2,
      title: "Privacy Policy",
      className: "nav-link text-secondary fw-normal",
    },
    {
      id: 3,
      title: "Operating Regulation",
      className: "nav-link text-secondary fw-normal",
    },
    {
      id: 4,
      title: "Complaint Handling",
      className: "nav-link text-secondary fw-normal",
    },
    {
      id: 5,
      title: "Term & Conditions",
      className: "nav-link text-secondary fw-normal",
    },
    {
      id: 6,
      title: "Press",
      className: "nav-link text-secondary fw-normal",
    },
  ]
  const renderFooterLeft = footerLeftItems.map((footerItem) => {
    return(
      <li className="nav-item" key = {footerItem.id}>
        <Link to="/" className={footerItem.className}>{footerItem.title}</Link>
      </li>
    )
  })
  const renderFooterRight = footerRightItems.map((footerItem) => {
    return(
      <li className="nav-item" key = {footerItem.id}>
        <Link to="/" className={footerItem.className}>{footerItem.title}</Link>
      </li>
    )
  })


  return (
    <footer className="bg-dark">
      <div className="container container-fluid text-white">
        <div className="row pt-5">
          <div className="col-md-6">
            <div className="row pb-4">
              <div className="col navbar">
                <ul className="navbar-nav fs-15">
                  {renderFooterLeft}
                </ul>
              </div>
              <div className="col navbar">
                <ul className="navbar-nav fs-15">
                  {renderFooterRight}
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