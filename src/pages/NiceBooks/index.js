import React from 'react';
import { Pagination } from '@mui/material';
import './nicebooks.scss';

import PortfolioCard from '~/components/Home/PortfolioCard';

import dac_nhan_tam from '~/assets/images/home/dac_nhan_tam.jpeg';
import book2 from '~/assets/images/home/book2.jpg';
import book3 from '~/assets/images/home/book3.jpeg';
import book4 from '~/assets/images/home/book4.jpeg';
import book5 from '~/assets/images/home/book5.jpeg';
import book6 from '~/assets/images/home/book6.jpeg';

const NiceBooks = () => {
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
        {
            id: 7,
            img: book3,
            title: 'Không gia đình',
            views: 2394,
        },
        {
            id: 8,
            img: book2,
            title: 'Sự im lặng của bầy cừu',
            views: 2304,
        },
        {
            id: 9,
            img: book4,
            title: 'Tiếng gọi nơi hoang dã',
            views: 2304,
        },
    ];
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <div className="nicebooks">
            <div className="nicebooks_list">
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

export default NiceBooks;
