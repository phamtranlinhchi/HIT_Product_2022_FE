import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './bookAccount.scss'
import storageService from '~/services/storage.service';
import Category from './Category';
const BookAccount = () => {
    const token = storageService.get("accesstoken");
    const pathBookStore = '/tai-khoan/sach/' + `${token}`;
    const pathManageAccount = '/tai-khoan/' + `${token}`;
    // const pathFetchUser = "http://18.144.43.131:5000/api/users/tokenUser";
    // const pathFetchUser = "http://18.144.43.131:5000/api/users/tokenUser";


    return (
        <div className="container-account">
            <div className="acount-header">
                <Link className="linkAccoutn" style={{ "marginRight": "2rem", "paddingTop": "1rem" }} to={pathBookStore} >Kho sách</Link>
                <Link className="linkAccoutn" to={pathManageAccount}>Quản lý thông tin cá nhân</Link>
            </div>
            <br />
            <hr />
            <Category />
        </div>
    )
}

export default BookAccount