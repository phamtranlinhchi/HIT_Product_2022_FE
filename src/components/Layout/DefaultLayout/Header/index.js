import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './Header.module.scss';
import './Header.scss';
import logo from '~/assets/images/header-logo.png';

function Header() {
    return (
        <header>
            <div className="header1">
                <div className="header1-text">HIT - BOOKS</div>
                <div className="header1-icons">
                    <Link to="/">
                        <i class="fa-brands fa-facebook"></i>
                    </Link>
                    <Link to="/">
                        <i class="fa-brands fa-tiktok"></i>
                    </Link>
                    <Link to="/">
                        <i class="fa-brands fa-youtube"></i>
                    </Link>
                </div>
            </div>
            <div className="header2">
                <div className="header2-logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="header2-navbar">
                    <ul>
                        <Link to="/">
                            <li className="active">
                                <span>Trang chủ</span>
                            </li>
                        </Link>
                        <Link to="/danh-muc">
                            <li>
                                <span>Danh mục</span>
                            </li>
                        </Link>
                        <Link to="/sach-hay">
                            <li>
                                <span>Sách hay</span>
                            </li>
                        </Link>
                        <Link to="/bai-viet-hay">
                            <li>
                                <span>Bài viết hay</span>
                            </li>
                        </Link>
                        <Link to="/video-hay">
                            <li>
                                <span>Video hay</span>
                            </li>
                        </Link>
                        <Link to="/gioi-thieu">
                            <li>
                                <span>Giới thiệu</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="header2-search">
                    <Link to="/">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </Link>
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
