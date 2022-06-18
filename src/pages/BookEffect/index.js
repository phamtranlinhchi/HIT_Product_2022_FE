import React from 'react'
import './bookEffect.scss'
import CommentBooks from '../../components/Comment_bookv2/index';
const BookEffect = () => {
    return (
        <div className="BookEffect">
            <div className='bookContainer'>
                <iframe className='bookContainer_book' src="https://publuu.com/flip-book/29102/90831/page/6" ></iframe>
            </div>
            <div>
                <CommentBooks></CommentBooks>
            </div>
        </div>
    )
}

export default BookEffect