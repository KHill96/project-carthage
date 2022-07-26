import Image from "next/image"
import axios from 'axios'

export async function getServerSideProps(context){
  // Get most recent books
  let res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/books/popular/`)
  // Set prop for recent books
  var listPopularBooks = await res.data


  // Return all of the props that were set
  return {props: listPopularBooks}
}
const BookNew = (listPopularBooks) => {
   
  return(
      <div>
          <h1 className="popular-heading">&emsp;&emsp;&emsp;Most Popular Books</h1>
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
                                  src={book.cover_image_link}
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