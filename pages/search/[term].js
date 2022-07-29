import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import styles from '../../styles/Search.module.css'


export async function getServerSideProps(context){
    var results
    if(context.query.term){
        const res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/search/${context.query.term}`)
        let temp = await res.data
        results = temp.data
    }
    
    return{props:{results}}
}


const Search = ({results}) => {
    return(
        <div className={styles.body_content}>
            
            <ul className={styles.display}>
                {results &&
                    results.map((item,idx) => {
                        return(
                            <li className={styles.horizontal} key={idx}>
                                <a className={styles.title} href={`/books/${item.id}`}>
                                    <Image 
                                    className={styles.cover_image}
                                    src={item.cover_image_link}
                                    alt='cover'
                                    width='180px'
                                    height='320px'
                                    />
                                    <p>{item.title}</p>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default Search;