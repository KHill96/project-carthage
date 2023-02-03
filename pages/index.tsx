import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {getNewDisplay} from '../services'


const Home = (props:{books: any}) => {
  return (
    <div className='no-underline'>
      <Head>
      <link rel="shortcut icon" href='carthage.png' />
      <title>Project Carthage</title>
      </Head>
      <div className='pt-5'>
          <div className='no-underline'>
            <ul className='m-0 flex-column m-auto pl-[10px]'>
              {props.books &&
                props.books.map((book: any) =>{
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

export async function getServerSideProps() {
  const books = await getNewDisplay()
  return {props:{books}}
}

export default Home
