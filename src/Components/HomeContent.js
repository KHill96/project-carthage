import React from "react";
import bookCoverTemp from '../Assets/bookCover.png'
import './HomeContent.css'

export default function HomeContent (props){

    const listItemsRecentlyAdded = [];
    const listItemsMostPopular = [];

    // Generate listItems
    var idString = "";
    for (let i = 0; i < 8; i++){
        if (props.items==="books"){
            idString ='/books/' + i;
                if (props.category==="recentlyAdded"){
                listItemsRecentlyAdded.push(
                <li className="horizontal">
                    <a className="title" href={idString}>
                        <img src={bookCoverTemp} alt="cover"/>
                        <p>BookText</p>
                    </a>
                </li>)
            }
            else{
                listItemsMostPopular.push(
                    <li className="horizontal">
                        <a className="title" href=".">
                            <img src={bookCoverTemp} alt="cover"/>
                            <p>BookText</p>
                        </a>
                    </li>)
            }   
        }
        else{
            if (props.category==="recentlyAdded"){
                listItemsRecentlyAdded.push(
                <li className="horizontal">
                    <a className="title" href=".">
                        <img src={bookCoverTemp} alt="cover"/>
                        <p>MovieText</p>
                    </a>
                </li>)
            }
            else{
                listItemsMostPopular.push(
                    <li className="horizontal">
                        <a className="title" href=".">
                            <img src={bookCoverTemp} alt="cover"/>
                            <p>MovieText</p>
                        </a>
                    </li>)
            }   
        }
    }

   

   
        if (props.category==="recentlyAdded"){
            return(
                <div className="body-content">
                    <span className="content">
                    <div className="recentlyAdded">
                        <ul className="display">
                            {listItemsRecentlyAdded}
                        </ul>
                    </div>  
                </span>
            </div>  
            )
        }
        else{
            return(
                <div className="body-content">
                    <span className="content">
                        <div className="recentlyAdded">
                            <ul className="display">
                                {listItemsMostPopular}
                            </ul>
                        </div>  
                    </span>
                </div> 
            )
        }
    

   
}
