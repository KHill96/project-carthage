import Image from "next/image"
import axios from 'axios'

export async function getServerSideProps(context){
  // Get most recent books
  let res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/movies/new/`)
  // Set prop for recent books
  var listRecentMovies = await res.data


  // Return all of the props that were set
  return {props: listRecentMovies}
}
const BookNew = (listRecentMovies) => {
   
  return(
      <div>
          <h1 className="new-heading">&emsp;&emsp;&emsp;Recently Added Movies</h1>
          <div className="body-content">
                <span className="content">
                <div className="recentlyAdded">
                    <ul className="display">
                        {listRecentMovies &&
                          listRecentMovies.data.map((movie, idx) =>{
                            return(
                            <li className="horizontal" key={idx}>
                              <a className="title" href={`/movies/${book.id}`}>
                                <Image 
                                  src={movie.cover_image_link}
                                  alt="cover"
                                  width="200px"
                                  height="340px"
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
    </div>
  )
  

   
   
    
}
 
export default BookNew;