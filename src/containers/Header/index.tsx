import React from 'react';
import './Header.scss';
function Header(props: any) {
    


  return (
    <div className="container">
      <div className="row">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + '/faba.png'}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
