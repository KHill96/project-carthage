import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'
import styles from '../../styles/Movie.module.css'
import dynamic from "next/dynamic"
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false })



export async function getServerSideProps(context){
    const endpoint = process.env.SERVER_API_ENDPOINT
    const res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/movies/${context.query.id}`)
    var movieInfo = await res.data
    let temp = movieInfo.data
    movieInfo = temp
    return {props: {movieInfo, apiPoint: endpoint}}
}



const Movie = ({movieInfo, apiPoint}) => {
    async function handleClickUpdateDownloads(){
        const res = await axios.patch(`${apiPoint}/api/movies/${movieInfo.data.id}`)
    }
    
    return ( 
        <div>
        {movieInfo && 
            <Head>
                <title>{movieInfo.title}</title>
                <meta name="viewport" content="initial-scale=1.0" />
            </Head>
        }
        { movieInfo &&
        <div>
        <h1 className={styles.main_title}>{movieInfo.title}</h1>
            <div className={styles.player_wrapper}>
                <ReactPlayer 
                    className={styles.movie}
                    url={movieInfo.file_location}
                    controls={true}
                    config={{
                        file:{
                            tracks:[
                                {
                                    kind:"subtitles",
                                    src:movieInfo.subtitle_file_english,
                                    srcLang:"en",
                                    label:"English"
                                }
                            ]
                        }
                    }}
                
                />
           
            </div>
            <div className={styles.movie_description}>
                <span><br></br>{movieInfo.description}<br></br></span>
                <span><br></br><Link  href={movieInfo.file_location}><a onClick={() => handleClickUpdateDownloads()} download>Download</a></Link></span>
            </div>


        </div>
        }

        <div className={styles.buffer}></div>
        </div>
     );
}


 
export default Movie;