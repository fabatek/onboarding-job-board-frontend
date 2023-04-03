import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const FooterTemplate = (props: Props) => {
  return (
    <div className="footer">
      <div className="footer__up">
        <div className="footer-up__about">
          <h4 className="footer-about__title">About ITviec</h4>
          <ul className="footer-about__list">
            <li>
              <NavLink to="" className="footer-about__item">
                Home page
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="footer-about__item">
                About ITviec.com
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="footer-about__item">
                Candidate Suggestion Services
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="footer-about__item">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="footer-about__item">
                IT Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="footer-about__item">
                Prequently Asked Questions
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-up__general">
          <h4 className="footer-general__title">General</h4>
          <ul className="footer-general__list">
            <li>
              <NavLink to="" className="footer-general__item">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="footer-general__item">
                Operation regulations
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="footer-general__item">
                Complaint resolution
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="footer-general__item">
                Use Agreement
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="footer-general__item">
                Press Release
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-up__media">
          <h4 className="footer-media__link">Copyright © LITTLE WORK JSC</h4>
          <h4 className="footer-media__link">MST: 0312192258</h4>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer-bottom__contact">
          <h4 className="footer-contact__title">
            Contact us to post job vacancies at:
          </h4>
          <p className="footer-contact__link">
            Ho Chi Minh City: (+84) 977 460 519 - Hanoi: (+84) 983 131 351 -
            Email: love@itviec.com
          </p>
        </div>
      </div>
    </div>
  );
};
export default FooterTemplate;
