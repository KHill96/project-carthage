import React, {useEffect} from "react";
import HomeContent from '../Components/HomeContent'
import '../App.css'


export default function Home(){

    // Set title
    useEffect(() => {
        document.title="Public Repository"
    })

    return(
        <div>
            {/* Books Component */}
            <h1 className="heading">Books</h1>
            <h2 className="sub-heading">&emsp;&emsp;&emsp;Recently Added</h2>
            <HomeContent items="books" category="recentlyAdded"/>
            <h2 className="sub-heading">&emsp;&emsp;&emsp;Most Popular</h2>
            <HomeContent items="books" category="mostPopular"/>
            
            
            {/* Movies Component */}
            <h1 className="heading">Movies</h1>
            <h2 className="sub-heading">&emsp;&emsp;&emsp;Recently Added</h2>
            <HomeContent items="movies" category="recentlyAdded"/>
            <h2 className="sub-heading">&emsp;&emsp;&emsp;Most Popular</h2>
            <HomeContent items="movies" category="mostPopular"/>
            
            
        </div>
    );

}