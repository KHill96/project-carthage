import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'


export async function getServerSideProps(context){
  // Get most recent books
  let res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/books/new/6`)
  // Set prop for recent books
  var listRecentBooks = await res.data
  // Get most popular books
  res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/books/popular/6`)
  // Set prop for most popular books
  var listPopularBooks = await res.data
  res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/movies/new/6`)
  // Set prop for recent books
  var listRecentMovies = await res.data
  // Get most popular books
  res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/movies/popular/6`)
  // Set prop for most popular books
  var listPopularMovies = await res.data

  // Return all of the props that were set
  return {props: {listRecentBooks, listPopularBooks, listRecentMovies, listPopularMovies}}
}
const Home = ({listRecentBooks, listPopularBooks, listRecentMovies, listPopularMovies}) => {
    
  return(
      <div>
        <Head><title>Project Carthage</title></Head>
        <Link href="/books/"><a className='heading-link'><h1 className='heading'>Books</h1></a></Link>
        <Link href="/books/new"><a className='sub-heading'><h2 >&emsp;&emsp;&emsp;Recently Added</h2></a></Link>
        <div className="body-content">
              <span className="content">
              <div className="recentlyAdded">
                  <ul className="display">
                      {listRecentBooks &&
                        listRecentBooks.data.map((book, idx) =>{
                          return(
                          <li className="horizontal" key={idx}>
                            <a className="title" href={`/books/${book.id}`}>
                              <Image 
                                className='cover-image'
                                src={book.cover_image_link}
                                alt="cover"
                                width="180px"
                                height="320px"
                              />
                              <p>{book.title}</p>
                            </a>
                          </li>
                        )})
                      
                      }

                  </ul>
              </div>  
          </span>
        </div>
        <Link href="/books/popular"><a className='sub-heading'><h2>&emsp;&emsp;&emsp;Popular</h2></a></Link>
        <div className="body-content">
              <span className="content">
              <div className="mostPopular">
                  <ul className="display">
                      {listPopularBooks &&
                        listPopularBooks.data.map((book, idx) =>{
                          return(
                          <li className="horizontal" key={idx}>
                            <a className="title" href={`/books/${book.id}`}>
                              <Image 
                                className='cover-image'
                                src={book.cover_image_link}
                                alt="cover"
                                width="180px"
                                height="320px"
                              />
                              <p>{book.title}</p>
                            </a>
                          </li>
                        )})
                      
                      }

                  </ul>
              </div>  
          </span>
        </div> 
        <Link href="/movies/"><a className='heading-link'><h1 className='heading'>Movies</h1></a></Link>
        <Link href="/movies/new"><a className='sub-heading'><h2 >&emsp;&emsp;&emsp;Recently Added</h2></a></Link>
        <div className="body-content">
              <span className="content">
              <div className="recentlyAdded">
                  <ul className="display">
                      {listRecentMovies &&
                        listRecentMovies.data.map((movie, idx) =>{
                          return(
                          <li className="horizontal" key={idx}>
                            <a className="title" href={`/movies/${movie.id}`}>
                              <Image 
                                className='cover-image'
                                src={movie.cover_image_link}
                                alt="cover"
                                width="180px"
                                height="320px"
                              />
                              <p>{movie.title}</p>
                            </a>
                          </li>
                        )})
                      
                      }

                  </ul>
              </div>  
          </span>
        </div>
        <Link href="/movies/popular"><a className='sub-heading'><h2>&emsp;&emsp;&emsp;Popular</h2></a></Link>
        <div className="body-content">
              <span className="content">
              <div className="mostPopular">
                  <ul className="display">
                      {listPopularMovies &&
                        listPopularMovies.data.map((movie, idx) =>{
                          return(
                          <li className="horizontal" key={idx}>
                            <a className="title" href={`/movies/${movie.id}`}>
                              <Image 
                                className='cover-image'
                                src={movie.cover_image_link}
                                alt="cover"
                                width="180px"
                                height="320px"
                              />
                              <p>{movie.title}</p>
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