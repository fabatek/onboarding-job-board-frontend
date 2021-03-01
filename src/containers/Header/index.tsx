import React from 'react';
import { envURL } from '../../constants/envURL';
import './Header.scss';
function Header(props: any) {
    


  return (
    <div className="container">
      <div className="row">
        <img
          className="logo"
          src={envURL + '/faba.png'}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
