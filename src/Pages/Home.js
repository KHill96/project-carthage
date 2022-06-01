import React, {useEffect} from "react";
import HomeContent from '../Components/HomeContent'
import '../App.css'
import bookCoverTemp from '../Assets/bookCover.png';


export default function Home(){

    // Set title
    useEffect(() => {
        document.title="Public Repository"
    })

    return(
        <div>
            {/* Books Component */}
            <HomeContent items="books"/>
            {/* Movies Component */}
            <HomeContent items="movies"/> 
        </div>
    );

}