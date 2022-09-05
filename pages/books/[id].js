import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'



export async function getServerSideProps(context){
    const endpoint = process.env.SERVER_API_ENDPOINT
    const res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/books/${context.query.id}`)
    var bookInfo = await res.data
    let temp = bookInfo.data
    bookInfo = temp
    return {props: {bookInfo, apiPoint: endpoint}}
}



const Book = ({bookInfo, apiPoint}) => {
    async function handleClickUpdateDownloads(){
        const res = await axios.patch(`${apiPoint}/api/books/${bookInfo.data.id}`)
    }
    
    return ( 
        <div>
        {bookInfo && 
            <Head>
                <title>{bookInfo.title}</title>
                <meta name="viewport" content="initial-scale=1.0" />
            </Head>
        }
        <div className="container">
            <div className="main-title">
            {bookInfo && <h1> {bookInfo.title} <br></br>by  {bookInfo.author}</h1>   }
            </div>
            <div className="book-info">
                <div className="image-container">
                    {/* <img alt="cover_image" src=""/> */}
                    {bookInfo && 
                        <Image 
                            className="book-cover"
                            src={bookInfo.cover_image_link}
                            alt="cover"
                            width="180px"
                            height="320px"/>}
                    </div>
                    <div className="book-info-text-description">
                    
                        {bookInfo && <span className="description">{bookInfo.description}</span>}
                        {bookInfo && 
                            <span className="links">
                                <br></br>
                                <br></br>
                                <Link href={bookInfo.html_link}><a onClick={() => handleClickUpdateDownloads()}>Read Online 🖥</a></Link><br></br>
                                <Link href={bookInfo.pdf_link}><a  onClick={() => handleClickUpdateDownloads()}>Download PDF 📁</a></Link><br></br>
                                <Link href={bookInfo.azw3_link}><a onClick={() => handleClickUpdateDownloads()}>Download for Kindle devices:AZW3 💽</a></Link><br></br>
                                <Link href={bookInfo.epub_link}><a onClick={() => handleClickUpdateDownloads()}>Download for compatible readers: EPUB 📀</a></Link><br></br>
                            </span>
                        }
                    </div>
                    
            </div>
            
        </div>

        </div>
     );
}


 
export default Book;