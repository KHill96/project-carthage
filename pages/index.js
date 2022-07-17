import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import HeaderNext from '../comps/header'
import Header from '../comps/header'
import HomeContent from '../comps/homeContent'
import About from './about'

export default function Home() {
  return (
    
    <div>
      <div>
            {/* Books Component */}
            <h1 className="heading">Books</h1>
            <h2 className="sub-heading">&emsp;&emsp;&emsp;Recently Added</h2>
            <HomeContent items="books" category="recentlyAdded"/>
            <h2 className="sub-heading">&emsp;&emsp;&emsp;Most Popular</h2>
            <HomeContent items="books" category="mostPopular"/>
            
            
            {/* Movies Component */}
            {/* <h1 className="heading">Movies</h1>
            <h2 className="sub-heading">&emsp;&emsp;&emsp;Recently Added</h2>
            <HomeContent items="movies" category="recentlyAdded"/>
            <h2 className="sub-heading">&emsp;&emsp;&emsp;Most Popular</h2>
            <HomeContent items="movies" category="mostPopular"/> */}
            
            
        </div>
    </div>
  )
}
