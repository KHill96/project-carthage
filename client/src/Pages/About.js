import React, {useEffect} from "react";

export default function About(){

    useEffect(() => {
        document.title="About"
    })


    return (
        <div className="about">
            <h3>About the Public Repository</h3> 
             <p> &emsp; The Public Repository is a personal project that stores and provides access to work in the public domain. As of right now work is limited to movies, but more material will come over time.</p>
            <h3> Watch, Read, or Download</h3>
            <p> &emsp; Watch or read some of our movies or books in your browser, or download them to have handy at any time.</p>
            <h3>What's the Mission?</h3>
            <p> &emsp; Work in the public domain should be easily accessible for all. Everyone should be encouraged to explore content in the public domain and to utilize the resources that make that content available. </p>
            <p className="disclaimer">
            <b>The site follows US Copyright Law and it's definition of work public domain.</b></p>
        </div>
    );

}