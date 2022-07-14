import React from 'react'
import './bookEffect.scss'
import Comment from '../CommentSocket/index';
const BookEffect = () => {
    return (
        <div className="BookEffect">
            <div className='bookContainer'>
                <iframe className='bookContainer_book' src="https://publuu.com/flip-book/29102/90831/page/6" ></iframe>
            </div>
            <div>
                <Comment></Comment>
            </div>
        </div>
    )
}

export default BookEffect