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
                    

                        <span className="description-links">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                                
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
