import React, { useLayoutEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
// import styles from './Header.module.scss';
import './Header.scss';
import logo from '~/assets/images/header-logo.png';

function Header() {
    const pageLocation = useLocation();
    let currentPage = useRef();
    useLayoutEffect(() => {
        currentPage.current = document.querySelector('.active span').innerHTML;
    });

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
                        <NavLink to="/" activeClassName="active">
                            <li className="home">
                                <span>Trang chủ</span>
                            </li>
                        </NavLink>
                        <NavLink to="/danh-muc">
                            <li>
                                <span>Danh mục</span>
                            </li>
                        </NavLink>
                        <NavLink to="/sach-hay">
                            <li>
                                <span>Sách hay</span>
                            </li>
                        </NavLink>
                        <NavLink to="/bai-viet-hay">
                            <li>
                                <span>Bài viết hay</span>
                            </li>
                        </NavLink>
                        <NavLink to="/video-hay">
                            <li>
                                <span>Video hay</span>
                            </li>
                        </NavLink>
                        <NavLink to="/gioi-thieu">
                            <li>
                                <span>Giới thiệu</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="header2-search">
                    <Link to="/">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </Link>
                </div>
            </div>
            <div className="header3">
                <div className="header3-page">{currentPage.current}</div>
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
