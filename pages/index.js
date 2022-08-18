import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'



export async function getServerSideProps(context){
  // Get most recent books
  let res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/books?sort=recent&limit=6`)
  // Set prop for recent books
  var listRecentBooks = await res.data
  // Get most popular books
  res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/books?sort=popular&limit=6`)
  // Set prop for most popular books
  var listPopularBooks = await res.data
 
  // Return all of the props that were set
  return {props: {listRecentBooks, listPopularBooks}}
}
const Home = ({listRecentBooks, listPopularBooks}) => {
    
  return(
      <div>
        <Head><title>Project Carthage</title></Head>
        {/* <Link href="/books/"><a className='heading-link'><h1 className='heading'>Books</h1></a></Link> */}
        <span>&emsp;&emsp;&emsp;</span>
        <Link href="/books/new"><a className={styles.sub_heading}><h2 className={styles.underline}>Recently Added</h2></a></Link>
        <div className={styles.body_content}>
              <span className={styles.content}>
              <div className={styles.recently_added}>
                  <ul className={styles.display}>
                      {listRecentBooks &&
                        listRecentBooks.data.map((book, idx) =>{
                          return(
                          <li className={styles.horizontal} key={idx}>
                            <a className={styles.title} href={`/books/${book.id}`}>
                              <Image 
                                className={styles.cover_image}
                                src={book.cover_image_link}
                                alt="cover"
                                width="180px"
                                height="320px"
                              />
                              <p className='title'>{book.title}</p>
                            </a>
                          </li>
                        )})
                      
                      }

                  </ul>
              </div>  
          </span>
        </div>
        <Link href="/books/popular"><a className={styles.sub_heading}><h2 className={styles.underline}>Popular</h2></a></Link>
        <div className="body-content">
              <span className={styles.content}>
              <div className={styles.most_popular}>
                  <ul className={styles.display}>
                      {listPopularBooks &&
                        listPopularBooks.data.map((book, idx) =>{
                          return(
                          <li className={styles.horizontal} key={idx}>
                            <a className={styles.title} href={`/books/${book.id}`}>
                              <Image 
                                className={styles.cover_image}
                                src={book.cover_image_link}
                                alt="cover"
                                width="180px"
                                height="320px"
                              />
                              <p className='title'>{book.title}</p>
                            </a>
                          </li>
                        )})
                      
                      }

                  </ul>
              </div>  
          </span>
        </div> 
        
      </div> 
  )
  

   
   
    
}
 
export default Home;