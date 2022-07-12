import {React, useState, useEffect} from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import '../App.css';

export default function Book(){

    // URL for API
    const params = useParams();
    const apiString = "http://localhost:4000/api";

    // State
    const [bookInfo, setBookInfo] = useState(null);

    
    // Axios API request

    useEffect(() => {
        fetch(apiString)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBookInfo(data)
            })
    },[]);
    


    // document.title = bookInfo.title;
    
    

    return(
        <div className="container">
            <div className="main-title">
                {bookInfo && <h1> {bookInfo.title} <br></br>by  {bookInfo.author}</h1>   }
            </div>
            <div className="book-info">
                <div className="image-container">
                    {/* <img alt="cover_image" src=""/> */}
                    <Image className="book-cover" rounded src="https://images-na.ssl-images-amazon.com/images/I/81X-7ubCi2L.jpg" alt="cover_image" />
                    <div className="book-info-text-description">
                    
                        { bookInfo && <span className="description-links">{bookInfo.description}</span>}

                    </div>
                    <div className="book-info-text-links">
                        {bookInfo && 
                        <span className="links">
                                <a className="book-links" href={bookInfo.html_link}>HTML</a><br></br>
                                <a className="book-links" href={bookInfo.pdf_link}>PDF</a><br></br>
                                <a className="book-links" href={bookInfo.azw3_link}>AZW3</a><br></br>
                                <a className="book-links" href={bookInfo.EPUB_link}>EPUB</a><br></br>
                        </span>}
                    </div>
                </div>
            </div>
            
        </div>
    );



}
