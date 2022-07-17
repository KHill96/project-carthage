import Link from "next/link";

const Footer = () => {
    return ( 
        <div className="footer">
            <Link href="/privacy" className='left'><a>Privacy Policy </a></Link>
            <Link href="/contact" className='right'><a>Contact</a></Link>
        </div> );
}
 
export default Footer;