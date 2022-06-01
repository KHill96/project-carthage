import React, {useEffect} from "react";
import '../App.css'


export default function Privacy(){
    
    useEffect(() => {
        document.title="Privacy Policy"
    })

    return(
        <div className="privacy">
            <h2>Privacy Policy</h2>
                <p> &emsp; On the Public Repository, the only data collected is total downloads and view for any given piece of content. 
                    This is done to provide users with an idea of what's gaining poularity</p>
            <br></br><br></br>
            <h2>Captchas</h2>
                <p> &emsp;Some captcha is implemented  to avoid high traffic due to crawlers</p>
                <br></br><br></br>
            <h2>E-Mail Notifications</h2>
                <p> &emsp; At the moment e-mail notifications are not in place. at some point there may be a subscription option to receive updates on new uploads or batches</p>
        </div>  
    );
}