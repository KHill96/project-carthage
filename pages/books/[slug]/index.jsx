import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {getBook} from '../../../services'



const Book = ({book}) => {
    const parse = require('html-react-parser');
    return(
        <div>
        {book && 
            <>
                <Head>
                    <title>{book.title}</title>
                    <meta name="viewport" content="initial-scale=1.0" />
                </Head>
                <div className="block">
                    <div className="pt-5 text-center">
                                <Link href={book.pdf.url}  className="pr-10 text-xl text-black no-underline hover:underline font-bold">Download PDF</Link>
                                <Link href={book.epub.url} className="pr-10 text-xl text-black no-underline hover:underline font-bold">Download EPUB</Link>
                                <Link href={book.azw3.url} className="pr-10 text-xl text-black no-underline hover:underline font-bold">Download AZW3</Link>
                    </div>
                         
                    <section className="pt-10 grid place-items-center">
                        <Image
                                className="text-center min-w-[180px] max-h-[580px] min-h-[270px] "
                                src={book.cover.url}
                                alt="cover"
                                width={250}
                                height={390}
                        />
                    </section>
                
                    <div className="pl-12">
                        
                        
                        <div className="pb-50">
                            {parse(book.html)}
                        </div>
                        

                    </div>
                        
                </div>
            </>
        }
            

        </div>
    )
}

export async function getServerSideProps({params}){
    const details = await getBook(params.slug)
    return {props:{book:details.books[0]}}
}



export default Book