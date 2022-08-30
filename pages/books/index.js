import Image from "next/image"
import axios from 'axios'
import styles from '../../styles/BooksList.module.css'



export async function getServerSideProps(context){
  
  var sort = context.query.sort;
  var booksList;

  
  if(context.query.sort === 'popular'){
    sort = context.query.sort;
    // Get most recent books
    let res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/books?sort=popular`)
    // Set prop for recent books
    booksList = await res.data
  }
  else{
    let res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/books?sort=recent`)
    // Set prop for recent books
    booksList = await res.data
  }


  // Return all of the props that were set
  return {props: {booksList, sort}}
}

const BookNew = ({booksList, sort}) => {
  return(
      <div>
          { sort === 'popular' && 
            <h1 className={styles.popular_heading}>Most Popular Books</h1>}

          { sort === 'recent' && 
            <h1 className={styles.popular_heading}>Most Recent Books</h1>}

          <div>
                <span>
                <div>
                    <ul className={styles.display}>
                        {booksList &&
                          booksList.data.map((book, idx) =>{
                            return(
                            <li className={styles.horizontal} key={idx}>
                              <a className={styles.title} href={`/books/${book.id}`}>
                                <Image 
                                  src={book.cover_image_link}
                                  alt="cover"
                                  width="200px"
                                  height="340px"
                                />
                                <span>{book.title}</span>
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