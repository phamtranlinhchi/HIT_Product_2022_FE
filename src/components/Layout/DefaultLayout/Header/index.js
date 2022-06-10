import React from 'react';
// import styles from './Header.module.scss';
import './Header.scss';
import logo from '~/assets/images/header-logo.png';

function Header() {
    return (
        <header>
            <div className="header1">
                <div className="header1-text">HIT - BOOKS</div>
                <div className="header1-icons">
                    <a href="/">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/">
                        <i class="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="/">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
            <div className="header2">
                <div className="header2-logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="header2-navbar">
                    <ul>
                        <a href="/">
                            <li className="active">
                                <span>Trang chủ</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                                <span>Danh mục</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                                <span>Sách hay</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                                <span>Bài viết hay</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                                <span>Video hay</span>
                            </li>
                        </a>
                        <a href="/">
                            <li>
                                <span>Giới thiệu</span>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="header2-search">
                    <a href="/">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                </div>
            </div>
            <div className="header3">
                <div className="header3-page">Trang chủ</div>
                <div className="header3-account">
                    AccountTest
                    <span>
                        <i class="fa-regular fa-user"></i>
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;
