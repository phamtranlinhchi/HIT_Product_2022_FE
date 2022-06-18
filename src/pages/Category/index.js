import React from 'react';
import { Pagination } from '@mui/material';
import './category.scss';

import PortfolioCard from '~/components/Home/PortfolioCard';

const Category = () => {
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
        {
            id: 7,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
        },
        {
            id: 8,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
        },
        {
            id: 9,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
        },
    ];
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <div className="category">
            <div className="category_navbar">
                <div className="category_navbar-item category_navbar-item-active ">Sách phát triển bản thân</div>
                <div className="category_navbar-item">Tiểu thuyết</div>
                <div className="category_navbar-item">Trinh thám</div>
                <div className="category_navbar-item">Truyện ngược</div>
            </div>
            <div className="category_list">
                {books &&
                    books.map((book) => (
                        <div key={book.id}>
                            <PortfolioCard img={book.img} title={book.title} views={book.views} />
                        </div>
                    ))}
            </div>
            <Pagination count={6} page={page} onChange={handleChange} />
        </div>
    );
};

export default Category;
