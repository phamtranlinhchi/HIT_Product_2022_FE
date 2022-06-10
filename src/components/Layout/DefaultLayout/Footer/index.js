import React from 'react';
import { TextField, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import './Footer.scss';
import logo from '~/assets/images/footer-logo.png';

function Footer() {
    return (
        <footer>
            <div className="footer1">
                <div className="footer1-list">
                    <ul>
                        <a href="/">
                            <li>Trang chủ</li>
                        </a>
                        <a href="/">
                            <li>Danh mục</li>
                        </a>
                        <a href="/">
                            <li>Sách hay</li>
                        </a>
                        <a href="/">
                            <li>Bài viết hay</li>
                        </a>
                        <a href="/">
                            <li>Video hay</li>
                        </a>
                        <a href="/">
                            <li>Giới thiệu</li>
                        </a>
                    </ul>
                </div>
                <div className="footer1-search">
                    <div className="text">Tìm kiếm tên sách hay</div>
                    <TextField
                        className="search"
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        defaultValue="Tìm kiếm"
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchOutlined />
                                </IconButton>
                            ),
                        }}
                    />
                </div>
                <div className="footer1-logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="text">Sách là cửa sổ tri thức</div>
                </div>
            </div>
            <div className="footer2">Bản quyền bởi nhóm product CLB_HIT © 2022</div>
        </footer>
    );
}

export default Footer;
