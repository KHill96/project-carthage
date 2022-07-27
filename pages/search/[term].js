import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'


export async function getServerSideProps(context){
    var results
    if(context.query.term){
        const res = await axios.get(`${process.env.SERVER_API_ENDPOINT}/api/search/${context.query.term}`)
        let temp = await res.data
        results = temp.data
    }
    else{
        console.log("No results")
    }
    return{props:{results}}
}


const Search = ({results}) => {
    return(
        <div>
            {/* See Home Content on how to render */}
        </div>
    )

}

export default Search;