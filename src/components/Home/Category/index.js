import React from 'react';

import './category.scss';
import PortfolioCard from '../PortfolioCard';

function Category() {
    const books = [
        {
            id: 1,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
        },
        {
            id: 2,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
        },
        {
            id: 3,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
        },
        {
            id: 4,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
        },
        {
            id: 5,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
        },
        {
            id: 6,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
        },
    ];
    return (
        <div className="category">
            <div className="home-title">Sách Ebook phát triển bản thân</div>
            <div className="category_booklist">
                {books &&
                    books.map((book) => (
                        <div key={book.id}>
                            <PortfolioCard img={book.img} title={book.title} views={book.views} />
                        </div>
                    ))}
            </div>
            <div className="category_info home-box">Xem thêm</div>
        </div>
    );
}

export default Category;
