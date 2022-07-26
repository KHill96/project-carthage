import Image from "next/image"
import axios from 'axios'

export async function getServerSideProps(context){
  // Get most recent books
  let res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/books/new/`)
  // Set prop for recent books
  var listRecentBooks = await res.data


  // Return all of the props that were set
  return {props: listRecentBooks}
}
const BookNew = (listRecentBooks) => {
   
  return(
      <div>
          <h1 className="new-heading">&emsp;&emsp;&emsp;Recently Added Books</h1>
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