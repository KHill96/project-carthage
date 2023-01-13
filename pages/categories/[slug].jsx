import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getCategoriesAll, getCategoryBooks } from "../../services";

const CategoriesSlug = ({books, category}) =>{
    return (
        <div className='no-underline'>
          <Head>
            <title>{category}</title>
            <link rel="shortcut icon" href='../carthage.png' />
        </Head>
          <div className='pt-5'>
          <h1 className='text-center'>{category} Books</h1>

              <div className='no-underline'>
                <ul className='m-0 flex-column m-auto pl-[10px]'>
                  {books &&
                    books.map((book) =>{
                        return(
                          <li className='no-underline pt-10 pb-10' key={book.title}>
                            <div className='container'>
                              <div className='flex pb-50'>
                                <Link href={"/books/"+book.slug}>
                                  <Image
                                    src={book.cover.url}
                                    alt="cover"
                                    width={200}
                                    height={340}
                                    className='transition ease-in-ease-out hover:scale-110 min-w-[180px] max-h-[580px] min-h-[270px]'
                                  />
                                </Link>
                                <div className='pl-12'>
                                  <div>
                                    <Link href={"/books/"+book.slug} className='text-black no-underline hover:underline text-2xl'>{book.title}</Link>
                                  </div>
                                  <div className='text-2xl'>
                                    <span>By </span>
                                    {book.authors.length === 1 ? (
                                      <Link className='no-underline hover:underline text-black' href={'/authors/'+book.authors[0].slug}>{book.authors[0].name}</Link>
                                    ):(
                                      <>
                                      <Link className='no-underline hover:underline text-black' href={'/authors/'+book.authors[0].slug}>{book.authors[0].name}</Link>
                                      <span>, </span>
                                      <Link className='no-underline hover:underline text-black' href={'/authors/'+book.authors[1].slug}>{book.authors[1].name}</Link>
                                      </>
                                    )}
                                    <div>
                                  </div>
                                  </div>
                                  <div className='pt-3'>
                                    <Link href={'/books/'+book.slug} className='sm:text-xs lg:text-xl  text-black hover:underline no-underline'>{book.description}</Link>
                                  </div>
                              </div>
                            </div>
                            </div>
                          </li>
                        )
                      }      
                    )
                  }
                </ul>
              </div>
          </div>
    
        </div>
      )
}

export async function getStaticProps({params}){
    const details = await getCategoryBooks(params.slug)    
    return {props:{books: details.node.books, category: details.node.category}}
}

export async function getStaticPaths(){
    const details = await getCategoriesAll()
    return {
        paths: details.map(( {slug}) => ({params:{ slug }})),
        fallback: true
    }
}

export default CategoriesSlug