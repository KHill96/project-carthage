import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import styles from '../../styles/Search.module.css'

export async function getServerSideProps(context){
    if(context.query.term){
        var term = context.query.term;
        const res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/search/${context.query.term}`)
        var results = await res.data
    }
    return {props:{results, term}}
}


const Search = ({results,term}) => {
    if(results.success === true){
        return(
            <div className={styles.body_content}> 
                <Head><title>Search Results: {term}</title></Head>
                <ul className={styles.display}>
                    {
                        results.data.map((item,idx) => {
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
       
    else{
        return(
            <div className={styles.body_content}>
                <Head><title>No Results: {term}</title></Head>
                <h1 className={styles.no_results}>No Results Found</h1>
            </div>
        )
    }

}

export default Search;