import React from "react";
// import { useParams } from "react-router";
import '../App.css'

export default function Book(){

    // const params = useParams();
    // const bookInfo = [];
    
    // Get info & links r

    return(
        <div className="container">
            <div className="title">
                <h1>Test of the Titles <br></br>by Placeholder Name </h1>   
            </div>
            <div className="book-info">
                <div className="image-container">
                    <img alt="cover_image" src="https://images-na.ssl-images-amazon.com/images/I/81X-7ubCi2L.jpg"/>
                </div>
                <div className="info">
                    <div className="description">
                    BOok good lorem ipsum meme classic tale of alien invasion has to this day never been out of print. Like many works of the era, it was originally published as a serial—though the publisher, Pearson’s Magazine, demanded to know the ending before committing to publication.
                    </div>
                    <div className="links">
                        <br></br>HTML:link<br></br>
                        Epub:link<br></br>
                        Epub2:link<br></br>
                        azw3:link<br></br>
                        pdf:link<br></br>
                    </div>
                </div>
            </div>
        </div>
    );



}
