import React from "react";
import './Header.scss'

const Header = () => {
    return (
        <header className="header-app">
            <div className="header">
                <ul className="header__menu-list">
                    <li className="header__menu-item">
                        <img
                            className="header__logo"
                            src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
                            alt="logo" />
                    </li>
                    <li className="header__menu-item">Việc Làm IT</li>
                    <li className="header__menu-item">Công ty IT Hàng Đầu</li>
                    <li className="header__menu-item">Blog</li>
                </ul>
                <div className="header__profile">
                    <div className="header__profile-name">
                        <span >Khoa Nguyễn</span>
                        <i className="header__profile-icon fas fa-sort-down"></i>
                    </div>
                    <img
                        className="header__profile-img"
                        alt="profile-img"
                        src="https://yt3.ggpht.com/ytc/AKedOLQludj9PCCJLTMYZGOnYY1s7BP8Z654yYZfV5Hm_w=s900-c-k-c0x00ffffff-no-rj"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
