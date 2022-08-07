import React from 'react';
import './bookEffect.scss';
import CommentBooks from '~/components/Comment_bookv2';

const BookEffect = () => {
    return (
        <div className="BookEffect">
            <div className="bookContainer">
                <iframe
                    className="bookContainer_book"
                    title="sach"
                    src="
                    https://publuu.com/flip-book/35644/110040"
                ></iframe>
            </div>
            <div>
                <CommentBooks></CommentBooks>
            </div>
        </div>
    );
};

export default BookEffect;
