import React from 'react';
import { Pagination } from '@mui/material';

import './niceposts.scss';
import PortfolioCard from '../PortfolioCard';
function NicePosts() {
    const posts = [
        {
            id: 1,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
            type: 'post',
        },
        {
            id: 2,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
            type: 'post',
        },
        {
            id: 3,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
            type: 'post',
        },
        {
            id: 4,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
            type: 'post',
        },
        {
            id: 5,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
            type: 'post',
        },
        {
            id: 6,
            img: 'https://media.gatesnotes.com/-/media/Images/Books/Klara-and-the-Sun/klara_and_the_sun_20210827_thumbnail_320x320_02.ashx',
            title: 'Klara and the Sun',
            views: 18746,
            type: 'post',
        },
    ];

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <div className="niceposts">
            <div className="home-title">Các bài viết hay giúp phát triển bản thân</div>
            <div>
                <select>
                    <option>Danh sách bài viết</option>
                </select>
            </div>

            <div className="niceposts_postlist">
                {posts &&
                    posts.map((book) => (
                        <div key={book.id}>
                            <PortfolioCard type="post" img={book.img} title={book.title} views={book.views} />
                        </div>
                    ))}
            </div>

            <Pagination count={6} page={page} onChange={handleChange} />
        </div>
    );
}

export default NicePosts;
