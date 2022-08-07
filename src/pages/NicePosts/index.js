import React from 'react';
import { Pagination } from '@mui/material';
import './niceposts.scss';

import PortfolioCard from '~/components/Home/PortfolioCard';
import post1 from '~/assets/images/home/post1.jpeg';
import post2 from '~/assets/images/home/post2.jpeg';
import post3 from '~/assets/images/home/post3.jpeg';
import post4 from '~/assets/images/home/post4.webp';
import post5 from '~/assets/images/home/post5.jpeg';
import post6 from '~/assets/images/home/post6.jpg';

const NicePosts = () => {
    const books = [
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
        {
            id: 7,
            img: post3,
            title: 'Reason to read more books',
            views: 654,
            type: 'post',
        },
        {
            id: 8,
            img: post4,
            title: 'Reading is good for moms',
            views: 876,
            type: 'post',
        },
        {
            id: 9,
            img: post5,
            title: 'Benefit of 20 minutes reading',
            views: 2342,
            type: 'post',
        },
    ];
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <div className="niceposts">
            <select>
                <option>Danh sách bài viết</option>
            </select>
            <div className="niceposts_list">
                {books &&
                    books.map((book) => (
                        <div key={book.id}>
                            <PortfolioCard type="post" img={book.img} title={book.title} views={book.views} />
                        </div>
                    ))}
            </div>

            <Pagination sx={{ fontSize: '20px' }} count={10} page={page} onChange={handleChange} />
        </div>
    );
};

export default NicePosts;
