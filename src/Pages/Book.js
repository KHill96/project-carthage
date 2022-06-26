import React from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router";
import '../App.css'

export default function Book(){

    const params = useParams();
    console.log(params)
    // const bookInfo = [];
    
    // Get info & links from firebase

    return(
        <div className="container">
            <div className="main-title">
                <h1>Test of the Titles <br></br>by Placeholder Name </h1>   
            </div>
            <div className="book-info">
                <div className="image-container">
                    {/* <img alt="cover_image" src=""/> */}
                    <Image className="book-cover" rounded src="https://images-na.ssl-images-amazon.com/images/I/81X-7ubCi2L.jpg" alt="cover_image" />
                    <div className="book-info-text-description">
                    
                        <div className="buffer"></div>

                        <span className="description-links">
                            BOok good lorem ipsum meme classic tale of alien invasion has to this day never been out of print. Like many works of the era, it was originally published as a serial—though the publisher, Pearson’s Magazine, demanded to know the ending before committing to publication.
                                
                        </span>
                       
                    </div>
                    <div className="book-info-text-links">
                    <span className="links">
                                <br></br>HTML:link<br></br>
                                Epub:link<br></br>
                                Epub2:link<br></br>
                                azw3:link<br></br>
                                pdf:link<br></br>
                                </span>
                                </div>
                </div>
            </div>
            
        </div>
    );



}
