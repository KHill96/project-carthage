import React from "react";
// import bookCoverTemp from '../Assets/bookCover.png'
import './HomeContent.css'

export default function HomeContent (props){

    const listItemsRecentlyAdded = [];
    const listItemsMostPopular = [];
    const bookCoverTemp = "https://images-na.ssl-images-amazon.com/images/I/81X-7ubCi2L.jpg"
    const movieCoverTemp = ""
    // Generate listItems
    var idString = "";
    var totalInList = 6;
    for (let i = 0; i < totalInList; i++){
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
                        <a className="title" href={idString}>
                            <img src={bookCoverTemp} alt="cover"/>
                            <p>BookText</p>
                        </a>
                    </li>)
            }   
        }
        else{
            idString = '/movies/' + i;
            if (props.category==="recentlyAdded"){
                listItemsRecentlyAdded.push(
                <li className="horizontal">
                    <a className="title" href={idString}>
                        <img src={bookCoverTemp} alt="cover"/>
                        <p>MovieText</p>
                    </a>
                </li>)
            }
            else{
                listItemsMostPopular.push(
                    <li className="horizontal">
                        <a className="title" href={idString}>
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
