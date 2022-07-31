import React from 'react'
import './review_book.scss'
import CommentBooks from '../../components/ReviewBook/Comment_bookv2';
const io = require('socket.io-client');
// const socket = io('http://localhost:5000', { transports: ['websocket'] });

const socket = io('http://18.144.43.131:5000', { transports: ['websocket'] });

const ReviewBook = () => {
    return (
        <div className="container-book">
            <b className="title-book">Sách Đắc Nhân Tâm - Đọc Sách Online, Nghe sách nói, Tải Sách Miễn Phí (PDF)</b>
            <div className="book">
                <img className="book-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8IwK3stISjN8cfr0M8BeLoUzcddUSNyhtg&usqp=CAU"></img>
                <div className="book-detail">
                    <div>
                        <ul className="book-detail-infor">
                            <li><strong>Danh mục</strong>:Self-help</li>
                            <li><strong>Tác giả</strong>:Dale Carnegie</li>
                            <li><strong>Đánh giá</strong>:4/5</li>
                        </ul>
                    </div>
                    <div className="book-detail-option">
                        <button className="book-detail-option-read">Đọc</button>
                        <button className="book-detail-option-add">Thêm vào kho</button>
                    </div>
                </div>
            </div>
            <div className="book-review">
                <b className="title-book">Review Sách Đắc Nhân Tâm</b>
                <p>Đắc nhân tâm của Dale Carnegie – top những quyến sách bán chạy nhất thế giới, đồng thời cũng là một cuốn sách thật sự đem lại những ý kiến chỉ trích trái chiều. Có kẻ đam mê cho rằng nó là cuốn sách đem lại nhiều giá trị tuyệt vời cho người đọc, bao gồm những lời khuyên cực kì bổ ích về cách ứng xử trong cuộc sống hàng ngày. Nhưng cũng không ít kẻ chê bai, đây thực chất là tổng hợp những bí thuật lừa dối đầy giả tạo, dùng miệng lưỡi dối gian để làm công cụ thu phục lòng người nhắm mục đích xấu xa, chuộc lợi</p>
            </div>
            <CommentBooks socket={socket}></CommentBooks>

        </div>
    )
}

export default ReviewBook