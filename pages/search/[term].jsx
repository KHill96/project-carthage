import React from "react";
import Link from "next/link";
import Image from "next/image";
import { searchTerm } from "../../services";
import Head from "next/head";

const SearchTerm = ({results, term}) =>{
    return ( 
            <>
                <div>
                    <Head>
                        <title>Results for "{term}"</title>
                        <meta name="viewport" content="initial-scale=1.0" />
                    </Head>
                </div>
                <div className='pt-5'>
                    <div className='no-underline'>
                        {results.length > 0 ? (
                            <><h1 className='text-center'>Results for '{term}'</h1>
                            <ul className='m-0 flex-column m-auto pl-[10px]'>
                            {results.map((book) => {
                                return (
                                    <li className='no-underline pt-10 pb-10' key={book.title}>
                                        <div className='container'>
                                            <div className='flex pb-50'>
                                                <Link href={"/books/" + book.slug}>
                                                    <Image
                                                        src={book.cover.url}
                                                        alt="cover"
                                                        width={200}
                                                        height={340}
                                                        className='transition ease-in-ease-out hover:scale-110 min-w-[180px] max-h-[580px] min-h-[270px]' />
                                                </Link>
                                                <div className='pl-12'>
                                                    <div>
                                                        <Link href={"/books/" + book.slug} className='text-black no-underline hover:underline text-2xl'>{book.title}</Link>
                                                    </div>
                                                    <div className='text-2xl'>
                                                        <span>By </span>
                                                        {book.authors.length === 1 ? (
                                                            <Link className='no-underline hover:underline text-black' href={'/authors/' + book.authors[0].slug}>{book.authors[0].name}</Link>
                                                        ) : (
                                                            <>
                                                                <Link className='no-underline hover:underline text-black' href={'/authors/' + book.authors[0].slug}>{book.authors[0].name}</Link>
                                                                <span>, </span>
                                                                <Link className='no-underline hover:underline text-black' href={'/authors/' + book.authors[1].slug}>{book.authors[1].name}</Link>
                                                            </>
                                                        )}

                                                    </div>
                                                    <div className='pt-3'>
                                                        <Link href={'/books/' + book.slug} className='sm:text-xs lg:text-xl  text-black hover:underline no-underline'>{book.description}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul></>
                        ):(
                            <h2 className="text-center pt-5">No Results Found</h2>
                        )
                        }
                        
                    </div>
                </div>
            </>
        )
}

export async function getServerSideProps({params}){
    const details = await searchTerm(params.term)
    console.log(details)
    return {props:{results: details.books, term: params.term}}
}


export default SearchTerm