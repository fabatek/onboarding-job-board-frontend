import React from 'react';

const Footer: React.FC = () => {
  interface list {
    name: string;
  }
  const listItemLeft: list[] = [
    { name: 'Home' },
    { name: 'About Us' },
    { name: 'Contact Us' },
    { name: 'All Jobs' },
    { name: 'FAQ' },
  ];
  const listItemRight: list[] = [
    { name: 'Privacy Policy' },
    { name: 'Operating Regulation' },
    { name: 'Operating Regulation' },
    { name: 'Complaint Handling' },
    { name: 'Term & Conditions' },
  ];

  const renderList = (list: list[]) => {
    return list.map((i) => {
      return <li className='nav-item text-secondary fw-normal'>{i.name}</li>;
    });
  };

  return (
    <footer className='bg-dark'>
      <div className='row px-5 d-flex justify-content-center py-5'>
        <div className='col-5'>
          <div className='row'>
            <div className='col-6'>
              <ul className='navbar-nav fs-15'>
                <li className='nav-item text-light disable fw-bold mb-1'>
                  About Us
                </li>
                {renderList(listItemLeft)}
              </ul>
            </div>
            <div className='col-6'>
              <ul className='navbar-nav fs-15'>
                <li className='nav-item text-light disable fw-bold mb-1'>
                  Terms & Conditions
                </li>
                {renderList(listItemRight)}
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
        <div className='col-5s'>
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
