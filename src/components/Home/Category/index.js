import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './category.scss';
import PortfolioCard from '../PortfolioCard';
import dac_nhan_tam from '~/assets/images/home/dac_nhan_tam.jpeg';
import book2 from '~/assets/images/home/book2.jpg';
import book3 from '~/assets/images/home/book3.jpeg';
import book4 from '~/assets/images/home/book4.jpeg';
import book5 from '~/assets/images/home/book5.jpeg';
import book6 from '~/assets/images/home/book6.jpeg';

function Category() {
    const books = [
        {
            id: 1,
            img: dac_nhan_tam,
            title: 'Đắc Nhân Tâm',
            views: 64745,
        },
        {
            id: 2,
            img: book2,
            title: 'Sự im lặng của bầy cừu',
            views: 18746,
        },
        {
            id: 3,
            img: book3,
            title: 'Không gia đình',
            views: 2304,
        },
        {
            id: 4,
            img: book4,
            title: 'Tiếng gọi nơi hoang dã',
            views: 6537,
        },
        {
            id: 5,
            img: book5,
            title: 'Túp lều bác Tom',
            views: 8376,
        },
        {
            id: 6,
            img: book6,
            title: 'Klara and the Sun',
            views: 1222,
        },
    ];
    return (
        <div className="category">
            <div className="home-title">Sách Ebook phát triển bản thân</div>
            <div className="category_booklist">
                {books &&
                    books.map((book) => (
                        <div key={book.id}>
                            <Link to="/review-book">
                                <PortfolioCard img={book.img} title={book.title} views={book.views} />
                            </Link>
                        </div>
                    ))}
            </div>
            <div className="category_info home-box">Xem thêm</div>
        </div>
    );
}

export default Category;
