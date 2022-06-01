import React from "react";
import bookCoverTemp from '../Assets/bookCover.png'
import './HomeContent.css'

export default function HomeContent (props){

    const listItems = [];

    for (let i = 0; i < 9; i++){
        if (props.items==="books"){
            listItems.push(
                <li className="horizontal">
                    <a className="title" href=".">
                        <img src={bookCoverTemp} alt="cover"/>
                        <p>Text</p>
                    </a>
                </li>
            )
        }
        else if (props.items === "movies"){
            listItems.push(
                <li className="horizontal">
                    <a className="title" href=".">
                        <img src={bookCoverTemp} alt="cover" />
                        <p>Text</p>
                    </a>
                </li>
            )
        }
    }


    if (props.items==="books"){
        return(
            <div className="body-content">
            <h1 className="heading">Books</h1>
            <h3 className="sub-heading">&emsp;&emsp;&emsp;Recently Added</h3>
            <span className="content">
                <div className="recentlyAdded">
                    <ul className="display">
                        {listItems}
                    </ul>
                </div>  
            </span>
        </div>  
        )
    }

    else{
        return(
            <div className="body-content">
            <h1 className="heading">Movies</h1>
            <h3 className="sub-heading">&emsp;&emsp;&emsp;Recently Added</h3>
            <span className="content">
                <div className="recentlyAdded">
                    <ul className="display">
                        {listItems}
                    </ul>
                </div>  
            </span>
        </div>  
        )
    }
}
