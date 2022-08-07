import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
// import styles from './Header.module.scss';
import './Header.scss';
import logo from '~/assets/images/header-logo.png';
import storageService from '~/services/storage.service';
import httpService from '~/services/http-service';

function Header() {
    const pageLocation = useLocation();
    const [user, setUser] = useState(null);
    let currentPage = '';
    switch (pageLocation.pathname) {
        case '/':
            currentPage = 'Trang chủ';
            break;
        case '/danh-muc':
            currentPage = 'Danh mục';
            break;
        case '/sach-hay':
            currentPage = 'Sách hay';
            break;
        case '/bai-viet-hay':
            currentPage = 'Bài viết hay';
            break;
        case '/video-hay':
            currentPage = 'Video hay';
            break;
        case '/gioi-thieu':
            currentPage = 'Giới thiệu';
            break;
        default:
            currentPage = '';
            break;
    }

    const token = storageService.get('accessToken');
    useEffect(() => {
        if (token) {
            httpService.get('users/62e35190b069a6154cc81fa7').then((data) => setUser(data.data.user));
        }
    }, [token]);

    return (
        <header>
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 99 }}>
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
            </div>
            <div className="header3">
                <div className="header3-page">{currentPage}</div>
                <div className="header3-account">
                    {user ? (
                        <>
                            {user.username}{' '}
                            <span>
                                <i class="fa-regular fa-user"></i>
                            </span>
                        </>
                    ) : (
                        <div>
                            <Link className="header3-authlink" style={{ color: '#000' }} to="/dang-ky">
                                Đăng ký
                            </Link>{' '}
                            |{' '}
                            <Link className="header3-authlink" style={{ color: '#000' }} to="/dang-nhap">
                                Đăng nhập
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
