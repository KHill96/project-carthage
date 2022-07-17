import Image from "next/image";
import bookCoverTemp from '../public/books/1/cover.jpg'

const HomeContent = (props) => {
    
    const listItemsRecentlyAdded = [];
    const listItemsMostPopular = [];



    // Generate listItems
    var idString = "";
    var totalInList = 6;
    for (let i = 1; i <= totalInList; i++){
        if (props.items==="books"){
            idString ='/books/' + i;
                if (props.category==="recentlyAdded"){
                listItemsRecentlyAdded.push(
                <li className="horizontal">
                    <a className="title" href={idString}>
                        <Image 
                            src={bookCoverTemp}
                            alt="cover"
                            width="180px"
                            height="320px"
                        />
                        <p>BookText</p>
                    </a>
                </li>)
            }
            else{
                listItemsMostPopular.push(
                    <li className="horizontal">
                        <a className="title" href={idString}>
                            <Image 
                                src={bookCoverTemp}
                                alt="cover"
                                width="180px"
                                height="320px"
                            />
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
                        <Image 
                            src={bookCoverTemp}
                            alt="cover"
                            width="180px"
                            height="320px"
                        />
                        <p>MovieText</p>
                    </a>
                </li>)
            }
            else{
                listItemsMostPopular.push(
                    <li className="horizontal">
                        <a className="title" href={idString}>
                        <Image 
                            src={bookCoverTemp}
                            alt="cover"
                            width="180px"
                            height="320px"
                        />
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
 
export default HomeContent;