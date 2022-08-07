import React from 'react';
import { Pagination } from '@mui/material';

import './niceposts.scss';
import PortfolioCard from '../PortfolioCard';
import post1 from '~/assets/images/home/post1.jpeg';
import post2 from '~/assets/images/home/post2.jpeg';
import post3 from '~/assets/images/home/post3.jpeg';
import post4 from '~/assets/images/home/post4.webp';
import post5 from '~/assets/images/home/post5.jpeg';
import post6 from '~/assets/images/home/post6.jpg';

function NicePosts() {
    const posts = [
        {
            id: 1,
            img: post1,
            title: '101 reasons to read book',
            views: 3216,
            type: 'post',
        },
        {
            id: 2,
            img: post2,
            title: 'Top 7 reasons to read book',
            views: 2432,
            type: 'post',
        },
        {
            id: 3,
            img: post3,
            title: 'Reason to read more books',
            views: 1924,
            type: 'post',
        },
        {
            id: 4,
            img: post4,
            title: 'Reading is good for moms',
            views: 234,
            type: 'post',
        },
        {
            id: 5,
            img: post5,
            title: 'Benefit of 20 minutes reading',
            views: 621,
            type: 'post',
        },
        {
            id: 6,
            img: post6,
            title: 'Reading for beginners',
            views: 1273,
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
