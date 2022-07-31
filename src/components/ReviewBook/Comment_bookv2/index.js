import Comments from "../Comment_bookv2/Comments"
import './comment.css'
import { useEffect } from "react";

const CommentBooks = ({ socket }) => {
    useEffect(() => {

    })
    return (
        <div>
            <Comments
                commentsUrl="http://localhost:3004/comments"
                currentUserId="1"
                socket={socket}
            />
        </div>
    );
};

export default CommentBooks;
