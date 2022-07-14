import React, { useState } from 'react'
import './addComment.scss'
import { FormControl, InputLabel, Input, Button } from '@mui/material';
import axios from 'axios';
const AddComent = (props) => {
  const { socket, comment, setComment } = props;

  const changeComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);

  }
  const addComment = (e) => {
    e.preventDefault();
    socket.emit('comment', comment)
    console.log("add comment " + comment)
    const demoComment = {
      user: "nguyen quy1",
      book: "62ab6e54ead95d78292cc437",
      commentBookContent: comment

    }
    axios.post("http://localhost:5000/api/commentBooks", demoComment)
      .then(res => {
        console.log("success");
        console.log(res)
      })
      .catch(err => console.log("loi tao comment"))
    setComment("");

  }

  return (
    <div>
      <div className='form-group'>
        <div style={{ width: '75%', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          <input id="my-input" aria-describedby="my-helper-text" className="form-group_input" placeholder="Nhận xét" onChange={(e) => changeComment(e)} value={comment} />
          <button variant="outlined" className="form-group_button" onClick={addComment} >Nhận xét</button>
        </div>
      </div>

    </div>
  )
}

export default AddComent