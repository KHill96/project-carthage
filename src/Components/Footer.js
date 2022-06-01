import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'

export default function Footer(){
    return (
        <div className="footer">
            <a href="/privacy" className='left'>Privacy Policy</a>
            <a href="/contact" className='right'>Contact</a>
        </div>
    );
}