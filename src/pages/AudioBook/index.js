import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import httpService from '~/services/http-service';
import './audioBook.scss'
const AudioBook = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [book, setBook] = useState({});
    const [audio, setAudio] = useState([]);
    const [play, setPlay] = useState([]);
    const [phayNow, setPlayNow] = useState();
    const [title, setTitle] = useState()
    const pathRead = "http://18.144.43.131:5000/api/books/" + `${id}`;

    console.log(pathRead);
    useEffect(() => {
        httpService.get(pathRead).then((data) => {
            // console.log(data.data.book.video);
            setAudio(data.data.book.video);
            const arr = [];
            audio.forEach((currntu, index) => {
                arr.push(true);
                setPlay(arr)
            })
            setBook(data.data.book);
            setPlayNow(audio[0]);
        })
    }, [])
    const isPlay = (in_dex, link) => {

        const arr = [];
        audio.forEach((currntu, index) => {
            if (index != in_dex) {
                arr.push(true);
            }
            else {
                arr.push(false);
            }
            setPlay(arr)
            setPlayNow(link);
            const chuong = +in_dex + 1
            const titleName = "Chương " + chuong;
            setTitle(titleName)
            // setTitle("Chương " + index)
        })

    }
    console.log(play)
    return (
        <div className="container-audio">
            <div className="title-book">
                {book.namebook}
            </div>
            <div className="content-audio">
                <div className="audio-image">
                    <img src={book.image} alt="" />
                </div>
                <div className="audio">
                    <div className="audio-image-sub">
                        {/* <img src="https://salt.tikicdn.com/cache/w1200/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg" alt="" /> */}
                        <div style={{ "width": "100%", "paddingLeft": "2rem", "fontWeight": "bold" }}>
                            <p>{title}</p>
                        </div>
                    </div>
                    <div className="audio-main">
                        <audio src={phayNow} controls></audio>
                    </div>
                    <div className="hr"></div>
                    <div className="listAudio">
                        <ul>
                            {
                                audio.length && audio.map((currentUserId, index) => {

                                    return (
                                        <li link={currentUserId} key={index} onClick={() => isPlay(index, currentUserId)}>Chương {index + 1}
                                            {play[index] ? <i class="fa fa-play"></i> : <i class="fas fa-square"></i>}
                                        </li>

                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudioBook