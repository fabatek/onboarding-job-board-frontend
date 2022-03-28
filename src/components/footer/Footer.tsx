import React, { ReactElement } from 'react';
import './footer.scss';

const Footer: React.FC = () => {
  interface List {
    id: number;
    name: string;
  }
  const listItemLeft: List[] = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About Us' },
    { id: 3, name: 'Contact Us' },
    { id: 4, name: 'All Jobs' },
    { id: 5, name: 'FAQ' },
  ];
  const listItemRight: List[] = [
    { id: 1, name: 'Privacy Policy' },
    { id: 2, name: 'Operating Regulation' },
    { id: 3, name: 'Operating Regulation' },
    { id: 4, name: 'Complaint Handling' },
    { id: 5, name: 'Term & Conditions' },
  ];

  const RenderList = ({ list }: { list: List[] }): ReactElement => {
    return (
      <>
        {list.map((i) => {
          return (
            <li key={i.id} className='nav-item text-secondary fw-normal'>
              {i.name}
            </li>
          );
        })}
      </>
    );
  };

  return (
    <footer className='bg-dark'>
      <div className='footer__container row px-5 d-flex justify-content-center py-5'>
        <div className='col-5'>
          <div className='row'>
            <div className='col-6'>
              <ul className='navbar-nav fs-15'>
                <li className='nav-item text-light disable fw-bold mb-1'>
                  About Us
                </li>
                <RenderList list={listItemLeft} />
              </ul>
            </div>
            <div className='col-6'>
              <ul className='navbar-nav fs-15'>
                <li className='nav-item text-light disable fw-bold mb-1'>
                  Terms & Conditions
                </li>
                <RenderList list={listItemRight} />
              </ul>
            </div>
          </div>
          <div className='py-2'>
            <p className='text-light disable fw-bold mb-1'>
              Want to post a job? Contact us at:
            </p>
            <p className='text-secondary fw-normal'>
              Ho Chi Minh: (+84) 977 460 519 - Ha Noi: (+84) 983 131 351 -
              Email: love@itviec.com
            </p>
          </div>
        </div>
        <div className='col-5'>
          <div className=''>
            <ul className='navbar-nav fs-15'>
              <li className='nav-item text-secondary fw-normal'>
                Copyright © IT VIEC JSC
              </li>
              <li className='nav-item text-secondary fw-normal'>
                Tax code: 0312192258
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
